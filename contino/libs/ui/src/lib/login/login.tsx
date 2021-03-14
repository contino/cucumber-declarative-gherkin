import React from 'react';

import './login.module.scss';

import {
  useHistory,
  useLocation
} from "react-router-dom";

import { useAuth } from '@contino/fake-security';
import { TextField } from '@material-ui/core';
import classes from './login.module.scss';
import { Button } from '@material-ui/core';
import { useState } from 'react';

/* eslint-disable-next-line */
export interface LoginProps { }

export function Login(props: LoginProps) {
  const history = useHistory();
  const auth = useAuth();
  const location = useLocation();
  const [username, setUserName] = useState(null);
  const [password, setPassword] = useState(null);
  const [failMsg, setFailMsg] = useState("");

  const { from } = location.state || { from: { pathname: "/" } };
  const login = (username: string, password: string) => {
    auth.signin(username, password,
      () => {
        history.replace(from);
      },
      (failMsg) => {
        setFailMsg(failMsg);
      });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    // alert('A name was submitted: ' + username + ' : ' + password);
    event.preventDefault();
    login(username, password);
  }

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }
  return (
    <div>
      <form className={classes.root} noValidate autoComplete="off"
        onSubmit={handleSubmit}>
        <div id="failMsg">{failMsg}</div>
        <TextField id="username" label="username" onChange={handleUsernameChange} />
        <TextField id="password" label="password" onChange={handlePasswordChange} />
        <Button type="submit" >Login</Button>
      </form>
    </div>
  );
}

export default Login;
