interface AuthReducerState {
  token: string | null;
}

export type AuthReducerActions =
  | { type: 'SET_TOKEN'; token: string}

const defaultState = {
  token: null
} as AuthReducerState;

export default function reducer(prevState = defaultState, action: AuthReducerActions) {
  switch (action.type) {
    case 'SET_TOKEN':
      return {
        token: action.token,
      };
    default:
      return prevState;
  }
}