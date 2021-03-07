import React from 'react';
import { render } from '@testing-library/react';

import AdminLanding from './admin-landing';

describe('AdminLanding', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AdminLanding />);
    expect(baseElement).toBeTruthy();
  });
});
