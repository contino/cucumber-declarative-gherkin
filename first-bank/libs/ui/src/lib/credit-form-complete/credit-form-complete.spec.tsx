import React from 'react';
import { render } from '@testing-library/react';

import CreditFormComplete from './credit-form-complete';
import FormWizardContext from '../form-wizard-context/form-wizard-context';
import ProviderDB from '../provider-db/provider-db';

describe('CreditFormComplete', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <ProviderDB>
        <FormWizardContext>
          <CreditFormComplete />
        </FormWizardContext>
      </ProviderDB>
    );
    expect(baseElement).toBeTruthy();
  });
});
