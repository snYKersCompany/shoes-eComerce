import React from "react";
import { useState } from "react";
import NavBar from "../NavBar/NavBar";
import CardCart from "./CardCart";
import PayPalButton from "../Paypal/ButtonPaypal";

const Cart = () => { 
  let productsCart = localStorage.getItem("carrito");
  const [products, setProducts] = useState(
    productsCart.length > 1 ? JSON.parse(productsCart) : false
  );
  // {productsCart.length>1? map:}
  //intera el objeto del local storage para renderizar todas las cards

  //precio total
  let priceTotal = 0;
    
  {
    products.length >= 1
      ? products.map((el) => {
          priceTotal += el.totalPrice;
        })
      : (priceTotal += 0);
  }

  let InfoToSend = {
    products: JSON.parse(localStorage.getItem("carrito")),
    finalAmount: priceTotal,
  };

  const handleDelete = (productId) => {
    let filtered = products.filter((el) => el.id + el.size !== productId);
    console.log(
      products.filter((el) => el.id + el.size !== productId),
      productId
    );
    localStorage.setItem("carrito", JSON.stringify(filtered));
    setProducts(filtered);
  };

  console.log(products);

  //fin precio total

  return (
    <>
      <NavBar />
      <div className="d-flex p-5 justify-content-center align-items-center flex-column">
        <p>Hola</p>
        {products.length >= 1 ? (
          products.map((el, i) => {
            return (
              <CardCart
                id={el.id}
                name={el.name}
                total={el.totalPrice}
                count={el.count}
                img={el.img}
                price={el.price}
                size={el.size}
                key={i}
                handleDelete={handleDelete}
              />
            );
          })
        ) : (
          <>nada</>
        )}
        <h2>Total: ${priceTotal}</h2>
        <PayPalButton priceTotal={priceTotal} info={InfoToSend} />
      </div>
    </>
  );
};

export default Cart;
