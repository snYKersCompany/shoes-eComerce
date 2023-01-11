import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import {
  BsFillHeartFill, // eslint-disable-line
  BsFillStarFill,
  BsHeart,
  BsStar, // eslint-disable-line
} from "react-icons/bs"; // eslint-disable-line

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addUserProductFavorites,
  deleteUserProductFavorites,
} from "../../redux/features/users/usersActions";
import "../../styles/card.css";

const CardProduct = ({
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
    <Card className="d-flex card ">
      <div className="d-flex justify-content-end me-4 mt-4">
        <>
          <button variant="custom" className="btnFav" onClick={handlerOnClick}>
            {check ? (
              <BsFillHeartFill className="d-flex justify-content-center card-top fav" />
            ) : (
              <BsHeart className="d-flex justify-content-center card-top fav" />
            )}
          </button>
        </>
      </div>

      {/* Efecto Blur */}
      <div className="circleContainer">
        <div className="circle1"></div>
        <div className="circle2"></div>
      </div>

      <div className="cardContainer">
        <img className="cardImage1" src={card_picture} alt={name + "img"} />
        <img className="cardImage2" src={card_picture} alt={name + "img"} />
      </div>

      <Card.Body className="d-flex flex-column justify-content-center align-items-center CardBody1">
        <div className="d-flex ">
          <Card.Text className=" fs-1 brand">{brand}</Card.Text>
        </div>
        <div className="d-flex flex-column align-items-center ContainerInfoCard">
          <Card.Title className="text-white fs-1 text-center name ">
            {name}
          </Card.Title>
          <Card.Text className="text-gold fs-5 mb-0">
            {Math.round(rating) !== 0 ? (
              <>
                {[Number(rating)].map((index, i) => (
                  <BsFillStarFill key={i} className={"starsCards"} />
                ))}
              </>
            ) : (
              <>New</>
            )}
          </Card.Text>
          <Card.Text className="text-white fs-2 mb-0 priceCard">
            ${price}
          </Card.Text>
          <Link to={`/home/${_id}`} className="link">
            <button className="btnCard ">More Info</button>
          </Link>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CardProduct;
