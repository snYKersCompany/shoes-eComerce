import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import '../../styles/checkoutSuccess.css';

const CheckoutSuccess = () => {
  localStorage.removeItem("carrito");

  return (
    <>
      <NavBar />
      <div className="mainView">
        <h2>Checkout Success</h2>
        <h3>Thank you for your purchase!</h3>
        <Link to="/home">
          <button className="button">Back to Snykers Shop</button>
        </Link>
      </div>
    </>
  );
};

export default CheckoutSuccess;