import React from "react";
import { useState } from "react";
import NavBar from "../NavBar/NavBar";
import CardCart from "./CardCart";


import CheckoutForm from "../Stripe/CheckoutForm";
//STRIPE
import {loadStripe} from '@stripe/stripe-js';


//Elements engloba a los demas componentes, para que tengan acceso a la coneccion de Stripe.
import {Elements} from '@stripe/react-stripe-js';

//Nos conectamos a stripe, con la clave publica (Acomodar en una variable de entorno)
const stripePromise = loadStripe("pk_test_51MHXZUEgY6MBu39VFoEgCPs7p60pA9GRQ50lY1Tt0g8KDajCchKvX33hZ3QUBrEkOr3N2wUr2Z3Sved9g6YdhbgM00knycrACa")


const Cart = () => {
  let productsCart = localStorage.getItem("carrito");

  const [products, setProducts] = useState(
    productsCart?.length > 1 ? JSON.parse(productsCart) : false
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
        <Elements stripe={stripePromise}>
          <CheckoutForm priceTotal={priceTotal} info={InfoToSend}/>
          </Elements> 
      </div>
    </>
  );
};

export default Cart;
