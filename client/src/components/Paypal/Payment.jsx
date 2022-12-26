import React, { useState } from "react";
//BS
import Button from "react-bootstrap/Button";
//utils
import { useAuth } from "../../context/authContext";
import axios from "axios";

const Payment = ({ products, finalAmount }) => {
  console.log("Payment finalAmount", finalAmount);
  console.log("Payment products", products);

  const handleClick = () => {
    axios
      .post("http://localhost:3001/api/checkouts", {
        products,
      })
      .then((res) => {
        if (res.data.url) {
          window.location.href = res.data.url;
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <>
      <Button variant="secondary customBtn" onClick={() => handleClick()}>
        Pay
      </Button>
    </>
  );
};

export default Payment;
