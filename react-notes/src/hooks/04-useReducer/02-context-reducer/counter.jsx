import { useCount } from "./useCount";

//Step 5
const Counter = () => {
  const { state, dispatch } = useCount();

  return (
    <div>
      <span>Count: {state.count}</span>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
    </div>
  );
};

export default Counter;
