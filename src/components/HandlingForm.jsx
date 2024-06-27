import React, { useState } from 'react'

function HandlingForm() {

    // const [name, setName] = useState("");

    const [name, setName] = useState({ firstName:"", lastName:""});

    function handleSubmit(e){
       e.preventDefault();
       console.log(name)
    }
   
  return (
    <div>

      {/* <form action="
      ">
        <input type="text" onChange={(e) => setName(e.target.value)} value={name} />
      </form> */}

          { name.firstName} - {name.lastName}

        <form action="">
        <input type="text" onChange={(e) => setName({ ...name, firstName:e.target.value })} value={name.firstName} />
        <input type="text" onChange={(e) => setName({ ...name, lastName:e.target.value })} value={name.lastName} />
        <button onClick={(e)=>handleSubmit(e)}>Add</button>
      </form>
    </div>
  )
}

export default HandlingForm
