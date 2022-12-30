import React from "react";
import "../../../styles/homeWomenCardCarrousel2.css";

const CardCarrousel2 = ({ name, img, price }) => {
  return (
    <div className="HWCC2-container d-flex">
      <div className="HWCC2 d-flex flex-column align-items-center justify-content-center text-center">
        <img className="HWCC2-image" src={img} alt="name" />
        <div className="d-flex flex-column align-items-center justify-content-center text-center HWCC2-sectioBottom">
          <p className="HWCC2-name d-flex">{name}</p>
          <p className="HWCC2-price d-flex">${price}</p>
        </div>
      </div>
    </div>
  );
};

export default CardCarrousel2;
