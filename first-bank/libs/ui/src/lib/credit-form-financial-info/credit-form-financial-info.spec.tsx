import React from 'react';
import { render } from '@testing-library/react';

import CreditFormFinancialInfo from './credit-form-financial-info';
import FormWizardContext from '../form-wizard-context/form-wizard-context';

describe('CreditFormFinancialInfo', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <FormWizardContext>
        <CreditFormFinancialInfo />
      </FormWizardContext>
    );
    expect(baseElement).toBeTruthy();
  });
});
