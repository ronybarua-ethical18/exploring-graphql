import React, { useContext } from "react";
import { counterContext } from '../../../App'
const ComponentB = () => {
    const countContext = useContext(counterContext)
  return (
    <div>
      <p>Component A</p>
      <button onClick={() => countContext.countDispatch('increment')}>Increment</button>
      <button onClick={() => countContext.countDispatch('decrement')}>Decrement</button>
    </div>
  );
};

export default ComponentB;
