import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux"; //BS
import Button from "react-bootstrap/Button"; //utils
import axios from "axios";
import { useAuth } from "../../context/authContext";
import { Link, useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { createPayment } from "../../redux/features/orders/ordersActions";

const Payment = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleClick = async () => {
    if (user) {
      navigate(`/checkout/${user.uid}`);
    } else {
      navigate("/register");
    }
    // try {
    //   if (paymentMethod === "stripe") {
    //     axios
    //       .post("http://localhost:3001/api/chekcouts", { products })
    //       .then((res) => {
    //         if (res.data.url) window.location.href = res.data.url;
    //       })
    //       .catch((err) => console.log(err.message));
    //   }
    //   if (paymentMethod === "paypal") {
    //     const body = {
    //       finalAmout,
    //       products,
    //       user,
    //     };
    //     console.log(body);
    //     const voucher = await createPayment(body);
    //     const { href } = voucher.links.find((link) => link.rel === "approve");
    //     window.location.href = href;
    //   }
    // } catch (error) {
    //   console.log(error);
    // }
  };

  return (
    <>
      {/* <Form>
        {["paypal", "stripe"].map((type) => (
          <div key={`inline-${type}`} className="mb-3">
            <Form.Check
              inline
              label={type}
              name="group1"
              type="radio"
              id={`inline-${type}`}
              onClick={() => setPaymentMethod(type)}
            />
          </div>
        ))}
      </Form> */}
      <Button variant="secondary customBtn" onClick={() => handleClick()}>
        Buy
      </Button>
    </>
  );
};

export default Payment;
