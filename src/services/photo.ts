import axios from 'axios'
import API from '@src/utils/api'
import { store } from '@src/redux/store/index'
import { AddPhotoReq } from '@src/types/photo'

const URL = process.env.NEXT_PUBLIC_API_URL as string

export const getPhotoParticipant = async (participantId: number | string) => {
  const { auth } = store.getState()

  try {
    const response = await axios({
      method: 'GET',
      url: URL + API.photo.photo(participantId),
      headers: {
        Authorization: `Bearer ${auth.token}`
      }
    })
    return response.data
  } catch (e) {
    console.log(e)
    return 'FAILED'
  }
}

export const addPhoto = async (payload: AddPhotoReq) => {
  const { auth } = store.getState()
  try {
    const payloadData = new FormData()
    payloadData.append('participant_id', payload.participant_id.toString())
    payloadData.append('type', payload.type)
    payloadData.append('file', payload.file)
    const response = await axios({
      method: 'POST',
      url: URL + API.photo.addPhoto,
      headers: {
        Authorization: `Bearer ${auth.token}`
      },
      data: payload
    })
    return response.data
  } catch (e) {
    console.log(e)
    return 'FAILED'
  }
}
