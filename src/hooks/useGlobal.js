import { useContext } from "react";

import { GlobalContext } from "@global/context";

function useGlobal() {
  const [state, dispath] = useContext(GlobalContext);
  return [state, dispath];
}

export { useGlobal };
