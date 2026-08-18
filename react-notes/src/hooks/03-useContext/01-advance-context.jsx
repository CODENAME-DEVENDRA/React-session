import React, { createContext, useContext, useMemo, useState } from "react";

//Step 1
const ThemeContext = createContext(null);

//Step 4
function useTheme() {
  const ctx = useContext(ThemeContext);
  return ctx;
}

//Step 2
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  //memoization
  const value = useMemo(() => ({ theme, toggleTheme }), [theme]);

  return <ThemeContext value={value}>{children}</ThemeContext>;
}

//Step 5
function ThemeCard() {
  const { theme, toggleTheme } = useTheme();

  const isDark = theme === "dark";
  // console.log("test", theme === "dark");

  const styles = {
    padding: "20px",
    borderRadius: "8px",
    background: isDark ? "#090606" : "#efdddd",
    color: isDark ? "#efdddd" : "#090606",
  };

  return (
    <div style={styles}>
      <p>Current Theme : {theme}</p>
      <button onClick={toggleTheme}>{isDark ? "light" : "dark"}</button>
    </div>
  );
}

//Step 3
const AdvanceContext = () => {
  return (
    <ThemeProvider>
      <ThemeCard />
    </ThemeProvider>
  );
};

export default AdvanceContext;
