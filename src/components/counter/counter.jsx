import { useState } from "react";
import { CounterButton } from "./counterButton";


export const Counter = () => {
  
   
  const [ counterValue, setCounter ] = useState(1);

  const incrementHandle = () =>{
    setCounter(  counterValue + 1 );
  }

  const decrementHandle = () =>{
    setCounter( counterValue - 1)
  }

  const resetHandle = () =>{
    setCounter( 1 );
  }

  return (
    <>
      <h2>{ counterValue }</h2>
      
      <CounterButton buttonHandle = {incrementHandle}  >+</CounterButton>
      <CounterButton buttonHandle = {decrementHandle}  >-</CounterButton>
      <CounterButton buttonHandle = {resetHandle}      >Reset</CounterButton>

    </>
  )
}
