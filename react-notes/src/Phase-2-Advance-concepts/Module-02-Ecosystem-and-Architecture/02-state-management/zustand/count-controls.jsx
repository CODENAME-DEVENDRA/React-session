import React from "react";
import { useCounterStore } from "./store";

const CountControls = () => {
  const increment = useCounterStore((s) => s.increment);
  const decrement = useCounterStore((s) => s.decrement);
  const reset = useCounterStore((s) => s.reset);
  const incrementBy = useCounterStore((s) => s.incrementBy);

  return (
    <div>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
      <button onClick={() => incrementBy(5)}>+5</button>
      <button onClick={() => incrementBy(10)}>+10</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default CountControls;
