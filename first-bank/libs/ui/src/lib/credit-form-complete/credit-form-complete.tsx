import { useFormData, useDB } from '@first-bank/data';
import { Typography } from '@material-ui/core';
import React from 'react';

import './credit-form-complete.module.scss';

/* eslint-disable-next-line */
export interface CreditFormCompleteProps { }

export function CreditFormComplete(props: CreditFormCompleteProps) {
  const formData = useFormData();
  const db = useDB();


  const validForm = formData.isValid();
  let approvedForm;
  let hasErrored = false;
  try {
    approvedForm = formData.isApproved();
  } catch (e) {
    console.warn('Unable to process credit applciation, due to error.', e);
    hasErrored = true;
  }

  let title;
  let msg;
  if (validForm && approvedForm) {
    db.addUpdateApplciation(formData.data);
    title = 'Sucess!';
    msg = 'Thank you, your application was submitted for further processing.';
  } else if (hasErrored) {
    title = 'System unavailable';
    msg = 'Sorry, our systems are unavailable at this time. We will email your credit card status later.';
  } else {
    title = 'Sorry to inform you...';
    msg = 'Your application cannot proceed.  We will mail you a detailed letter.';
  }

  return (
    <div>
      <Typography id="response-title" variant="h5">{title}</Typography>
      <Typography id="response-msg" variant="body1">
        {msg}
      </Typography>
    </div>
  )
}

export default CreditFormComplete;
