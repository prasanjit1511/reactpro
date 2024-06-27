import React from 'react'

function Rendering({ name, price, emoji, soldout }) {
  return (
    <div>
     {/* Array jsx e ache  */}
      {/* <li>
        {name} {price} {emoji}
      </li> */}



      {/* Conditionally Rendering List Items */}
      {/* {price > 10 ? (
        <li>
          {name} {price} {emoji}
        </li>
      ) : (
        ""
      )}  */}




      {/* Conditionally Rendering A Message Using Ternary */}
      <li>
        {name} {price} {emoji} {soldout ? "soldout" : ""}
      </li>
    </div>
  );
}

export default Rendering
