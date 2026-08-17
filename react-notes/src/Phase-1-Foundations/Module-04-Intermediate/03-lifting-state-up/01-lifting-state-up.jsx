import React, { useState } from "react";

function SiblingA({ name, onNameChange }) {
  return (
    <>
      <h4>Sibling A</h4>
      <input
        type="text"
        value={name}
        onChange={(e) => onNameChange(e.target.value)}
      />
    </>
  );
}

function SiblingB({ name }) {
  return (
    <>
      <h4>Sibling B</h4>
      <div>My name is {name}</div>
    </>
  );
}

const LiftingStateUp = () => {
  const [name, setName] = useState("");
  return (
    <div>
      <SiblingA name={name} onNameChange={setName} />
      <SiblingB name={name} />
    </div>
  );
};

export default LiftingStateUp;
