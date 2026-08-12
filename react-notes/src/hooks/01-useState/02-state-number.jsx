import { useState } from "react";

const StateNumber = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handleIncrementBy3 = () => {
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1); //Expected output : 0 3 6 9 ....

    //Fix
    setCount((prev) => prev + 1); // 0 -> 1
    setCount((prev) => prev + 1); // 1 -> 2
    setCount((prev) => prev + 1); // 2 -> 3
  };

  return (
    <div>
      <div>
        <p>{count}</p>
        <button onClick={handleDecrement}>-1</button>
        <button onClick={handleIncrement}>+1</button>
        <button onClick={handleIncrementBy3}>+3</button>
      </div>
    </div>
  );
};

export default StateNumber;
