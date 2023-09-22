import { useContext } from 'react';

import GlobalContext from './Context';

function useGlobalState() {
  const [state, dispath] = useContext(GlobalContext);
  return [state, dispath];
}

export { useGlobalState };
