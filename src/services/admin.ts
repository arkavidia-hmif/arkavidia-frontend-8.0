import axios from 'axios'
import API from '@src/utils/api'
import { store } from '@src/redux/store/index'
import { adminLogin } from '@src/redux/action/auth'
import { LoginRes } from '@src/types/auth'
import { TeamLoginReq } from '@src/types/team'

const URL = process.env.NEXT_PUBLIC_API_URL as string

export const loginAdmin = async (payload: TeamLoginReq) => {
  try {
    const response = await axios({
      method: 'POST',
      url: URL + API.admin.login,
      data: payload
    })
    const data = response.data as LoginRes
    const token = data.data
    store.dispatch(adminLogin(token))
    return data.message
  } catch (e) {
    return 'FAILED'
  }
}

export const getAllTeams = async (category: string) => {
  const { auth } = store.getState()

  try {
    const response = await axios({
      method: 'GET',
      url: URL + API.admin.allTeam(1, 9999, category),
      headers: {
        Authorization: `Bearer ${auth.token}`
      }
    })
    return response.data
  } catch (e) {
    return 'FAILED'
  }
}

export const getParticipantsTeam = async (teamID: number | string) => {
  const { auth } = store.getState()

  try {
    const response = await axios({
      method: 'GET',
      url: URL + API.admin.participants(teamID),
      headers: {
        Authorization: `Bearer ${auth.token}`
      }
    })
    return response.data
  } catch (e) {
    return 'FAILED'
  }
}

export const changePhotoStatus = async (
  photo_id: string | number,
  status: string
) => {
  const { auth } = store.getState()
  try {
    const response = await axios({
      method: 'PUT',
      url: URL + API.admin.changePhotoStatus(photo_id),
      headers: {
        Authorization: `Bearer ${auth.token}`
      },
      data: {
        status: status
      }
    })
    return response.data
  } catch (e) {
    console.log(e)
    return 'FAILED'
  }
}
