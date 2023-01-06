import React from "react";
import { useSelector } from "react-redux";
import CardFav from "./CardFav";
import NoFavourites from "./NoFavourites";
import "../../../styles/UserFavorites.css";

const UserFavorites = () => {
  const { userDashboard } = useSelector((state) => state.users);

  return (
    <div className="UserFavorites-container favSize">
      {/* <div className="UserFavorites"> */}
        {userDashboard.productsFavourites &&
        userDashboard.productsFavourites.length ? (
          userDashboard.productsFavourites.map((el) => {
            return (
              <div className="UserFavorites">

              <CardFav
                className="UserFavorites-card"
                key={el._id}
                _id={el._id}
                name={el.name}
                price={el.price}
                card_picture={el.card_picture}
                brand={el.brand}
                rating={el.rating}
                checkHeart={userDashboard.favourites?.some(
                  (idProduct) => idProduct === el._id
                )}
              />
              </div>
            );
          })
        ) : (
          <NoFavourites />
        )}
      {/* </div> */}
    </div>
  );
};

export default UserFavorites;
