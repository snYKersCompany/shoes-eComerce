import React from "react";
import "../../styles/PaymentCarrousel.css";

const PaymentCarrouselCard = ({ name, img }) => {
  return (
    <div className="PaymentCarrouselCard">
      <img src={img} className="imgPaymentCardCarrousel" alt={name} />
      <p className="d-flex PaymentCarrouseltxt ">{name}</p>
    </div>
  );
};

export default PaymentCarrouselCard;
