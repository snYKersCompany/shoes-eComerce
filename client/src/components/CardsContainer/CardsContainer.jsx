import React from "react";
import Card from "./Card";
import "../../styles/cardsContainer.css";

const CardsContainer = ({ products }) => {
  return (
    <div className="cardsGroupContainer">
      <div className="cardsGroup">
        <div>
          {products?.map((product) => (
            <Card
              key={product.id}
              id={product.id}
              name={product.name}
              brand={product.brand}
              card_picture={product.card_picture}
              price={product.price}
              rating={product.rating}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardsContainer;
