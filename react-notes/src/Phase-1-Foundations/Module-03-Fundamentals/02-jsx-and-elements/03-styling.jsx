// 1.Inline Style object
// 2.Plain CSS file + className
// 3.CSS Modules + styles.<name>

import "./style.css";
import styles from "./style.module.css";

function Styling() {
  return (
    <>
      {/* inline styles */}
      <div
        style={{
          height: "20vh",
          width: "20vw",
          backgroundColor: "red",
          margin: "10px",
        }}
      ></div>

      {/* external styles */}
      <div className="box-styles"></div>

      {/* module styles */}
      <div className={styles.boxStyles}></div>
    </>
  );
}
export default Styling;
