import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
//BS
import Button from "react-bootstrap/Button";
//utils
import axios from "axios";
import { useAuth } from "../../context/authContext";

const Payment = ({ products }) => {
  const { user } = useAuth();
  const { userDashboard } = useSelector((state) => state.users);
  const navigate = useNavigate();

  //metodo

  const handleClick = () => {
    //seleccionas metodo
    try {
      if (user) {
        navigate("/checkout");
      } else {
        navigate("/register");
      }
    } catch (error) {
      console.log(error);
    }
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
