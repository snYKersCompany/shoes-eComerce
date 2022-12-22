import React from "react";
import "../../../styles/ordersDetails.css";

const CardProductDetail = ({
  card_picture,
  name,
  brand,
  size,
  count,
  price,
  totalPrice,
}) => {
  return (
    <div className="d-flex containerCardCart justify-content-evenly">
      <div className="d-flex h-100 text-center align-items-center">
        <img src={card_picture} alt={name} className="imgCardCart" />
        <div className="d-flex flex-column ">
          <h3 className="text-green">{brand}</h3>
          <h3 className="text-white">{name}</h3>
        </div>
        <div
          className="d-flex marg h-75 bg-line"
          style={{ width: "3px" }}
        ></div>
      </div>
      <div className="d-flex h-100 flex-column justify-content-center div2">
        <h3 className="text-green">Size: {size}</h3>
        <h3 className="text-white">Count: {count}</h3>
      </div>
      <div>
        <h3 className="text-yellow">Price: ${price}</h3>
        <h3 className="text-total">Total: ${totalPrice}</h3>
      </div>
    </div>
  );
};

export default CardProductDetail;
