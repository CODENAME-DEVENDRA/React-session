import React from "react";
import { useCounterStore } from "./store";

const CountDisplay = () => {
  const count = useCounterStore((s) => s.count);
  return <p>Count : {count}</p>;
};

export default CountDisplay;
