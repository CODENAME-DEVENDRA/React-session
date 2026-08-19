import React, { useRef } from "react";

const DomRef = () => {
  const inputRef = useRef(null);
  const boxRef = useRef(null);

  const handleFocusInput = () => {
    console.log("inputRef", inputRef);
    inputRef.current.focus();
  };

  const handleBoxStyles = () => {
    console.log("boxRef", boxRef);
    alert(`width:${boxRef.current.offsetWidth}`);
  };

  return (
    <div>
      <div style={{ margin: 16 }}>
        <input type="text" ref={inputRef} />
        <button onClick={handleFocusInput}>Focus input</button>
      </div>

      <div style={{ margin: 16 }}>
        <div
          ref={boxRef}
          style={{
            width: 150,
            padding: 16,
            background: "#e20dcc",
            borderRadius: 8,
            marginBottom: 8,
          }}
        ></div>
        <button onClick={handleBoxStyles}>Check</button>
      </div>
    </div>
  );
};

export default DomRef;
