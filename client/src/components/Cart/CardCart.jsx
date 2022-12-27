import React, { useState } from "react";
import "../../styles/cardCart.css";

const CardCart = ({
  setControl,
  control,
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
  const [modCount, setModCount] = useState(count);

  const restCount = () => {
    setModCount(modCount - 1);
    let storage = JSON.parse(localStorage.getItem("carrito"));
    let filtro = storage.filter((product) => {
      let noRepeat = id !== product.id;
      return noRepeat;
    });
    console.log("storage", storage);

    let productModified = {
      ...storage[i],
      count: modCount - 1,
    };
    console.log("product modified", productModified);
    let modified = [...filtro, productModified];
    console.log(modified);

    console.log("filtro", filtro);
    return localStorage.setItem("carrito", JSON.stringify(modified));
  };

  const addCount = () => {
    setModCount(modCount + 1);
    let storage = JSON.parse(localStorage.getItem("carrito"));
    let filtro = storage.filter((product) => {
      let noRepeat = product.id !== id;
      return noRepeat;
    });

    console.log("storage", storage);
    console.log("i", i);
    let productModified = {
      ...storage[i],
      count: modCount + 1,
    };
    console.log("product modified", productModified);
    let modified = [...filtro, (storage[i] = productModified)];
    console.log(modified);

    console.log("filtro", filtro);
    localStorage.setItem("carrito", JSON.stringify(modified));
    setControl(!control);
  };

  console.log("cardCart count", count);

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
        <span className="modifyCount" onClick={restCount}>
          -
        </span>
        <h4>Amount: {modCount}</h4>
        <span className="modifyCount" onClick={addCount}>
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
