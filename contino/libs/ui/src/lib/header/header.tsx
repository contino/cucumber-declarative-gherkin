import { Box, Grow, Typography } from '@material-ui/core';
import React from 'react';
import AuthButton from '../auth-button/auth-button';

import './header.module.scss';
import { ReactComponent as Logo } from './logo.svg';

/* eslint-disable-next-line */
export interface HeaderProps { }

export function Header(props: HeaderProps) {
  return (
    <header>
      <Box display="flex" flexWrap="nowrap" flexDirection="row" 
       alignItems="center" justifyContent="space-between" padding="0 10px">
        <Logo width="75" height="75" display="flex" />
        <Typography variant="h1" style={{display:'flex'}}>
          First Change Bank
        </Typography>
        <AuthButton />
      </Box>
    </header>
  );
}

export default Header;
