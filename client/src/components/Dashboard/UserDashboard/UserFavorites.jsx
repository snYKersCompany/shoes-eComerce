import React from "react";
import Card from "../../CardsContainer/Card";
import data from "../data.json";

const UserFavorites = () => {
  const favs = data;
  return (
    <div className="d-flex">
      <div className="">
        <h3 className="text-center">Your Favorites</h3>
        <div className="d-flex">
          {favs.favorites.map((el) => {
            return (
              <Card
                _id={el._id}
                name={el.name}
                price={el.price}
                card_picture={el.card_picture}
                brand={el.brand}
                rating={el.rating}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default UserFavorites;
