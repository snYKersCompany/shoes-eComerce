import React from "react";
import { useSelector } from "react-redux";
import Card from "../../CardsContainer/Card";

const UserFavorites = () => {
  const { userDashboard } = useSelector((state) => state.users);

  return (
    <div className="d-flex">
      <div className="">
        <h3 className="text-center">Your Favorites</h3>
        <div className="d-flex">
          {userDashboard.productsFavourites
            ? userDashboard.productsFavourites.map((el) => {
                return (
                  <Card
                    key={el._id}
                    _id={el._id}
                    name={el.name}
                    price={el.price}
                    card_picture={el.card_picture}
                    brand={el.brand}
                    rating={el.rating}
                  />
                );
              })
            : null}
        </div>
      </div>
    </div>
  );
};

export default UserFavorites;
