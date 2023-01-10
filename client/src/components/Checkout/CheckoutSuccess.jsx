import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
//JSX
import NavBar from "../NavBar2.0/NavBar2.0";
//actions
import {
  executePayment,
  changeStatusOrder,
} from "../../redux/features/orders/ordersActions";

import { putSuccesOrder } from "../../redux/features/nodemailer/nodeMailerActions";
//styles
import Button from "react-bootstrap/esm/Button";
import "../../styles/checkoutSuccess.css";

const CheckoutSuccess = () => {
  const dispatch = useDispatch();
  const { email } = useSelector((state) => state.users.userDashboard);
  localStorage.removeItem("carrito");
  useEffect(() => {
    //Buscar otro metodo que sirva para todos los metodos de pago
    const query = window.location.search;
    const payment = query.slice(9, 15);
    if (email) {
      if (payment === "paypal") executePayment(query);
      if (payment === "stripe") {
        dispatch(changeStatusOrder(query, { state: "aprobed" }));
      }
      dispatch(putSuccesOrder(email));
    }
  }, [dispatch, email]);

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
