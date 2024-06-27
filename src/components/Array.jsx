import React from 'react'
import Rendering from './Rendering';

function Array({ person }) {

  const fruits = ["Apple","Banana","Orange","Custerd apple"];

  const fols = [
    { name: "Aaple", price: 10, emoji: "🍎" },
    { name: "Banana", price: 7, emoji: "🍌" },
    { name: "Pinaple", price: 8, emoji: "🍍" },
    { name: "Green Apple", price: 11, emoji: "🍏" },
    { name: "Water melon", price: 15, emoji: "🍉" },

  ];

  return (
    <div>
      <h1>{person.name}</h1>
      <h1>{person.message}</h1>
      <h1>{person.emoji}</h1>
      <h1>{person.seatNumbers}</h1>
      {/* Rendering Arrays Or Lists In React */}
      <ul>
        {fruits.map((fruit) => (
          <li key="fruit">{fruit}</li>
        ))}
      </ul>
      {/* Rendering Array Of Objects In React */}
      <ul>
        {fols.map((fol) => (
          <li key="fol">
            {" "}
            {fol.emoji} {fol.name} ${fol.price}
          </li>
        ))}
      </ul>

      {/* Rendering Components Inside A Loop */}

      {fols.map((fol) => (
        <Rendering
          key={fol.name}
          name={fol.name}
          price={fol.price}
          emoji={fol.emoji}
        />
      ))}
    </div>
  );
}

export default Array


