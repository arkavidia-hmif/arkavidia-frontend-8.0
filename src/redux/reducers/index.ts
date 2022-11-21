import { combineReducers } from 'redux';
import users from './users';

const rootReducer = combineReducers({
  users,
});

// eslint-disable-next-line import/no-anonymous-default-export
export default (state: any, action: any) => rootReducer(action.type === 'USER_LOGOUT' ? undefined : state, action);