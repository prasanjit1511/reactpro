import React from 'react'

function EventHandlingMessage() {

    function HandleClick(){
        console.log("Button Click");
    }
  return (
    <div>
      <button onClick={HandleClick} > Click here to get a message</button>
    </div>
  )
}

export default EventHandlingMessage
