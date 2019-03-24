import React from "react";
import Card from "./Card";
const CardList = ({ cards }) => (
  <ul>
    {cards.map(card => (
      <li key={card.id}>
        <Card
          imgUrl={card.imgUrl}
          preTitle={card.preTitle}
          title={card.title}
          content={card.content}
        />
      </li>
    ))}
  </ul>
);

export default CardList;
