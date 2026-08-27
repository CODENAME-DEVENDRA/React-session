//Step 4
import React from "react";
import { increment, decrement, reset, incrementByAmount } from "./counterSlice";
import { useDispatch } from "react-redux";

const CountControls = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>+5</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
};

export default CountControls;
