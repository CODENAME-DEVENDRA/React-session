import React, { useEffect, useState } from "react";

//  useEffect(fn)         -> Run after every render
//  useEffect(fn,[])      -> Mount: run once after the first paint
//  useEffect(fn,[count]) -> Update: run on mount + whenever count changes
//                        -> Unmount: (disappears) -> used for stop timers, remove listeners

//In Development => Mount -> Update -> Unmount -> Mount -> Update

function Counter() {
  const [count, setCount] = useState(0);

  //   useEffect(() => {
  //     console.log("Runs on every render");
  //   });

  //Mount
  //   useEffect(() => {
  //     console.log("Mount: Counter is Mounted");
  //   }, []);

  //Update
  //   useEffect(() => {
  //     console.log(`Update: Counter is updated | count:${count}`);
  //   }, [count]);

  //Unmount
  useEffect(() => {
    console.log("Mount: Counter is mounted");

    return () => {
      console.log("Unmount: Counter is removed");
    };
  }, []);

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h4>Counter Component</h4>
        <button onClick={() => setCount((c) => c - 1)}>-1</button>
        <p>Count : {count}</p>
        <button onClick={() => setCount((c) => c + 1)}>+1</button>
      </div>
    </>
  );
}

const CounterExample = () => {
  const [showCounter, setShowCounter] = useState(false);
  return (
    <>
      <button onClick={() => setShowCounter((prev) => !prev)}>
        {showCounter ? "Unmount counter" : "Mount Counter"}
      </button>

      {showCounter && <Counter />}
    </>
  );
};

export default CounterExample;
