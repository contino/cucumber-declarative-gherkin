import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";

import './private-route.module.scss';

import {useAuth} from '@first-bank/fake-security';

/* eslint-disable-next-line */
export interface PrivateRouteProps {
}

// based on code from https://reactrouter.com/web/example/auth-workflow
export function PrivateRoute( { children, ...rest }) {
  const auth = useAuth();

  const isAllowed = auth !== null && (auth.user === rest.allowedUserName || 
     (rest.allowedUserName === "*" && auth.user !== null));
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAllowed  ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

export default PrivateRoute;
