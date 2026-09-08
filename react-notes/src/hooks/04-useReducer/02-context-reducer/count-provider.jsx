//Step 3

import { useReducer } from "react";
import { countReducer, initialState } from "./count-reducer";
import { CountContext } from "./count-context";

function CountProvider({ children }) {
  const [state, dispatch] = useReducer(countReducer, initialState);

  return <CountContext value={{ state, dispatch }}>{children}</CountContext>;
}

export default CountProvider;
