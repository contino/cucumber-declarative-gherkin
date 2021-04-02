import { Typography } from '@material-ui/core';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";
import CreditFormComplete from '../credit-form-complete/credit-form-complete';
import CreditFormEmploymentInfo from '../credit-form-employment-info/credit-form-employment-info';
import CreditFormFinancialInfo from '../credit-form-financial-info/credit-form-financial-info';
import CreditFormPersonalInfo from '../credit-form-personal-info/credit-form-personal-info';
import './credit-form-intro.module.scss';

/* eslint-disable-next-line */
export interface CreditFormIntroProps { }

export function CreditFormIntro(props: CreditFormIntroProps) {
  // The `path` lets us build <Route> paths that are
  // relative to the parent route, while the `url` lets
  // us build relative links.
  const { path, url } = useRouteMatch();

  return (
    <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', padding: '0 0 0 40px'}}>
      <Typography style={{ display: 'flex'}} variant="h4">New Credit Card Application</Typography>
      <Switch>
        <Route exact path={path}>
          <CreditFormPersonalInfo />
        </Route>
        <Route path={`${path}/page2`}>
          <CreditFormEmploymentInfo />
        </Route>
        <Route path={`${path}/page3`}>
          <CreditFormFinancialInfo />
        </Route>
        <Route path={`${path}/complete`}>
          <CreditFormComplete />
        </Route>
      </Switch>
    </div>
  );
}

export default CreditFormIntro;
