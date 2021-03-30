import { useFormData } from '@contino/data';
import React from 'react';

import './credit-form-financial-info.module.scss';

/* eslint-disable-next-line */
export interface CreditFormFinancialInfoProps {}

export function CreditFormFinancialInfo(props: CreditFormFinancialInfoProps) {
  const formData = useFormData();

  return (
    <div>
      <h1>Welcome to credit-form-financial-info!</h1>
      <p>{formData.data.title}</p>
    </div>
  );
}

export default CreditFormFinancialInfo;
