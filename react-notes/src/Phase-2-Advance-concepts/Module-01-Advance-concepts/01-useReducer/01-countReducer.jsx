import React, { useReducer } from "react";

//Step1 : initialState
const initialState = { count: 0 };

//Step2: reducer function
function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    case "INCREMENT_BY":
      return { count: state.count + action.payload };
    case "RESET":
      return initialState;

    default:
      return state;
  }
}

const CountReducer = () => {
  //Step3: useReducer hook
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
      <span style={{ margin: "0 8px" }}>{state.count}</span>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
      <div style={{ marginTop: 10 }}>
        <button onClick={() => dispatch({ type: "INCREMENT_BY", payload: 5 })}>
          +5
        </button>
        <button onClick={() => dispatch({ type: "INCREMENT_BY", payload: 10 })}>
          +10
        </button>
        <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
      </div>
    </div>
  );
};

export default CountReducer;
