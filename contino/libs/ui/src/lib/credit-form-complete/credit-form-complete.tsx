import { useFormData, useDB } from '@contino/data';
import React from 'react';

import './credit-form-complete.module.scss';

/* eslint-disable-next-line */
export interface CreditFormCompleteProps {}

export function CreditFormComplete(props: CreditFormCompleteProps) {
  const formData = useFormData();
  const db = useDB();

  const validForm = formData.isValid();

  if (validForm) {
    db.addUpdateApplciation(formData.data);
  }

  return validForm ? (
    <div>
      <h1>Sucess!</h1>
    </div>
  ) : (
    <div>
      <h1>Fail!</h1>
    </div>
  );
}

export default CreditFormComplete;
