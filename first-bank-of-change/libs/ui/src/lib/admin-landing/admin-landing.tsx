import { Link, Typography } from '@material-ui/core';
import React from 'react';
import {
  Link as RouterLink
} from "react-router-dom";

import './admin-landing.module.scss';

/* eslint-disable-next-line */
export interface AdminLandingProps {}

// Admin landing is not being used, may be used in the future.
export function AdminLanding(props: AdminLandingProps) {
  return (
    <div>
      <h1>Welcome to admin-landing!</h1>
      <Typography variant="body2">
          <Link  component={RouterLink} to="/"
          style={{ display: 'flex', justifyContent: 'center' }}>
            Home
        </Link>
        </Typography>

    </div>
  );
}

export default AdminLanding;
