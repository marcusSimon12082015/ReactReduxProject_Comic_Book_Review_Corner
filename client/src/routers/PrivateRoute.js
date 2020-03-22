import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';


export const PrivateRoute = ({
  isAuthenticated,
  component: Component,
  layout: Layout,
  ...rest
}) => (
  <Route
    {...rest}
    render={props => (
      isAuthenticated ? (
        <Layout>
          <Component {...props} />
        </Layout>
      ):(
        <Redirect to="/" />
      )
  )}
  />
);

const mapStateToProps = (state) => ({
  isAuthenticated: !!state.auth.logged_in
});

export default connect(mapStateToProps)(PrivateRoute);
