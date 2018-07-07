import { applyMiddleware, createStore, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import reducer from '../redux';

export default history => {
  return createStore(
    reducer,
    compose(applyMiddleware(thunk, routerMiddleware(history)))
  );
};
