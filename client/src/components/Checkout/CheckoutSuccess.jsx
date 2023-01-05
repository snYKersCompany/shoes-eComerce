import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
//JSX
import NavBar from "../NavBar2.0/NavBar2.0";
//actions
import {
  executePayment,
  changeStatusOrder,
} from "../../redux/features/orders/ordersActions";
//styles
import Button from "react-bootstrap/esm/Button";
import "../../styles/checkoutSuccess.css";

const CheckoutSuccess = () => {
  const dispatch = useDispatch();
  localStorage.removeItem("carrito");
  console.log(window.location.search);
  useEffect(() => {
    //Buscar otro metodo que sirva para todos los metodos de pago
    const query = window.location.search;
    console.log(query);
    const payment = query.slice(9, 15); // 'paypal'
    // '?payment=paypal&_id=JdKqrX3YnXR8p1SrZ9nfhy3xqcF3&token=72N35155N6843844E'.slice(9,15)
    if (payment === "paypal") executePayment(query);
    if (payment === "stripe") {
      dispatch(changeStatusOrder(query, { state: "aprobed" }));
    }
  }, [dispatch]);

  return (
    <>
      <NavBar />
      <div className="mainView">
        <h2 className="CheckoutSuccesText">Checkout Success</h2>
        <h3 className="CheckoutSuccesText">Thank you for your purchase!</h3>
        <Link to="/">
          <Button variant="success" className="CheckoutSuccesBtn">
            Back to Snykers Shop
          </Button>
        </Link>
      </div>
    </>
  );
};

export default CheckoutSuccess;
