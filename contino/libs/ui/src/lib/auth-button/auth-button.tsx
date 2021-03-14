import React from 'react';
import { Button } from '@material-ui/core';


import {
  useHistory,
} from "react-router-dom";

import {useAuth} from '@contino/fake-security';

import './auth-button.module.scss';

/* eslint-disable-next-line */
export interface AuthButtonProps {}

// based on code from https://reactrouter.com/web/example/auth-workflow
export function AuthButton(props: AuthButtonProps) {
  const history = useHistory();
  const auth = useAuth();


  return auth != null && auth.user ? (
    <p>
      <Button
        color="primary"
        onClick={() => {
          auth.signout(() => history.push("/"));
        }}
      >
        Sign out
      </Button>
    </p>
  ) : (
    <p>
      <Button color="primary" onClick={() => history.push("/login")}>
        Sign In
      </Button>
    </p>
  );}

export default AuthButton;
