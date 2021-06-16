import React from 'react';

import { useProviderDB, dbContext } from '@first-bank-of-change/data';

// Emulates a DB for the simple app.  This makes it available to the 
// children elements of this element.
export function ProviderDB(props: any) {
  const db = useProviderDB();
  return (
    <dbContext.Provider value={db}>
      {props.children}
    </dbContext.Provider>
  );
}

export default ProviderDB;
