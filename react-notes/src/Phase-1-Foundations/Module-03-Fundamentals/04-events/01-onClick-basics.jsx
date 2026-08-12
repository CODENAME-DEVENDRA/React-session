// onClick - responding to a click
// camelcase prop : onClick, onMouseEnter

import React from "react";

function OnClickBasics() {
  const handleClick1 = () => {
    console.log("Button1 clicked");
    alert("hello world");
  };

  const handleClick2 = (user) => {
    console.log("Button2 clicked");
    alert(`hello ${user}`);
  };

  return (
    <>
      {/* Named handler */}
      <button onClick={handleClick1}>Click1</button>
      <button onClick={() => handleClick2("John")}>Click2</button>
    </>
  );
}

export default OnClickBasics;
