import React from 'react'
import Rendering from "./Rendering";
import Code from './Code';
import Welcome from "./Welcome";

function ConditionallyRendering() {
  const fols = [
    { name: "Aaple", price: 10, emoji: "🍎", soldout: false },
    { name: "Banana", price: 7, emoji: "🍌", soldout: false },
    { name: "Pinaple", price: 8, emoji: "🍍", soldout: true },
    { name: "Green Apple", price: 11, emoji: "🍏", soldout: true },
    { name: "Water melon", price: 15, emoji: "🍉", soldout: true },
  ];

  // const display = true;

  // if(display){
  //     return (
  //       <div>
  //        <Welcome/>
  //       </div>
  //     )

  // }else{

  //     return (
  //       <div>
  //         <Code />
  //       </div>
  //     );

  // }

  // Conditional Rendering Using Element Variables

  //  let msgOne = <h1> This is msg one</h1>;
  //  let msgTwo = <h1> This is msg Two</h1>;
  //  const display1 = true;
  // if (display1) {
  //  return msgOne;
  // } else {
  //   return msgTwo;
  // }

    // let message;
    // const display3 = false;
    // if (display3) {
    //  return (message = <h1> This is msg one</h1>);
    // } else {
    //  return (message = <h1> This is msg Two</h1>);
    // }

  // Using Ternary Operators In React

  // let ishappy = false;

  // return ishappy ? <h1>I am Happy</h1> : <h1>I am not happy</h1>;

  //Other way
  // let ishappy = false;
  // return ishappy ? <Welcome /> : <Code />;
  

  // Conditionally Rendering List Items Rendering jsx

  return fols.map((fol) => (
    <Rendering
      key={fol.name}
      name={fol.name}
      price={fol.price}
      emoji={fol.emoji}
      soldout={fol.soldout}
    />
  ));
}

export default ConditionallyRendering
