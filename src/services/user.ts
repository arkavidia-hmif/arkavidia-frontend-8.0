// import axios from 'axios';
// import { UserData, UserLogin, UserRegister } from '@src/types/user';
// import API from '@src/utils/api';
// import { store } from '@src/redux/store/index';
// import { setToken } from '@src/redux/action/user';

// // Brute force to change API endpoint for short-term dev purpose only
// const isStaging = true;

// const HOST = {
//   STG: 'https://arkavidia-backend-8-0-staging-6d47ozplva-et.a.run.app',
//   PROD: 'https://arkavidia-backend-8-0-6d47ozplva-et.a.run.app'
// }

// const URL = isStaging ? HOST.STG : HOST.PROD

// export const register = async (payload: UserRegister) => {
//     try {
//       const response = await axios(
//         {
//           method: 'POST',
//           url: URL + API.auth.register,
//           data: payload,
//         },
//       )
//       const userData = response.data.data as UserData;
//       store.dispatch(setToken(userData.auth_token));
//       return response.data;
//     } catch (e) {
//       console.log(e);
//     }
// };

// export const login = async (payload: UserLogin) => {
//   try {
//     const response = await axios(
//       {
//         method: 'POST',
//         url: URL + API.auth.login,
//         data: payload,
//       },
//     )
//     const userData = response.data.data as UserData;
//     store.dispatch(setToken(userData.auth_token));
//     return response.data;
//   } catch (e) {
//     console.log(e);
//   }
// };

// export const logout = async () => {
//   const { user } = store.getState()

//   try {
//     const response = await axios(
//       {
//         method: 'GET',
//         url: URL + API.auth.logout,
//         headers: {
//           Authorization: `${user.token}`
//         }
//       }
//     )
//     return response;
//   } catch (e) {
//     console.log(e);
//   }
// };

// // export const getAllUsers = async (authToken: string) => {
// //   const response = await axios.get(
// //     'https://bankrut.herokuapp.com' + API.user.allUsers, {
// //         headers: {
// //           Authorization: `${authToken}` 
// //       }
// //     })
// //   )
// //   return response;
// // };

// // export const getUser = async (id: number, authToken: string) => {
// //   const response = (await axios.get(
// //     'https://bankrut.herokuapp.com' + API.user.user(id), {
// //         headers: {
// //           Authorization: `${authToken}` 
// //       }
// //     })
// //   )
// //   return response;
// // };

// // export const verifyUser = async (id: number, authToken: string) => {
// //   const response = (await axios.put(
// //     'https://bankrut.herokuapp.com' + API.user.verify(id), {
// //         headers: {
// //           Authorization: `${authToken}` 
// //       }
// //     })
// //   )
// //   return response;
// // };