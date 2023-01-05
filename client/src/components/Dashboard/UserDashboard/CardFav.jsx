import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BsFillHeartFill, BsFillStarFill, BsHeart } from "react-icons/bs";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addUserProductFavorites,
  deleteUserProductFavorites,
} from "../../../redux/features/users/usersActions";
import "../../../styles/CardFav.css";

const CardFav = ({
  _id,
  name,
  price,
  card_picture,
  brand,
  rating,
  checkHeart,
}) => {
  const dispatch = useDispatch();

  const { userDashboard } = useSelector((state) => state.users);

  const [check, setCheck] = useState(checkHeart);

  const handlerOnClick = () => {
    if (check)
      dispatch(
        deleteUserProductFavorites(userDashboard._id, { favorite: _id })
      );
    if (!check)
      dispatch(addUserProductFavorites(userDashboard._id, { favorite: _id }));
    if (typeof checkHeart === "boolean") setCheck(!check);
  };

  return (
    <Card className="CardFav-container ">
      <div className="CardFav-heart me-4 mt-4">
        <>
          <button variant="custom" className="btnFav" onClick={handlerOnClick}>
            {check ? (
              <BsFillHeartFill className=" card-top fav" />
            ) : (
              <BsHeart className=" card-top fav" />
            )}
          </button>
        </>
      </div>

      {/* Efecto Blur */}
      <div className="circleContainer">
        <div className="circle1"></div>
        <div className="circle2"></div>
      </div>

      <div className="CardFav-images">
        <img className="cardImage1" src={card_picture} alt={name + "img"} />
        <img className="cardImage2" src={card_picture} alt={name + "img"} />
      </div>

      <Card.Body className="CardBody">
        <div className="">
          <Card.Text className="CardBody-brand fs-1 brand">{brand}</Card.Text>
        </div>
        <div className="">
          <Card.Title className="CardBody-name text-white fs-2 text-center">
            {name}
          </Card.Title>
          <Card.Text className="CardBody-rating text-gold fs-5">
            {rating !== 0 ? (
              <>
                {/* Rating:{" "} */}
                {[...Array(rating)].map((index, i) => (
                  <BsFillStarFill key={i} className={"starsCards"} />
                ))}
              </>
            ) : (
              <>New</>
            )}
          </Card.Text>
          <Card.Text className="CardBody-price text-white fs-2 mb-0 priceCard">
            ${price}
          </Card.Text>
          <Link to={`/home/${_id}`} className="CardFav-btn">
            <button className="btnCard ">More Info</button>
          </Link>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CardFav;
