import React, { useState } from 'react'

function stateCounter() {
    const [count, setCount] = useState(0);

    const [InCrementBy, setIncrementBy] = useState(1);


    function InCrement(){
        // setCount(count+1)

        setCount(count+InCrementBy)
    }

    function deCrement(){
        // if(count > 0){
        //     setCount(count-1)
        // }

        if(count > InCrementBy){
            setCount(count-InCrementBy)
        }
    }

    function IncrementState(){

        setIncrementBy(InCrementBy+1)
    }

    function DecrementState(){
        // if(count > 0){
        //     setCount(count-1)
        // }

        if(InCrementBy > 0){
            setIncrementBy(InCrementBy-1)
        }
    }

  return (
    <div>
        <h1> Counter hobe : {count}</h1>

        <button onClick={InCrement} >Increment</button>
        <button onClick={deCrement} >Decrement</button>


        <br/>
        <h1>  Creating Multiple States In React : {InCrementBy}</h1>

        <button onClick={IncrementState} >Increment state</button>
        <button onClick={DecrementState} >Decrement state</button>
      
    </div>
  )
}

export default stateCounter
