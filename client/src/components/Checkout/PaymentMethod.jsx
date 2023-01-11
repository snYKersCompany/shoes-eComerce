import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux"; //BS
import Button from "react-bootstrap/Button"; //utils
import axios from "axios";
import { useAuth } from "../../context/authContext";
import { Link, useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { createPayment } from "../../redux/features/orders/ordersActions";
import "../../styles/PaymentMethod.css";

import paypal_icon from "../../utils/images/PayPal_icon.png"
import stripe_icon from "../../utils/images/Stripe_icon.png"

const PaymentMethod = ({buyController}) => {
  console.log(buyController)
  const { user } = useAuth();
  const navigate = useNavigate();

  //STRIPE PAYPAL Y  LOCALSTORAGE
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

  const [paymentMethod, setPaymentMethod] = useState("");

  const handleClick = async () => {
    try {
      if (paymentMethod === "stripe") {
        axios
          .post("/checkouts", {
            products: products,
            finalAmount: priceToSend,
            user,
          })
          .then((res) => {
            if (res.data.url) window.location.href = res.data.url;
          })
          .catch((err) => console.log(err.message));
      }
      if (paymentMethod === "paypal") {
        const body = {
          finalAmount: priceToSend,
          products,
          user,
        };
        console.log(body);
        const voucher = await createPayment(body);
        console.log(voucher)
        const { href } = voucher.links.find((link) => link.rel === "approve");
        window.location.href = href;
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="content">
      <div className="form">
        {/* <p>Choose your payment method:</p> */}
        <Form className="radio">
          {[["paypal", paypal_icon], ["stripe", stripe_icon]].map((type) => (
            <div key={`inline-${type[0]}`} className="formCheck">
              <Form.Check
                inline
                name="group1"
                type="radio"
                id={`inline-${type[0]}`}
                onClick={() => setPaymentMethod(type[0])}
              />
              <img src={type[1]} alt="" width={"70"}/>
              <label>{type[0]}</label>
            </div>
          ))}
        </Form>
      </div>
      <div className="formButton">
        <Button
          variant="secondary customBtn"
          onClick={() => handleClick()}
          disabled={(!paymentMethod.length || !buyController)}
        >
          Buy
        </Button>
      </div>
    </div>
  );
};

export default PaymentMethod;
