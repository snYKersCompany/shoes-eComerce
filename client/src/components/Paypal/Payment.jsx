import React from "react";
import Button from "react-bootstrap/Button";
import { useAuth } from "../../context/authContext";
import { useNavigate } from "react-router-dom";

const Payment = ({ InfoToSend }) => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleClick = async () => {
    if (user) {
      navigate(`/checkout/${user.uid}`);
    } else {
      navigate("/register");
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
