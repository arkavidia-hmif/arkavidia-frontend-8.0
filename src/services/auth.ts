import axios, { AxiosError } from 'axios'
import API from '@src/utils/api'
import { store } from '@src/redux/store/index'
import { setToken, userLogout } from '@src/redux/action/auth'
import { LoginRes, ErrorRes } from '@src/types/auth'
import { TeamLoginReq, TeamRegisterReq, ChangePassReq } from '@src/types/team'

const URL = process.env.NEXT_PUBLIC_API_URL as string

export const register = async (payload: TeamRegisterReq) => {
  try {
    const response = await axios({
      method: 'POST',
      url: URL + API.auth.register,
      data: payload
    })
    const data = response.data as LoginRes
    const token = data.data
    store.dispatch(setToken(token))
    console.log(response)
    return data.message
  } catch (e) {
    const err = e as AxiosError
    const errorMsg = err.response as ErrorRes
    return errorMsg?.data?.message
  }
}

export const login = async (payload: TeamLoginReq) => {
  try {
    const response = await axios({
      method: 'POST',
      url: URL + API.auth.login,
      data: payload
    })
    const data = response.data as LoginRes
    const token = data.data
    store.dispatch(setToken(token))
    return data.message
  } catch (e) {
    return 'FAILED'
  }
}

export const logout = async () => {
  try {
    store.dispatch(userLogout())
    localStorage.clear()
  } catch (e) {
    console.log(e)
  }
}

export const changePass = async (payload: ChangePassReq) => {
  const { auth } = store.getState()

  try {
    const response = await axios({
      method: 'PUT',
      url: URL + API.auth.changePass,
      headers: {
        Authorization: `${auth.token}`
      },
      data: payload
    })
    return response.data.message
  } catch (e) {
    console.log(e)
    return 'FAILED'
  }
}
