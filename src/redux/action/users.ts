import { UserData } from '@src/types/users'
export const setUser = (payload: UserData, token: string) => ({
    type: 'SET_USER', 
    payload,
    token,
  });

  export const userLogout = () => ({
    type: 'USER_LOGOUT',
  });