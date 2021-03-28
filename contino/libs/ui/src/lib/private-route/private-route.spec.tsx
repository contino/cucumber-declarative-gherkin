import React from 'react';
import { render } from '@testing-library/react';

import PrivateRoute from './private-route';
import {
  BrowserRouter as Router,
} from "react-router-dom";

import UserLanding from '../user-landing/user-landing';

describe('PrivateRoute', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Router>
        <PrivateRoute path="/user" allowedUserName="*">
          <UserLanding/>
        </PrivateRoute>
      </Router>
    );
    expect(baseElement).toBeTruthy();
  });
});
