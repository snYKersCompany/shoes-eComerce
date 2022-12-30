import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
//JSX
import NavBar from "../NavBar/NavBar";
import CardCart from "./CardCart";
import Payment from "../Paypal/Payment";
//BS

const Cart = () => {
  let productsCart = localStorage.getItem("carrito");

  let [products, setProducts] = useState(
    productsCart?.length > 1 ? JSON.parse(productsCart) : []
  );
  console.log(products);

  // {productsCart.length>1? map:}
  //intera el objeto del local storage para renderizar todas las cards
  let priceTotal = 0;

  let InfoToSend = {
    products: JSON.parse(localStorage.getItem("carrito")),
    finalAmout: (priceTotal =
      products.length >= 1
        ? products.map((el) => {
            priceTotal += el.totalPrice;
            return priceTotal;
          })
        : 0),
  };
  console.log(InfoToSend.finalAmout);
  const handleDelete = (productId) => {
    let filtered = products.filter((el) => el.id + el.size !== productId);
    console.log(
      products.filter((el) => el.id + el.size !== productId),
      productId
    );
    localStorage.setItem("carrito", JSON.stringify(filtered));
    setProducts(filtered);
  };

  return (
    <>
      <NavBar />
      <div className="d-flex p-5 justify-content-center align-items-center flex-column">
        {products.map((el, i) => {
          return (
              <CardCart
                i={i}
                key={i}
                id={el.id}
                name={el.name}
                totalPrice={el.totalPrice}
                count={el.count}
                stock={el.stock}
                img={el.img}
                price={el.price}
                size={el.size}
                handleDelete={handleDelete}
              />
          );
        })}
        {products.length >= 1 ? (
          <>
            <h2>Total: ${InfoToSend.finalAmout}</h2>
            <Payment products={InfoToSend.products} />
          </>
        ) : (
          <>
            <div>
              <h1>Your cart is empty</h1>
              <h1>Don`t you know which Snyker choose?</h1>
              <Link to="/home">
                <button>Discover new offerts</button>
              </Link>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Cart;
