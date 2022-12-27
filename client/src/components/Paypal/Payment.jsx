import React from "react";
//BS
import Button from "react-bootstrap/Button";
//utils
import axios from "axios";
import { useAuth } from "../../context/authContext";
import { useNavigate } from "react-router-dom";

const Payment = ({ products, finalAmount }) => {
  console.log("Payment products", products);
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleClick = () => {
    if (!user) {
      navigate("/login");
    }
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
        Buy
      </Button>
    </>
  );
};

export default Payment;