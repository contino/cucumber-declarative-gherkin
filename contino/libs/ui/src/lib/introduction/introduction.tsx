import { Box, Link, Typography } from '@material-ui/core';
import React from 'react';
import {
  useHistory,
  Link as RouterLink
} from "react-router-dom";

import './introduction.module.scss';

/* eslint-disable-next-line */
export interface IntroductionProps { }

export function Introduction(props: IntroductionProps) {
  const history = useHistory();

  return (
    <div style={{ display: 'flex', justifyContent: 'center', flexGrow: 1 }}>
      <Box display="flex" flexDirection="column">
        <Typography variant="h4" style={{ display: 'flex', justifyContent: 'center' }} >
          Welcome to introduction!
        </Typography>
        <Typography variant="body2">
          <Link  component={RouterLink} to="/user"
          style={{ display: 'flex', justifyContent: 'center' }}>
            Go to User Homepage
        </Link>
        <Link component={RouterLink} to="/admin"
        style={{ display: 'flex', justifyContent: 'center' }}>
            Go to Admin Homepage
        </Link>
        </Typography>
      </Box>
    </div>
  );
}

export default Introduction;
