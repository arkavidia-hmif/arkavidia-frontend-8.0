import axios from 'axios';
import API from '@src/utils/api';
import { store } from '@src/redux/store/index';
import { setToken } from '@src/redux/action/auth';
import { AuthLoginReq, AuthRegisterReq, ChangePassReq } from '@src/types/auth';
import { UserDataRes } from '@src/types/user';
import { isStaging } from './env';

// Brute force to change API endpoint for short-term dev purpose only
const ENV = isStaging;

const HOST = {
  STG: 'https://arkavidia-backend-8-0-staging-6d47ozplva-et.a.run.app',
  PROD: 'https://arkavidia-backend-8-0-6d47ozplva-et.a.run.app'
}

const URL = ENV ? HOST.STG : HOST.PROD

export const register = async (payload: AuthRegisterReq) => {
    try {
      const response = await axios(
        {
          method: 'POST',
          url: URL + API.auth.register,
          data: payload,
        },
      )
      const userData = response.data.data as UserDataRes;
      store.dispatch(setToken(userData.auth_token));
      return response.data;
    } catch (e) {
      console.log(e);
    }
};

export const login = async (payload: AuthLoginReq) => {
  try {
    const response = await axios(
      {
        method: 'POST',
        url: URL + API.auth.login,
        data: payload,
      },
    )
    const userData = response.data.data as UserDataRes;
    store.dispatch(setToken(userData.auth_token));
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

export const logout = async () => {
  const { auth } = store.getState()

  try {
    const response = await axios(
      {
        method: 'GET',
        url: URL + API.auth.logout,
        headers: {
          Authorization: `${auth.token}`
        }
      }
    )
    return response;
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

// export const getAllUsers = async (authToken: string) => {
//   const response = await axios.get(
//     'https://bankrut.herokuapp.com' + API.user.allUsers, {
//         headers: {
//           Authorization: `${authToken}` 
//       }
//     })
//   )
//   return response;
// };

// export const getUser = async (id: number, authToken: string) => {
//   const response = (await axios.get(
//     'https://bankrut.herokuapp.com' + API.user.user(id), {
//         headers: {
//           Authorization: `${authToken}` 
//       }
//     })
//   )
//   return response;
// };

// export const verifyUser = async (id: number, authToken: string) => {
//   const response = (await axios.put(
//     'https://bankrut.herokuapp.com' + API.user.verify(id), {
//         headers: {
//           Authorization: `${authToken}` 
//       }
//     })
//   )
//   return response;
// };