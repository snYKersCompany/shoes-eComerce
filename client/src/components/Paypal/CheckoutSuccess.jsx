import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import NavBar from "../NavBar2.0/NavBar2.0";
import '../../styles/checkoutSuccess.css';
import { executePayment } from "../../redux/features/orders/ordersActions";
import { useDispatch } from "react-redux";

const CheckoutSuccess = () => {
  const dispatch = useDispatch()

  localStorage.removeItem("carrito");

  console.log(window.location.search)
  let exPay;  //  BORRABLE
  useEffect(()=>{
    //Buscar otro metodo que sirva para todos los metodos de pago

    const query = window.location.search
    const payment = query.slice(9, 15)   // 'paypal'
    // '?payment=paypal&_id=JdKqrX3YnXR8p1SrZ9nfhy3xqcF3&token=72N35155N6843844E'.slice(9,15)
    if( payment === 'paypal') exPay = executePayment(query)
                  //         BORRABLE
  },[dispatch])
  
  console.log(exPay)  //  BORRABLE
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