//useMemo = cache an expensive calculation between renders

import React, { useMemo, useState } from "react";

function expensiveDoubleCalc(num) {
  console.log("Running heavy calculation...");
  let result = 0;
  for (let i = 0; i < 50_000_000; i++) {
    result += i % 2;
  }
  return num * 2;
}

const UseMemoExample = () => {
  const [num, setNum] = useState(0);
  const [text, setText] = useState("");

  const calculateValue = useMemo(() => expensiveDoubleCalc(num), [num]);

  // const calculateValue = expensiveDoubleCalc(num);

  return (
    <div>
      <p>
        Number : {num} | Calculated Value : {calculateValue}{" "}
      </p>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button onClick={() => setNum((n) => n + 1)}>+1</button>
    </div>
  );
};

export default UseMemoExample;
