import { Typography } from '@material-ui/core';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
  useLocation,
} from "react-router-dom";
import CreditFormIntro from '../credit-form-intro/credit-form-intro';
import FormWizardContext from '../form-wizard-context/form-wizard-context';
import UserAppStatus from '../user-app-status/user-app-status';

import './user-landing.module.scss';

/* eslint-disable-next-line */
export interface UserLandingProps {}

export function UserLanding(props: UserLandingProps) {
  const { path, url } = useRouteMatch();
  const location = useLocation();

  return (
    location.pathname === "/user" ? (
      <div style={{display:'flex', flexGrow: 2}}>
      <Typography variant="h5" style={{display:'flex', justifyContent: 'center', flexGrow: 1}}>
        Welcome to user-landing!
      </Typography>
    </div>
    ) : (
      <Switch>
        <Route path={`${path}/form`}>
          <FormWizardContext>
            <CreditFormIntro />
          </FormWizardContext>
        </Route>
        <Route path={`${path}/status`}>
          <UserAppStatus />
        </Route>
      </Switch>
    )
  );
}

export default UserLanding;
