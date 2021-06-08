import React from 'react';
import { render } from '@testing-library/react';
import {
  MemoryRouter
} from "react-router-dom";

import CreditFormIntro from './credit-form-intro';

describe('CreditFormIntro', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <MemoryRouter initialEntries={["/user/form"]}>
        <CreditFormIntro />
      </MemoryRouter>
    );
    expect(baseElement).toBeTruthy();
  });
});
