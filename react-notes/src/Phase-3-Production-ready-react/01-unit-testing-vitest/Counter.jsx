import React, { useState } from "react";

const Counter = ({ step = 1 }) => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p aria-label="count">Count: {count}</p>
      <button onClick={() => setCount((c) => c + step)}>Increment</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
};

export default Counter;
