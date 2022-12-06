import React from "react";
import Card from "./Card";
import "../styles/cardsGroup.css";

const CardsContainer = ({ currentSneakers }) => {
  return (
    <div className="cardsGroupContainer">
      <div className="cardsGroup">
        <div>
          {currentSneakers?.map((sneakers) => (
            <Card
              key={sneakers.id}
              id={sneakers.id}
              name={sneakers.name}
              brand={sneakers.brand}
              card_picture={sneakers.card_picture}
              price={sneakers.price}
              rating={sneakers.rating}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardsContainer;
