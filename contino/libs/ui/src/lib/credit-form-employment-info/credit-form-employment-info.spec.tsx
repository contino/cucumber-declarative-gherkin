import React from 'react';
import { render } from '@testing-library/react';

import CreditFormEmploymentInfo from './credit-form-employment-info';

describe('CreditFormEmploymentInfo', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CreditFormEmploymentInfo />);
    expect(baseElement).toBeTruthy();
  });
});
