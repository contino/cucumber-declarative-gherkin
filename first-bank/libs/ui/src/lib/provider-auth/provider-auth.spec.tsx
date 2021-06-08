import React from 'react';
import { render } from '@testing-library/react';

import ProviderAuth from './provider-auth';

describe('ProviderAuth', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ProviderAuth />);
    expect(baseElement).toBeTruthy();
  });
});
