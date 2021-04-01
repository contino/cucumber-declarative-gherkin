import { useFormData, useDB } from '@contino/data';
import { Typography } from '@material-ui/core';
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
      <Typography variant="h3">Sucess!</Typography>
      <Typography id="success-msg" variant="body1">
        Thank you, your application was submitted for further processing.
      </Typography>
    </div>
  ) : (
    <div>
      <Typography variant="h3">Sorry to inform you</Typography>
      <Typography id="fail-msg" variant="body1">
        Your application cannot proceed.  We will mail you a detailed letter.
      </Typography>
    </div>
  );
}

export default CreditFormComplete;
