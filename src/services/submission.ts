import axios from 'axios';
import API from '@src/utils/api';
import { store } from '@src/redux/store/index';
import { isStaging } from './env';
import { AddSubmissionReq } from '@src/types/submission'

// Brute force to change API endpoint for short-term dev purpose only
const ENV = isStaging;

const HOST = {
  STG: 'https://arkavidia-backend-8-0-staging-6d47ozplva-et.a.run.app',
  PROD: 'https://arkavidia-backend-8-0-6d47ozplva-et.a.run.app'
}

const URL = HOST.PROD;

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