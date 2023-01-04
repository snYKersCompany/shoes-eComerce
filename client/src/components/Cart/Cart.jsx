import React, { useState } from "react";
import { Link } from "react-router-dom";
//JSX
import NavBar from "../NavBar2.0/NavBar2.0";
import CardCart from "./CardCart";
import Payment from "../Paypal/Payment";
import Carrousel from "../Home/Main/Carrousel";
//styles
import Button from "react-bootstrap/Button";
import "../../styles/Cart.css";

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

  let InfoToSend = {
    products: JSON.parse(localStorage.getItem("carrito")),
    finalAmount: priceToSend,
  };

  console.log("price To send", priceToSend);

  const handleDelete = (productId, TotalPrice) => {
    let filtered = products.filter((el) => el.id + el.size !== productId);
    console.log(
      products.filter((el) => el.id + el.size !== productId),
      productId
    );
    setPriceToSend(priceToSend - TotalPrice);
    localStorage.setItem("carrito", JSON.stringify(filtered));
    setProducts(filtered);
  };

  console.log(priceToSend);

  return (
    <div className="noProductsContainer">
      <NavBar />
      {products.length ? (
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
          <h2 style={{ color: "white" }}>Total: {priceToSend}</h2>
          <Payment />
        </div>
      ) : (
        <>
          <div className="noProductsContainer">
            <h2 className="noProducts">
              You dont have any products in your cart
            </h2>
            <Carrousel />
            <Link to="/home">
              <Button variant="warning">Back to Snykers Shop</Button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
