import { useState } from 'react';
import './App.css';
import Title from './Components/CallbackMemoHooks/Title';
import ButtonComponent from './Components/CallbackMemoHooks/ButtonComponent';
import ShowCount from './Components/CallbackMemoHooks/ShowCount';
import LayoutComponentOne from './Components/CustomHook/LayoutComponentOne'
import LayoutComponentTwo from './Components/CustomHook/LayoutComponentTwo'
import ClickCounter from './Components/HigherOrderComponent/ClickCounter'
import HoverCounter from './Components/HigherOrderComponent/HoverCounter'
import { useCallback } from 'react';
import { useMemo } from 'react';

function App() {
  const [count1, setCount1] = useState(0)
  const [count2,setCount2] = useState(0)

  const incrementByOne = useCallback(() =>{
    setCount1((prevCount) => prevCount + 1)
  }, [])
  
  const incrementByFive = useCallback(() =>{
    setCount2((prevCount) => prevCount + 5)
  }, [])

  const isEvenOrOdd = useMemo(()=>{
    let i = 0;
    while (i < 1000000000) i += 1
    return count1 % 2 === 0;
  }, [count1])
  return (
    <div className="App">
      {/* <LayoutComponentOne />
      <LayoutComponentTwo /> */}

      {/* <ClickCounter />
      <HoverCounter /> */}

      <Title />
      <ShowCount count ={count1} title="counter 1" />
      <ButtonComponent handleClick={incrementByOne}>Increment by one</ButtonComponent>
      <span>{isEvenOrOdd ? 'Even' : 'Odd'}</span>
      <hr/>
      <ShowCount count ={count2} title="counter 2" />
      <ButtonComponent handleClick={incrementByFive}>Increment by Five</ButtonComponent>
    </div>
  );
}

export default App;
