import React from 'react';

import './provider-auth.module.scss';
import {useProvideAuth, authContext} from '@contino/fake-security';


/* eslint-disable-next-line */
// export interface ProviderAuthProps {}

export function ProviderAuth(props: any) {
  const auth = useProvideAuth();
  return (
    <authContext.Provider value={auth}>
      {props.children}
    </authContext.Provider>
  );
}

export default ProviderAuth;
