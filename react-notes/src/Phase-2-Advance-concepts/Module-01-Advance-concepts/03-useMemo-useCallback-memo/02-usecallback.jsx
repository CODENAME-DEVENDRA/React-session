import React, { memo, useCallback, useState } from "react";

// function ChildComponent({ onIncrement }) {
//   console.log("Child rendered");
//   return <button onClick={onIncrement}> + </button>;
// }

//React.memo skips re-rendering when props are unchanged
const ChildComponent = memo(function ChildComponent({ onIncrement }) {
  console.log("Child rendered");
  return <button onClick={onIncrement}> + </button>;
});

// Every render creates brand new function object
// But if you pass a function to child wrapped in memo , a new function each render makes the memo useless (prop "changed"), so the child re-renders

// useCallback returns the same function instance until its deps change

const UseCallbackExample = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  // const increment = () => setCount((c) => c + 1);
  const increment = useCallback(() => setCount((c) => c + 1), []);

  return (
    <div>
      <p>Count: {count}</p>
      <p>Text: {text}</p>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <ChildComponent onIncrement={increment} />
    </div>
  );
};

export default UseCallbackExample;
