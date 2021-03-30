import React from 'react';
import { render } from '@testing-library/react';

import CreditFormFinancialInfo from './credit-form-financial-info';

describe('CreditFormFinancialInfo', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CreditFormFinancialInfo />);
    expect(baseElement).toBeTruthy();
  });
});
