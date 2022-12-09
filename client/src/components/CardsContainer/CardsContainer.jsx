import React from "react";
import Card from "./Card";
import "../../styles/cardsContainer.css";

const CardsContainer = ({ productsSliced }) => {
  return (
    <div className="cardsGroupContainer">
      <div className="cardsGroup">
        <div className="d-flex flex-wrap justify-content-center">
          {productsSliced?.map((product, i) => (
            <Card
              key={i}
              _id={product._id.toString()}
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
