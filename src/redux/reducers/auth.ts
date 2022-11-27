interface AuthReducerState {
  token: string | null;
}

export type AuthReducerActions =
  | { type: 'SET_TOKEN'; token: string} | { type: 'USER_LOGOUT'}

const defaultState = {
  token: null
} as AuthReducerState;

export default function reducer(prevState = defaultState, action: AuthReducerActions) {
  switch (action.type) {
    case 'SET_TOKEN':
      return {
        token: action.token,
      };
    case 'USER_LOGOUT':
      return null;
    default:
      return prevState;
  }
}