import React, { useState } from "react";
import "../../styles/cardCart.css";
import { current } from "@reduxjs/toolkit";

const CardCart = ({
  i,
  img,
  count,
  size,
  total,
  price,
  name,
  id,
  handleDelete,
}) => {
  const [quantity, setQuantity] = useState(count);

  const addQuantity = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    const currentCart = JSON.parse(localStorage.getItem("carrito") || []);
    const product = currentCart.find((cartProduct) => cartProduct.id === id);
    const filteredCart = currentCart.filter((product) => {
      let filtered = product.id !== id;
      return filtered;
    });

    const newCart = [
      ...filteredCart,
      (currentCart[product.id] = {
        ...product,
        count: newQuantity,
      }),
    ];
    localStorage.setItem("carrito", JSON.stringify(newCart));
  };

  const restQuantity = () => {
    const newQuantity = quantity === 1 ? 1 : quantity - 1;
    setQuantity(newQuantity);
    const currentCart = JSON.parse(localStorage.getItem("carrito") || []);
    const product = currentCart.find((cartProduct) => cartProduct.id === id);
    const filteredCart = currentCart.filter((product) => {
      let filtered = product.id !== id;
      return filtered;
    });

    const newCart = [
      ...filteredCart,
      (currentCart[product.id] = {
        ...product,
        count: newQuantity,
      }),
    ];
    localStorage.setItem("carrito", JSON.stringify(newCart));
  };

  return (
    <div className="d-flex containerCardCart justify-content-evenly">
      <div className="d-flex h-100 align-items-center">
        <img src={img} alt={name} className="imgCardCart" />
        <h3>{name}</h3>
        <div
          className="d-flex mx-4 h-75 bg-danger"
          style={{ width: " 2px" }}
        ></div>
      </div>
      <div className="d-flex h-100 flex-column justify-content-center fontSizeCardCart">
        <h3 className="fontSizeCardCart">Size: {size}</h3>
      </div>
      <div className="fontSizeCardCart">
        <span className="modifyCount" onClick={restQuantity}>
          -
        </span>
        <h4>Amount: {quantity}</h4>
        <span className="modifyCount" onClick={addQuantity}>
          +
        </span>
      </div>
      <div>
        <h3 className="fontSizeCardCart">Price: ${price}</h3>
        <h3 className="fontSizeCardCart">Total: ${total}</h3>
      </div>

      <div className="d-flex h-100">
        <div className="d-flex h-100 align-items-center controlCardCart justify-content-between">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Delete-button.svg/862px-Delete-button.svg.png"
            alt="delete"
            className="imgControlCardCart"
            onClick={() => handleDelete(id + size)}
          />
        </div>
      </div>
    </div>
  );
};

export default CardCart;
