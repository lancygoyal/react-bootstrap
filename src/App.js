import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import Routes from './config/routes';
import configureStore from './config/configureStore';
import 'bootstrap/dist/css/bootstrap.min.css';

const history = createHistory();
const store = configureStore(history);

export default () => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Routes {...store} />
      </ConnectedRouter>
    </Provider>
  );
};

