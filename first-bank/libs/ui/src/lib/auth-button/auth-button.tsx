import React from 'react';
import { Button, Typography } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';


import {
  useHistory,
} from "react-router-dom";

import { useAuth } from '@first-bank/fake-security';

import './auth-button.module.scss';

/* eslint-disable-next-line */
export interface AuthButtonProps { }

// based on code from https://reactrouter.com/web/example/auth-workflow
export function AuthButton(props: AuthButtonProps) {
  const history = useHistory();
  const auth = useAuth();
  const theme = useTheme();

  const butonTheme = {
    color: theme.palette.primary.contrastText
  }
  const useStyles = makeStyles({
    contrastColor: {
      color: theme.palette.primary.contrastText,
    },
  });

  const classes = useStyles();

  return auth != null && auth.user ? (
    <div style={{ display: 'flex' }}>
      <Button id="signout-button" aria-label="person" className={classes.contrastColor}
        onClick={() => {
          auth.signout(() => history.push("/"));
        }}>
        <Typography variant="button">Sign Out</Typography>
      </Button>
    </div>
  ) : (
      <div style={{ display: 'flex' }}>
        <Button id="signin-button" aria-label="person" className={classes.contrastColor}
          onClick={() => {
            history.push("/login")
          }}>
          <Typography variant="button">Sign In</Typography>
        </Button>
      </div>
    );
}

export default AuthButton;
