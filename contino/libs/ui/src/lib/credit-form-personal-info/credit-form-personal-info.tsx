import { useFormData } from '@contino/data';
import React from 'react';

import './credit-form-personal-info.module.scss';

/* eslint-disable-next-line */
export interface CreditFormPersonalInfoProps {}

export function CreditFormPersonalInfo(props: CreditFormPersonalInfoProps) {
  const formData = useFormData();

  return (
    <div>
      <h1>Welcome to credit-form-personal-info!</h1>
      <p>{formData.data.title}</p>
    </div>
  );
}

export default CreditFormPersonalInfo;
