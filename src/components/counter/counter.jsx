import { CounterButton } from "./counterButton";


export const Counter = () => {
  let counter = 10;

  const incrementHandle = () =>{
    console.log("incremento " + ++counter );

  }

  const decrementHandle = () =>{
    console.log("decremento: " + --counter);
  }

  const resetHandle = () =>{
    console.log("reset: " + (counter = 10) );
  }

  return (
    <>
      <h2>{ counter }</h2>
      
      <CounterButton buttonHandle = {incrementHandle}  >+</CounterButton>
      <CounterButton buttonHandle = {decrementHandle}  >-</CounterButton>
      <CounterButton buttonHandle = {resetHandle}      >Reset</CounterButton>

    </>
  )
}
