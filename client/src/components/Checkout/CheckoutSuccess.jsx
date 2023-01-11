import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
//JSX
import NavBar from "../NavBar2.0/NavBar2.0";
//actions
import {
  executePayment,
  changeStatusOrder,
  getOrderDetails,
} from "../../redux/features/orders/ordersActions";
import { putSuccesOrder } from "../../redux/features/nodemailer/nodeMailerActions";
//styles
import Button from "react-bootstrap/esm/Button";
import "../../styles/checkoutSuccess.css";
import { useState } from "react";

const CheckoutSuccess = () => {
  const dispatch = useDispatch();
  // const { orderDetails } = useSelector((state) => state.orders);
  const { email, username, _id } = useSelector((state) => state.users.userDashboard);
  const query = window.location.search;
  const payment = query.slice(9, 15);
  const id = query.split("=").pop();

  const carrito = JSON.parse(localStorage.getItem('carrito'))

  const [orderDetails, setOrderDetails] = useState({
    user:{
      email,
      username,
      uid:_id
    },
    products:carrito,
    finalAmount:carrito && carrito.length ? carrito.reduce((acc, curr)=> acc=acc+curr.totalPrice, 0) : null
  })
  
  useEffect(() => {
    if(email && username && _id){
      setOrderDetails({...orderDetails, user:{
        email, username, uid:_id
      }})
    }
    
    //Buscar otro metodo que sirva para todos los metodos de pago
    if (payment === "paypal") executePayment(query);
    
    if (payment === "stripe") dispatch(changeStatusOrder(query, { state: "aprobed" }));
    
  }, [dispatch, email, username, id]);
  
  if(
    orderDetails.user.email &&
    orderDetails.user.username &&
    orderDetails.user.uid &&
    orderDetails.products.length &&
    orderDetails.finalAmount &&
    (payment === "paypal" || payment === "stripe")
    ){
      console.log("info para mandarle al mail", orderDetails);
      // dispatch(getOrderDetails(id));
      // console.log("getOrderDetails")
      dispatch(putSuccesOrder(orderDetails));
      // console.log("orderDetails")
      localStorage.removeItem("carrito");
  }
  // console.log("info para mandarle al mail", orderDetails);
  //   console.log({carrito})
  //   console.log({ email, username, _id })

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
