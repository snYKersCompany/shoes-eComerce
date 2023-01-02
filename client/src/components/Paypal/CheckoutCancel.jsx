import React from "react";
import { Link } from "react-router-dom";
//JSX
import NavBar from "../NavBar2.0/NavBar2.0";

const CheckoutCancel = () => {
  return (
    <div>
      <NavBar />
      <h1>The purchase has been canceled</h1>
      <Link to="/home">
        <button>Back to Snykers Shop</button>
      </Link>
    </div>
  );
};

export default CheckoutCancel;
