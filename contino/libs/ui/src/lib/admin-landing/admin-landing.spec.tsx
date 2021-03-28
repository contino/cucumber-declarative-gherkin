import React from 'react';
import { render } from '@testing-library/react';
import {
  BrowserRouter as Router,
} from "react-router-dom";

import AdminLanding from './admin-landing';

describe('AdminLanding', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
    <Router>
      <AdminLanding />
    </Router>
    );
    expect(baseElement).toBeTruthy();
  });
});
