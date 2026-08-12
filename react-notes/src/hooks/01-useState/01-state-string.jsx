import React, { useState } from "react";

const StateString = () => {
  const [text, setText] = useState("John");

  const handleChange = (e) => {
    console.log(e.target.value);
    setText(e.target.value);
  };

  return (
    <div>
      <input type="text" onChange={handleChange} value={text} />
      <p> Text : {text}</p>
      <p> Text Characters : {text.length}</p>
    </div>
  );
};

export default StateString;
