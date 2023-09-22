import GlobalContext from './Context';
import { useReducer } from 'react';

import globalReducer, { globalState } from './Reducer';

function GlobalProvider({ children }) {
  const [state, dispath] = useReducer(globalReducer, globalState);
  return (
    <GlobalContext.Provider value={[state, dispath]}>
      {children}
    </GlobalContext.Provider>
  );
}

export default GlobalProvider;
