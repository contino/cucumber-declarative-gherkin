import React from 'react';
import { render } from '@testing-library/react';

import CreditFormComplete from './credit-form-complete';

describe('CreditFormComplete', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CreditFormComplete />);
    expect(baseElement).toBeTruthy();
  });
});
