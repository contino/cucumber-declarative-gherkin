import React from 'react';
import {useProviderFormData, formDataContext} from '@first-bank-of-change/data';

import './form-wizard-context.module.scss';

/* eslint-disable-next-line */
export interface FormWizardContextProps { }

// This makes the form data available to all the form sections.  Each form 
// section is its own page in the new credit card wizard UI.  This allows 
// section to append data and do validation when the form is submitted.  
export function FormWizardContext(props: any) {
  const formData = useProviderFormData();
  return (
    <formDataContext.Provider value={formData}>
      {props.children}
    </formDataContext.Provider>
  );
}

export default FormWizardContext;
