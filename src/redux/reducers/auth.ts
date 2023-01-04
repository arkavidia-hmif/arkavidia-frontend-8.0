interface AuthReducerState {
  token: string | null
  admin?: boolean | null
}

export type AuthReducerActions =
  | { type: 'SET_TOKEN'; token: string }
  | { type: 'USER_LOGOUT' }
  | { type: 'ADMIN_LOGIN'; token: string }

const defaultState = {
  token: null,
  admin: null
} as AuthReducerState

export default function reducer(
  prevState = defaultState,
  action: AuthReducerActions
) {
  switch (action.type) {
    case 'SET_TOKEN':
      return {
        token: action.token,
        admin: false
      }
    case 'ADMIN_LOGIN':
      return {
        token: action.token,
        admin: true
      }
    case 'USER_LOGOUT':
      return null
    default:
      return prevState
  }
}
