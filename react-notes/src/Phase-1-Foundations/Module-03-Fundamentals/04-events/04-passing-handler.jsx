import React from "react";

function Button({ label, onClick }) {
  return <button onClick={onClick}>{label}</button>;
}

function PassingHandlers() {
  return (
    <>
      <Button label="click" onClick={() => alert("Hi")}></Button>
    </>
  );
}

export default PassingHandlers;
