import axios from 'axios'
import API from '@src/utils/api'
import { store } from '@src/redux/store/index'
import { ChangeCareerInterestReq } from '@src/types/participant'

const URL = process.env.NEXT_PUBLIC_API_URL as string

export const getTeamMembersData = async () => {
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

export const changeCareerInterest = async (
  payload: ChangeCareerInterestReq,
  participantId: number
) => {
  const { auth } = store.getState()
  try {
    const response = await axios({
      method: 'PUT',
      url: URL + API.participant.changeCareerInterest(participantId),
      headers: {
        Authorization: `Bearer ${auth.token}`
      },
      data: payload
    })
    return response.data
  } catch (e) {
    return 'FAILED'
  }
}
