import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  executePayment,
  changeStatusOrder,
} from "../../redux/features/orders/ordersActions";
//JSX
import NavBar from "../NavBar2.0/NavBar2.0";

const CheckoutCancel = () => {
  const dispatch = useDispatch();
  console.log(window.location.search);
  useEffect(() => {
    const query = window.location.search;
    const payment = query.slice(9, 15); // 'paypal'
    // '?payment=paypal&_id=JdKqrX3YnXR8p1SrZ9nfhy3xqcF3&token=72N35155N6843844E'.slice(9,15)
    if (payment === "paypal") executePayment(query);
    if (payment === "stripe") {
      dispatch(changeStatusOrder(query, { state: "cancelled" }));
    }
  }, [dispatch]);

  return (
    <div>
      <NavBar />
      <h1 className="text-white">The purchase has been canceled </h1>
      <Link to="/home">
        <button>Back to Snykers Shop</button>
      </Link>
    </div>
  );
};

export default CheckoutCancel;
