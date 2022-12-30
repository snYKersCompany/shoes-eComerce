import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
//JSX
import NavBar from "../NavBar/NavBar";
import CardCart from "./CardCart";
import Payment from "../Paypal/Payment";
//BS

const Cart = () => {
  let priceTotal = 0;
  let productsCart = localStorage.getItem("carrito");

  const [products, setProducts] = useState(
    productsCart?.length > 1 ? JSON.parse(productsCart) : []
  );
  const [priceToSend, setPriceToSend] = useState(
    products.length
      ? products.reduce((acc, product) => (acc = acc + product.totalPrice), 0)
      : priceTotal
  );

  useEffect(() => {}, [priceTotal]);

  let InfoToSend = {
    products: JSON.parse(localStorage.getItem("carrito")),
    finalAmout: priceToSend,
  };
  console.log("price To send", InfoToSend.finalAmout);

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
              key={i}
              i={i}
              id={el.id}
              name={el.name}
              totalPrice={el.totalPrice}
              count={el.count}
              stock={el.stock}
              img={el.img}
              price={el.price}
              size={el.size}
              handleDelete={handleDelete}
              setPriceToSend={setPriceToSend}
              priceToSend={priceToSend}
              idAux={el.idAux}
            />
          );
        })}
        {products.length >= 1 ? (
          <>
            <h2 style={{ color: "white" }}>Total: ${priceToSend}</h2>
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
