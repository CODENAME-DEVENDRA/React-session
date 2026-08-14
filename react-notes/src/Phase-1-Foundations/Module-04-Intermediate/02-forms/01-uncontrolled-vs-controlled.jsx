import React, { useRef, useState } from "react";

//Uncontrolled -> the DOM owns the value
//Controlled -> React state owns the value

const UncontrolledForm = () => {
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("inputRef", inputRef);
    alert(`Uncontrolled Value : ${inputRef.current.value}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" ref={inputRef} />
      <button type="submit">Submit</button>
      <p>Uncontrolled : {inputRef?.current?.value}</p>
    </form>
  );
};

const ControlledForm = () => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Controlled Value : ${text}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Submit</button>
      <p>Controlled : {text}</p>
    </form>
  );
};

const UncontrolledVsControlled = () => {
  return (
    <div>
      <UncontrolledForm />
      <ControlledForm />
    </div>
  );
};

export default UncontrolledVsControlled;
