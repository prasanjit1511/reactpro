
import React from 'react'



function Props({name, message, emoji}) {

  // const {name, message} =props;


  return (
    <div>
      {/* <h1>Hello Prasanjit {props.name} {props.message} {10+20} {displayMessage()}</h1> */}
      {/* <h1>{props.message} {props.name} </h1> */}
     <h1>{message} {name} {emoji}</h1> 
    </div>
  )
}

export default Props


//props 
//Destructuring Props