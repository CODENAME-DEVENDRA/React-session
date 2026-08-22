import { useMemo, useState } from "react";
import { ThemeContext } from "./theme-context";

//Step 2
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  //memoization
  const value = useMemo(() => ({ theme, toggleTheme }), [theme]);

  return <ThemeContext value={value}>{children}</ThemeContext>;
}

export default ThemeProvider;
