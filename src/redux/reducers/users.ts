import { UserData } from '@src/types/users';

  interface UserReducerState {
    data: {} | null;
  }
  
  export type UserReducerActions =
    | { type: 'SET_USER'; payload: UserData }
    | { type: 'USER_LOGOUT' }
    | { type: 'USER_INIT' };
  
  const defaultState = {
    data: null,
  } as UserReducerState;
  
  export default function reducer(prevState = defaultState, action: UserReducerActions) {
    switch (action.type) {
      case 'SET_USER':
        return {
          data: action.payload,
        };
      case 'USER_LOGOUT':
        return {

        };
      case 'USER_INIT':
        return defaultState;
      default:
        return prevState;
    }
  }