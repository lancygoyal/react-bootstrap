import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export default ({
  component,
  layout: Layout,
  type = 'public',
  auhtHandler = () => true,
  to = '/',
  store,
  ...rest
}) => (
  <Route
    {...rest}
    render={props => {
      if (type === 'public') return <Layout component={component} {...props} />;
      if (type === 'private')
        return auhtHandler(store) ? (
          <Layout component={component} {...props} />
        ) : (
          <Redirect
            to={{
              pathname: to,
              state: { from: props.location }
            }}
          />
        );
    }}
  />
);
