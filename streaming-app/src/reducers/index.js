import { combineReducers } from 'redux';

import authReducer from './authReducer';
import streamReducer from './streamReducer';

const reducers = combineReducers({
  auth: authReducer,
  streams: streamReducer,
});

export default reducers;
