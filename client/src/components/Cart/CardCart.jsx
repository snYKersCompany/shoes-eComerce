import React, { useState, useEffect } from "react";
import { getProductsDetails } from "../../redux/features/products/productsActions";
import { useSelector, useDispatch } from "react-redux";
import "../../styles/cardCart.css";

const CardCart = ({
  i,
  img,
  count,
  size,
  price,
  name,
  id,
  handleDelete,
  idAux,
  setPriceToSend,
  priceToSend,
}) => {
  const { productDetail } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(count);
  const [actualTotalPrice, setActualTotalPrice] = useState(quantity * price);
  const [actualStock, setActualStock] = useState(productDetail.stock);

  useEffect(() => {
    dispatch(getProductsDetails(id));
  }, [dispatch, id, quantity]);

  const addQuantity = () => {
    const newQuantity =
      quantity === productDetail.stock[size] ? actualStock[size] : quantity + 1;
    setQuantity(newQuantity);
    const newTotalPrice = newQuantity * price;
    setActualTotalPrice(newTotalPrice);
    if (quantity !== productDetail.stock[size]) {
      setPriceToSend(priceToSend + price);
    }
    //DIFINICION DE PROPS

    const currentCart = JSON.parse(localStorage.getItem("carrito") || []);
    const newCart = [...currentCart];
    const productIndex = newCart.findIndex(
      (cartProduct) => cartProduct.idAux === idAux
    );

    newCart[productIndex] = {
      ...newCart[productIndex],
      count: newQuantity,
      totalPrice: actualTotalPrice + price,
    };

    localStorage.setItem("carrito", JSON.stringify(newCart));
  };

  const restQuantity = () => {
    const newQuantity = quantity === 1 ? 1 : quantity - 1;
    setQuantity(newQuantity);
    const newTotalPrice = newQuantity * price;
    setActualTotalPrice(newTotalPrice);
    if (quantity > 1) {
      setPriceToSend(priceToSend - price);
    }
    //DIFINICION DE PROPS
    const currentCart = JSON.parse(localStorage.getItem("carrito") || []);
    const newCart = [...currentCart];
    const productIndex = newCart.findIndex(
      (cartProduct) => cartProduct.idAux === idAux
    );

    newCart[productIndex] = {
      ...newCart[productIndex],
      count: newQuantity,
      totalPrice: actualTotalPrice - price,
    };

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
        <h3 className="fontSizeCardCart">Total: ${actualTotalPrice}</h3>
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
