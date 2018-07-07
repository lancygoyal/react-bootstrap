import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import app from './modules/app';

export default combineReducers({
  app,
  router: routerReducer
});
