
import React from 'react'

// const name ="Partho"

function displayMessage(){
  return "wow!"
}

function Hello(props) {

   const {name, message, } =props;


  return (
    <div>
      {/* <h1>Hello Prasanjit {props.name} {props.message} {10+20} {displayMessage()}</h1> */}
      {/* <h1>{props.message} {props.name} </h1> */}
     <h1>{message} {name} </h1> 
    </div>
  )
}

export default Hello


//props 
//Destructuring Props