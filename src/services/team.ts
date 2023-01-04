import axios, { AxiosError } from 'axios'
import API from '@src/utils/api'
import { store } from '@src/redux/store/index'
import { ErrorRes } from '@src/types/auth'

const URL = process.env.NEXT_PUBLIC_API_URL as string

export const getTeamData = async () => {
  const { auth } = store.getState()
  try {
    const response = await axios({
      method: 'GET',
      url: URL + API.team.teamData,
      headers: {
        Authorization: `Bearer ${auth.token}`
      }
    })
    return response.data
  } catch (e) {
    const err = e as AxiosError
    const errorMsg = err.response as ErrorRes
    return errorMsg?.data?.message
  }
}

export const getMemberData = async () => {
  const { auth } = store.getState()
  try {
    const response = await axios({
      method: 'GET',
      url: URL + API.participant.memberData,
      headers: {
        Authorization: `Bearer ${auth.token}`
      }
    })
    return response.data
  } catch (e) {
    return 'FAILED'
  }
}

export const competitionRegistration = async (compe: string) => {
  const { auth } = store.getState()
  try {
    const response = await axios({
      method: 'PUT',
      url: URL + API.team.compRegis(compe),
      headers: {
        Authorization: `Bearer ${auth.token}`
      }
    })
    return response.data.message
  } catch (e) {
    return 'FAILED'
  }
}
