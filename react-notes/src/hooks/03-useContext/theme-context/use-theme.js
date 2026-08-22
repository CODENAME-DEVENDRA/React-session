import { useContext } from "react";
import { ThemeContext } from "./theme-context";

//Step 4
export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  return ctx;
};
