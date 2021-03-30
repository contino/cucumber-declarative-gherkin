import React from 'react';
import { render } from '@testing-library/react';

import CreditFormPersonalInfo from './credit-form-personal-info';

describe('CreditFormPersonalInfo', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CreditFormPersonalInfo />);
    expect(baseElement).toBeTruthy();
  });
});
