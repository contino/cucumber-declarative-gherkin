import React from 'react';

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

  return auth.user ? (
    <p>
      Welcome!{" "}
      <button
        onClick={() => {
          auth.signout(() => history.push("/"));
        }}
      >
        Sign out
      </button>
    </p>
  ) : (
    <p>You are not logged in.</p>
  );}

export default AuthButton;
