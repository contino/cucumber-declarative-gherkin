import { useFormData } from '@contino/data';
import React from 'react';

import './credit-form-employment-info.module.scss';

/* eslint-disable-next-line */
export interface CreditFormEmploymentInfoProps {}

export function CreditFormEmploymentInfo(props: CreditFormEmploymentInfoProps) {
  const formData = useFormData();

  return (
    <div>
      <h1>Welcome to credit-form-employment-info!</h1>
      <p>{formData.data.title}</p>
    </div>
  );
}

export default CreditFormEmploymentInfo;
