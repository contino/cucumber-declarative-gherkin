import React from 'react';
import { render } from '@testing-library/react';

import FormData from './form-data';

describe('FormData', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FormData />);
    expect(baseElement).toBeTruthy();
  });
});
