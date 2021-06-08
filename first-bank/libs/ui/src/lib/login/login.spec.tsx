import React from 'react';
import { render } from '@testing-library/react';

import Login from './login';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'), // use actual for all non-hook parts
  useLocation: () => ({
    from: { pathname: "/user" },
  }),
}));

afterAll(() => {
  jest.unmock('react-router-dom');
});

describe('Login', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Login />);
    expect(baseElement).toBeTruthy();
  });
});

