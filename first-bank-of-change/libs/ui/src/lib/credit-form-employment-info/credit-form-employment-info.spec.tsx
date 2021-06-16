import React from 'react';
import { render } from '@testing-library/react';

import CreditFormEmploymentInfo from './credit-form-employment-info';
import FormWizardContext from '../form-wizard-context/form-wizard-context';

describe('CreditFormEmploymentInfo', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <FormWizardContext>
        <CreditFormEmploymentInfo />
      </FormWizardContext>
    );
    expect(baseElement).toBeTruthy();
  });
});
