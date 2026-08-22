import { useTheme } from "./use-theme";

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
export default ThemeCard;
