import React from 'react';
import { render } from '@testing-library/react';

import CreditFormIntro from './credit-form-intro';

describe('CreditFormIntro', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CreditFormIntro />);
    expect(baseElement).toBeTruthy();
  });
});
