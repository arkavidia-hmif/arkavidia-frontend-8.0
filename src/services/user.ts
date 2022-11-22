import axios from 'axios';
import API from '@src/utils/api';
import { store } from '@src/redux/store/index';
import { CompRegisReq } from '@src/types/user';
import { isStaging } from './env';

// Brute force to change API endpoint for short-term dev purpose only
const ENV = isStaging;

const HOST = {
  STG: 'https://arkavidia-backend-8-0-staging-6d47ozplva-et.a.run.app',
  PROD: 'https://arkavidia-backend-8-0-6d47ozplva-et.a.run.app'
}

const URL = ENV ? HOST.STG : HOST.PROD

export const compRegis = async (id: number, payload: CompRegisReq) => {
  const { auth } = store.getState();
  try {
    const response = await axios(
      {
        method: 'POST',
        url: URL + API.user.compRegis(id),
        headers: {
          Authorization: `${auth.token}`
        },
        data: payload,
      },
    )    
    return response.data;
  } catch (e) {
    console.log(e);
  }
};