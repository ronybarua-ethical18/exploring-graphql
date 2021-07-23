// import { useState } from 'react';
import React, { useReducer } from "react";
import "./App.css";
// import Bracket from "./Components/CompositionVsInheritance/Composition/Bracket";
// import Emoji from "./Components/CompositionVsInheritance/Composition/Emoji";
// import Title from './Components/CallbackMemoHooks/Title';
// import ButtonComponent from './Components/CallbackMemoHooks/ButtonComponent';
// import ShowCount from './Components/CallbackMemoHooks/ShowCount';
// import LayoutComponentOne from './Components/CustomHook/LayoutComponentOne'
// import LayoutComponentTwo from './Components/CustomHook/LayoutComponentTwo'
// import ClickCounter from './Components/HigherOrderComponent/ClickCounter'
// import HoverCounter from './Components/HigherOrderComponent/HoverCounter'
// import { useCallback } from 'react';
// import { useMemo } from 'react';
// import Form from './Components/UseRefandForwardRef/Form'
// import Time from './Components/UseRefandForwardRef/Time'
// import Text from './Components/CompositionVsInheritance/Inheritance/Text';
// import Text from "./Components/CompositionVsInheritance/Composition/Text";
// import ComplexCounter from "./Components/useReducer/ComplexCounter";
// import EasiestWayCounter from "./Components/useReducer/EasiestWayCounter";
import ComponentA from "../src/Components/useReducer/GlobalStateManagement/ComponentA";
export const counterContext = React.createContext();
const initialValue = 0;
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
function App() {
  const [count, dispatch] = useReducer(reducer, initialValue);

  // const [count1, setCount1] = useState(0)
  // const [count2,setCount2] = useState(0)

  // const incrementByOne = useCallback(() =>{
  //   setCount1((prevCount) => prevCount + 1)
  // }, [])

  // const incrementByFive = useCallback(() =>{
  //   setCount2((prevCount) => prevCount + 5)
  // }, [])

  // const isEvenOrOdd = useMemo(()=>{
  //   let i = 0;
  //   while (i < 1000000000) i += 1
  //   return count1 % 2 === 0;
  // }, [count1])
  return (
    <div className="App">
      <p>{count}</p>
      <counterContext.Provider value={{countDispatch: dispatch}}>
        <ComponentA />
      </counterContext.Provider>

      {/* <LayoutComponentOne />
      <LayoutComponentTwo /> */}

      {/* <ClickCounter />
      <HoverCounter /> */}

      {/* <Title />
      <ShowCount count ={count1} title="counter 1" />
      <ButtonComponent handleClick={incrementByOne}>Increment by one</ButtonComponent>
      <span>{isEvenOrOdd ? 'Even' : 'Odd'}</span>
      <hr/>
      <ShowCount count ={count2} title="counter 2" />
      <ButtonComponent handleClick={incrementByFive}>Increment by Five</ButtonComponent> */}
      {/* <Form /> */}
      {/* <Time /> */}
      {/* <Text /> */}

      {/* composition vs inheritance  */}
      {/* <Emoji>
        {({ addEmoji }) => (
          <Bracket>
            {({ addBracket }) => (
              <Text addEmoji={addEmoji} addBracket={addBracket} />
            )}
          </Bracket>
        )}
      </Emoji> */}

      {/* useReducer  */}

      {/* <Counter /> */}
      {/* <ComplexCounter />  */}

      {/* <EasiestWayCounter /> */}
    </div>
  );
}

export default App;
