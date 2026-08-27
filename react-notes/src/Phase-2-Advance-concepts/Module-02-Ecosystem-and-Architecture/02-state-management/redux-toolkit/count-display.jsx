//Step 5
import React from "react";
import { useSelector } from "react-redux";

const CountDisplay = () => {
  const value = useSelector((state) => state.counter.value);
  return <p>Count : {value}</p>;
};

export default CountDisplay;
