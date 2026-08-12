import { useState } from "react";

function Counter1() {
  let num = 0;

  const handleAdd = () => {
    num += 1; //num = num + 1
    console.log("number", num);
  };

  return (
    <div>
      <h4>Counter 1</h4>
      <p>Number : {num}</p>
      <button onClick={handleAdd}>Add 1</button>
    </div>
  );
}

function Counter2() {
  //useState(initialValue) return [currentValue,setterFunction]
  //   console.log(useState(0));

  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h4>Counter 2</h4>
      <p>Count : {count}</p>
      <button onClick={handleClick}>Add 1</button>
    </div>
  );
}

const StateBasics = () => {
  return (
    <div>
      <Counter1 />
      <Counter2 />
    </div>
  );
};

export default StateBasics;
