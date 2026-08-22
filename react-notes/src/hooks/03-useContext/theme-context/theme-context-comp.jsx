import ThemeProvider from "./theme-provider";
import ThemeCard from "./themed-card";

//Step 3
const ThemeContext = () => {
  return (
    <ThemeProvider>
      <ThemeCard />
    </ThemeProvider>
  );
};

export default ThemeContext;
