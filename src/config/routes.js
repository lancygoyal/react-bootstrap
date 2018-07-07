import React from 'react';
import { Switch } from 'react-router-dom';
// import { Container, Row, Col } from 'reactstrap';
import EnRoute from '../components/EnRoute';
import Main from '../containers/Main';

const PublicLayout = ({ component: Component }) => (
  <div>
    <Component />
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
    </Switch>
  );
};
