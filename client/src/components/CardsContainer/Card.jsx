import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BsFillHeartFill, BsFillStarFill, BsHeart, BsStar } from "react-icons/bs"; // eslint-disable-line

import "../../styles/card.css";

const CardProduct = ({ _id, name, price, card_picture, brand, rating }) => {
console.log(name.split(" ").slice(0,2))
  return (
    <Card className="d-flex card ">
      <div className="d-flex justify-content-end me-4 mt-4">
        <Button variant="custom" className="btnFav">
          <BsHeart className="d-flex justify-content-center card-top fav" />
        </Button>
      </div>
      <Card.Img className="cardImage" variant="top" src={card_picture} />
      <Card.Body className="d-flex justify-content-center align-items-center me-4 marg CardBody1">
        <div className="d-flex brand">
          <Card.Text className="fs-1 mb-3">{brand}</Card.Text>
        </div>
        <div className="d-flex flex-column align-items-center">
          <Card.Title className="text-white fs-1 text-center">
            {name}
          </Card.Title>
          <Card.Text className="text-white fs-2">{price}</Card.Text>
          <Card.Text className="text-gold fs-5 mb-3">

            {
              rating !== 0?
              <>
              rating:{" "}
              {[...Array(rating)].map((index,i) => (
                  <BsFillStarFill key={i} />
                ))}  
              </>
                :
                // <BsStar/>
                <>
                  New
                </>
            }
          </Card.Text>
          <Link to={`/home/${_id}`} className="link">
            <Button variant="custom2 fw-bold">More Info</Button>
          </Link>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CardProduct;
