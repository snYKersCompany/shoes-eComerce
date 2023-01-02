import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { executePayment } from "../../redux/features/orders/ordersActions";
//JSX
import NavBar from "../NavBar/NavBar";

const CheckoutCancel = () => {

  const dispatch = useDispatch()
  console.log(window.location.search)
  let exPay;  // BORRABLE
  useEffect(()=>{
    const query = window.location.search
    const payment = query.slice(9, 15)   // 'paypal'
    // '?payment=paypal&_id=JdKqrX3YnXR8p1SrZ9nfhy3xqcF3&token=72N35155N6843844E'.slice(9,15)
    if( payment === 'paypal') exPay = executePayment(query)
                          // BORRABLE
  },[dispatch])
  
  console.log(exPay)  // BORRABLE

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
