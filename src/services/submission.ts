import axios from 'axios';
import API from '@src/utils/api';
import { store } from '@src/redux/store/index';
import { AddSubmissionReq } from '@src/types/submission'

const URL = process.env.NEXT_PUBLIC_API_URL

export const addSubmission = async (payload: AddSubmissionReq) => {
  const { auth } = store.getState();
  try {
    const response = await axios(
      {
        method: 'POST',
        url: URL + API.submission.add,
        headers: {
          Authorization: `Bearer ${auth.token}`
        },
      }
    ) 
    return response.data.Message;
  } catch (e) {
    return "FAILED";
  }
}