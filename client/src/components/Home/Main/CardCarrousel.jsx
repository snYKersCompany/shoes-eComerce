import React from "react";
import "../../../styles/carrouselMain.css";

const CardCarrousel = ({ name, img }) => {
  return (
    <div className="cardCarrousel">
      <div className="img-back"></div>
      <img src={img} className="imgCardCarrousel" alt={name} />
      <p className="d-flex txt ">{name}</p>
    </div>
  );
};

export default CardCarrousel;
