import React from 'react';
import {useProviderFormData, formDataContext} from '@contino/data';

import './form-wizard-context.module.scss';

/* eslint-disable-next-line */
export interface FormWizardContextProps { }

export function FormWizardContext(props: any) {
  const formData = useProviderFormData();
  console.dir(formData);
  return (
    <formDataContext.Provider value={formData}>
      {props.children}
    </formDataContext.Provider>
  );
}

export default FormWizardContext;
