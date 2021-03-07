import React from 'react';
import { render } from '@testing-library/react';

import UserLanding from './user-landing';

describe('UserLanding', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UserLanding />);
    expect(baseElement).toBeTruthy();
  });
});
