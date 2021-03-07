import React from 'react';
import { render } from '@testing-library/react';

import Introduction from './introduction';

describe('Introduction', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Introduction />);
    expect(baseElement).toBeTruthy();
  });
});
