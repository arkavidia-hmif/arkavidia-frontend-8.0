import axios from 'axios';
import API from '@src/utils/api';
import { store } from '@src/redux/store/index';
import { setToken } from '@src/redux/action/auth';
import { LoginRes, Auth } from '@src/types/auth';
import { TeamLoginReq, TeamRegisterReq, ChangePassReq } from '@src/types/team'
import { isStaging } from './env';

// Brute force to change API endpoint for short-term dev purpose only
const ENV = isStaging;

const HOST = {
  STG: 'https://arkavidia-backend-8-0-staging-6d47ozplva-et.a.run.app',
  PROD: 'https://arkavidia-backend-8-0-6d47ozplva-et.a.run.app'
}

const URL = ENV ? HOST.STG : HOST.PROD

export const register = async (payload: TeamRegisterReq) => {
    try {
      const response = await axios(
        {
          method: 'POST',
          url: URL + API.auth.register,
          data: payload,
        },
      ) 
      const data = response.data as LoginRes
      const token  = data.Data;
      store.dispatch(setToken(token));
      return data.Message;
    } catch (e) {
      return "FAILED";
    }
};

export const login = async (payload: TeamLoginReq) => {
  try {
    const response = await axios(
      {
        method: 'POST',
        url: URL + API.auth.login,
        data: payload,
      },
    )
    const data = response.data as LoginRes
    const token  = data.Data;
    store.dispatch(setToken(token));
    return data.Message;
  } catch (e) {
    return "FAILED";
  }
};

export const logout = async () => {
  const { auth } = store.getState()

  try {
    // CLEAR THE STATE //
  } catch (e) {
    console.log(e);
  }
};

export const changePass = async (payload: ChangePassReq) => {
  const { auth } = store.getState();

  try {
    const response = await axios(
      {
        method: 'PUT',
        url: URL + API.auth.changePass,
        headers: {
          Authorization: `${auth.token}`
        },
        data: payload
      }
    )
    return response.data;
  } catch (e) {
    console.log(e);
  }
};
