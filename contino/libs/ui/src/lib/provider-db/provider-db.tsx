import React from 'react';

import { useProviderDB, dbContext } from '@contino/data';

export function ProviderDB(props: any) {
  const db = useProviderDB();
  return (
    <dbContext.Provider value={db}>
      {props.children}
    </dbContext.Provider>
  );
}

export default ProviderDB;
