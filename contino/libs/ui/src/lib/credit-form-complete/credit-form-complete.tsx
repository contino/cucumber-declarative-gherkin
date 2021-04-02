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
  const approvedForm = formData.isApproved();

  console.log("approvedForm", approvedForm)

  if (validForm) {
    db.addUpdateApplciation(formData.data);
  }

  return validForm && approvedForm ? (
    <div>
      <Typography id="response-title" variant="h5">Sucess!</Typography>
      <Typography id="response-msg" variant="body1">
        Thank you, your application was submitted for further processing.
      </Typography>
    </div>
  ) : (
    <div>
      <Typography id="response-title" variant="h5">Sorry to inform you...</Typography>
      <Typography id="response-msg" variant="body1">
        Your application cannot proceed.  We will mail you a detailed letter.
      </Typography>
    </div>
  );
}

export default CreditFormComplete;
