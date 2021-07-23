import React, { useReducer } from "react";

const initialValue = 0;
const initialValue2 = 2;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      return state;
  }
};

const Counter = () => {
  const [count, dispatch] = useReducer(reducer, initialValue);
  const [count2, dispatch2] = useReducer(reducer, initialValue2);
  return <div>
      <div>
          <h3>Count - {count}</h3>
          <button onClick={() => dispatch('increment')}>Increment</button>
          <button onClick={() => dispatch('decrement')}>Decrement</button>
      </div>
      <div>
          <h3>Count2 - {count2}</h3>
          <button onClick={() => dispatch2('increment')}>Increment</button>
          <button onClick={() => dispatch2('decrement')}>Decrement</button>
      </div>
  </div>;
};

export default Counter;
