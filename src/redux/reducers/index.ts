import { combineReducers } from 'redux';
import auth from './auth';

const rootReducer = combineReducers({
  auth,
});

// eslint-disable-next-line import/no-anonymous-default-export
export default (state: any, action: any) => rootReducer(action.type === 'USER_LOGOUT' ? undefined : state, action);