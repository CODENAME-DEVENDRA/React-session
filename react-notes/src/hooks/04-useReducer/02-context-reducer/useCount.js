//Step 4
import { useContext } from "react";
import { CountContext } from "./count-context";

export const useCount = () => {
  const context = useContext(CountContext);
  return context;
};
