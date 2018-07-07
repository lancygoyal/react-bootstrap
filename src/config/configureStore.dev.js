import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerMiddleware } from 'react-router-redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reducer from '../redux';

export default history => {
  return createStore(
    reducer,
    composeWithDevTools(applyMiddleware(logger, thunk, routerMiddleware(history)))
  );
};
