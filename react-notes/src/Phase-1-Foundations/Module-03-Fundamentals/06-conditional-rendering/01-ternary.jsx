import React, { useState } from "react";

const Ternary = () => {
  const [showCard, setShowCard] = useState(true);

  const cardStyle = {
    height: "25vh",
    width: "25vw",
    backgroundColor: "#d04416",
    padding: "16px",
    borderRadius: "12px",
    boxShadow: "0px 2px 8px rgba(0,0,0,0.2)",
    margin: "12px",
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <button onClick={() => setShowCard((prev) => !prev)}>
        {showCard ? "Hide" : "Show"}
      </button>

      {showCard ? <div style={cardStyle}></div> : null}
    </div>
  );
};

export default Ternary;
