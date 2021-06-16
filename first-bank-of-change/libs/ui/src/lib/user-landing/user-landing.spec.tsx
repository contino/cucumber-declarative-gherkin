import React from 'react';
import { render } from '@testing-library/react';
import {
  BrowserRouter as Router,
} from "react-router-dom";

import UserLanding from './user-landing';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'), // use actual for all non-hook parts
  useLocation: () => ({
    from: { pathname: "/user" },
  }),
  useRouteMatch: () => ({
    path: "/user"
  }),
}));

afterAll(() => {
  jest.unmock('react-router-dom');
});

describe('UserLanding', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Router>
        <UserLanding />
      </Router>
    );
    expect(baseElement).toBeTruthy();
  });
});
