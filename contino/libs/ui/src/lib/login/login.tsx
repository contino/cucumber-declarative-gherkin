import React from 'react';

import './login.module.scss';

import {
  useHistory,
  useLocation
} from "react-router-dom";

import {useAuth} from '@contino/fake-security';

/* eslint-disable-next-line */
export interface LoginProps {}

export function Login(props: LoginProps) {
  const history = useHistory();
  const location = useLocation();
  const auth = useAuth();

  const { from } = location.state || { from: { pathname: "/login" } };
  const login = () => {
    auth.signin(() => {
      history.replace(from);
    });
  };

  return (
    <div>
      <p>You must log in to view the page at {from.pathname}</p>
      <button onClick={login}>Log in</button>
    </div>
  );}

export default Login;
