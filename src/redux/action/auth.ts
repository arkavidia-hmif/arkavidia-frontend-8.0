// import { UserData } from '@src/types/users'
export const setToken = (token: string) => ({
  type: 'SET_TOKEN',
  token
})

export const adminLogin = (token: string) => ({
  type: 'ADMIN_LOGIN',
  token
})

export const userLogout = () => ({
  type: 'USER_LOGOUT'
})
