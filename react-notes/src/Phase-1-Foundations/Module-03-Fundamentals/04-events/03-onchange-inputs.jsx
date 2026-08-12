import React from "react";

function OnChangeInputs() {
  const handleChange = (e) => {
    console.log("current value", e.target.value);
  };

  const handleCheckbox = (e) => {
    console.log("checked value", e.target.checked);
  };

  return (
    <div>
      <label htmlFor="inputTag">
        Text <input type="text" onChange={handleChange} id="inputTag" />
      </label>

      <label htmlFor="check">
        Agree : <input type="checkbox" onChange={handleCheckbox} id="check" />
      </label>
    </div>
  );
}

export default OnChangeInputs;
