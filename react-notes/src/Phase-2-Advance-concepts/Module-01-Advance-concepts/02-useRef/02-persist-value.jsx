import React, { useEffect, useRef, useState } from "react";

function usePrevious(value) {
  const ref = useRef();

  useEffect(() => {
    ref.current = value; //update after every render
  }, [value]);

  return ref.current;
}

const PersistValue = () => {
  const [count, setCount] = useState(0);
  const prev = usePrevious(count);
  console.log("prev", prev ?? "-");

  return (
    <div>
      <button onClick={() => setCount((c) => c - 1)}>-1</button>
      <span>
        Current : {count} | Previous : {prev ?? "-"}
      </span>
      <button onClick={() => setCount((c) => c + 1)}>+1</button>
    </div>
  );
};

export default PersistValue;
