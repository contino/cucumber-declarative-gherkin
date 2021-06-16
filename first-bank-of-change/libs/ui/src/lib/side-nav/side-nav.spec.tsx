import React from 'react';
import { render } from '@testing-library/react';
import {
  BrowserRouter as Router,
} from "react-router-dom";

import SideNav from './side-nav';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'), // use actual for all non-hook parts
  useLocation: () => ({
    pathname: "/user" ,
  }),
}));

afterAll(() => {
  jest.unmock('react-router-dom');
});

describe('SideNav', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Router>
        <SideNav />
      </Router>
    );
    expect(baseElement).toBeTruthy();
  });
});
