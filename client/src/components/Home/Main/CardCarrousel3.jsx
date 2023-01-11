import React from "react";
import "../../../styles/carrouselMain3.css";

const CardCarrousel3 = ({ name, img }) => {
  return (
    <div className="cardCarrousel3">
      <div className="img-back3"></div>
      <img src={img} className="imgCardCarrousel3" alt={name} />
      <p className="d-flex txt text-decoration-none">{name}</p>
    </div>
  );
};

export default CardCarrousel3;
