


export const CounterButton = ( {children, buttonHandle} ) => {
  return (
    <>
      <button  onClick={ (event)=> buttonHandle()  } >{children}</button>
    </>
  )
}
