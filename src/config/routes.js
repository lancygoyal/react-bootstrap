import React from 'react';
import { Switch } from 'react-router-dom';
// import { Container, Row, Col } from 'reactstrap';
import EnRoute from '../components/EnRoute';
import Main from '../containers/Main';
import Detail from '../containers/Detail';

const PublicLayout = ({ component: Component, ...props }) => (
  <div>
    <Component {...props}/>
  </div>
);

export default store => {
  return (
    <Switch>
      <EnRoute
        exact
        path="/"
        component={Main}
        layout={PublicLayout}
        store={store}
      />
      <EnRoute
        exact
        path="/details"
        component={Detail}
        layout={PublicLayout}
        store={store}
      />
    </Switch>
  );
};
