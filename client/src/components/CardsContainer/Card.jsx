import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import {
  BsFillHeartFill, // eslint-disable-line
  BsFillStarFill,
  BsHeart,
  BsStar, // eslint-disable-line
} from "react-icons/bs"; // eslint-disable-line

import "../../styles/card.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUserProductFavorites, deleteUserProductFavorites } from "../../redux/features/users/usersActions";

const CardProduct = ({ _id, name, price, card_picture, brand, rating, checkHeart }) => {
  const dispatch = useDispatch()
  console.log("Esto es checkHeart", checkHeart)
  const {userDashboard} = useSelector((state) => state.users);

  
  const [check, setCheck] = useState(checkHeart)
  useEffect(()=>{
    setCheck(checkHeart)
  },[checkHeart])

  const handlerOnClick= ()=>{
    if(check) dispatch(deleteUserProductFavorites(userDashboard._id, {"favorite":_id}))
    if(!check) dispatch(addUserProductFavorites(userDashboard._id, {"favorite":_id}))
  }

  return (
    <Card className="d-flex card ">
      <div className="d-flex justify-content-end me-4 mt-4">
        {window.location.pathname === "/" ||
        window.location.pathname === "/home" ? (
          <>
            <Button variant="custom" className="btnFav" onClick={handlerOnClick}>
              {check?
              <BsFillHeartFill className="d-flex justify-content-center card-top fav"/>
              :
              <BsHeart className="d-flex justify-content-center card-top fav"/>
              }
            </Button>
          </>
        ) : (
          <div className="margintop">{null}</div>
        )}
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
            {rating !== 0 ? (
              <>
                {/* Rating:{" "} */}
                {[...Array(rating)].map((index, i) => (
                  <BsFillStarFill key={i} className={"starsCards"} />
                ))}
              </>
            ) : (
              // <BsStar/>
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
