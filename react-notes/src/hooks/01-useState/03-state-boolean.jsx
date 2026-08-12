import React, { useState } from "react";

const StateBoolean = () => {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle((prev) => !prev);
  };

  return (
    <div>
      <button onClick={handleClick}>{toggle ? "Turn off" : "Turn on"}</button>
      <p>{toggle ? "laptop is on" : "laptop is off"}</p>
    </div>
  );
};

export default StateBoolean;
