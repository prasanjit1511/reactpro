
import React from 'react'
import Hello from './components/Hello'
import Props from './components/Props'
import Array from './components/Array'
import ConditionallyRendering from './components/ConditionallyRendering'
import EventHandlingMessage from './components/EventHandlingMessage'
import StateCounter from './components/StateCounter'
import HandlingForm from './components/HandlingForm'

const App = () => {

  const person ={

    name : "Partho",
    message: "Hi there",
    emoji: "👋",
    seatNumbers: [1,4,7,8],
  } 

  return (
    <div>
      {/* <Hello name="Partho" message="hi arre you here" />
      <Hello name="Pranto" message="hi arre you " /> */}

      {/* <Props name="Props" message="hi arre you " emoji="⚽" /> */}

      {/* <Array person={person} />  */}
    

     {/* <ConditionallyRendering/>  */}


     {/* <EventHandlingMessage/> */}

     {/* <StateCounter/> */}

     <HandlingForm/>

    </div>
  );
}

export default App
