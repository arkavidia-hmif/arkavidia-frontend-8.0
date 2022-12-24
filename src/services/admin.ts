import axios, { AxiosError } from 'axios'
import API from '@src/utils/api'
import { store } from '@src/redux/store/index'
import { adminLogin, userLogout } from '@src/redux/action/auth'
import { LoginRes, ErrorRes } from '@src/types/auth'
import { TeamLoginReq } from '@src/types/team'

const URL = process.env.NEXT_PUBLIC_API_URL as string

export const loginAdmin = async (payload: TeamLoginReq) => {
  try {
    const response = await axios({
      method: 'POST',
      url: URL + API.admin.login,
      data: payload
    })
    console.log(response)
    const data = response.data as LoginRes
    const token = data.Data
    store.dispatch(adminLogin(token))
    return data.Message
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
