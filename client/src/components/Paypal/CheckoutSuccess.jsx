import React from "react";
import { Link } from "react-router-dom";
//JSX
import NavBar from "../NavBar/NavBar";

const CheckoutSuccess = () => {
  localStorage.removeItem("carrito");

  return (
    <div>
      <NavBar />
      <h1>CheckoutSuccess</h1>
      <h1>Thank you for your purchase!</h1>
      <Link to="/home">
        <button>Back to Snykers Shop</button>
      </Link>
    </div>
  );
};

export default CheckoutSuccess;
