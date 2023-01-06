import React from "react";
import "../../styles/reviews.css";
import { BsFillStarFill } from "react-icons/bs"; // eslint-disable-line

const Reviews = ({ productDetail }) => {
  // const reviews = productDetail.map(e=> e.reviews.rating)

  console.log(productDetail);

  // const filtradoDeRating = productDetail.reviews.map(e=> e)

  return (
    <div className="d-column container">
      <h1 className="h1">HOLA!</h1>
      <h3 className="section-name">Reviews</h3>
      <div className="container-reviews">
        <div className="">
          {/*img del usuario */}
          <img src="" alt="" />
          {/*titulo de la review */}
          <p></p>
          {/*con la cantidad de rating que tenga */}
          {/* {[...Array(productDetail.rating)].map((i, index) => (
                <BsFillStarFill key={index} className="star " />
              ))} */}
        </div>
        {/*body de la review */}
        <input type="text" />
      </div>
    </div>
  );
};

export default Reviews;
