import React from "react";
import { useSelector } from "react-redux";
import Card from "../../CardsContainer/Card";
import NoFavourites from "./NoFavourites";
import "../../../styles/cardFavorites.css";

const UserFavorites = () => {
  const { userDashboard } = useSelector((state) => state.users);

  console.log('--> ', userDashboard.productsFavourites)

  return (
    <div className="d-flex flex-column justify-content-center align-content-center w-100">
      <h3 className="text-center titleFav">Your Favorites</h3>
      <div className="d-flex flex-column containerFav">
        <div className="d-flex flex-wrap favSize justify-content-center">
          {userDashboard.productsFavourites && userDashboard.productsFavourites.length ? (
            userDashboard.productsFavourites.map((el) => {
              return (
                <Card
                  className="cardFav"
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
              );
            })
          ) : <NoFavourites/>
          
          // userDashboard.productsFavourites === [] ? (
          //     console.log(userDashboard.productsFavourites)
          // ) 
          // : <h1> ASD </h1>
          
          }
        </div>
      </div>
    </div>
  );
};

export default UserFavorites;
