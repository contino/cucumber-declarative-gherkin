import React from 'react';
import { render } from '@testing-library/react';

import CreditFormPersonalInfo from './credit-form-personal-info';
import FormWizardContext from '../form-wizard-context/form-wizard-context';

describe('CreditFormPersonalInfo', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <FormWizardContext>
        <CreditFormPersonalInfo />
      </FormWizardContext>
    );
    expect(baseElement).toBeTruthy();
  });
});
