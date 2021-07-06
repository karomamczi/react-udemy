import { combineReducers } from 'redux';
import { reducer } from 'redux-form';
import authReducer from './authReducer';

const reducers = combineReducers({
  auth: authReducer,
  form: reducer,
});

export default reducers;
