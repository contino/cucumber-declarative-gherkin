import React from 'react';
import { render } from '@testing-library/react';
import {
  BrowserRouter as Router,
} from "react-router-dom";

import Introduction from './introduction';

describe('Introduction', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Router>
        <Introduction />
      </Router>
    );
    expect(baseElement).toBeTruthy();
  });
});
