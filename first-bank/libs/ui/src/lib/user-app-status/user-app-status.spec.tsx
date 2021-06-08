import React from 'react';
import { render } from '@testing-library/react';

import UserAppStatus from './user-app-status';

describe('UserAppStatus', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UserAppStatus />);
    expect(baseElement).toBeTruthy();
  });
});
