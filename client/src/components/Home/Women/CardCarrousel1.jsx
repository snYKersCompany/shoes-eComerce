import React from "react";
import "../../../styles/homeWomenCardCarrousel1.css";

const CardCarrousel1 = ({ name, img }) => {
  return (
    <div className="HWCC1-container">
      <div className="HWCC1">
        <img className="HWCC1-image" src={img} alt="name" />
        <p className="HWCC1-name d-flex text-white text-center">{name}</p>
      </div>
    </div>
  );
};

export default CardCarrousel1;
