import { useContext } from "react";
import { UserContext } from "./user-context";

//Step 4
export const useUser = () => {
  return useContext(UserContext);
};
