import React from "react";
//BS
import Button from "react-bootstrap/Button";
//utils
import axios from "axios";
import { useEffect } from "react";
import { useAuth } from "../../context/authContext";
import { Link } from "react-router-dom";

const Payment = ({ products }) => {
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      console.log("user de firebase en home", user);
    }
  }, [user]);
  // console.log("Payment products", products);

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
      {user ? (
        <Button variant="secondary customBtn" onClick={() => handleClick()}>
          Buy
        </Button>
      ) : (
        <>
          <label>Apparently you are not logged in yet</label>
          <label>Login to continue with your purchase</label>
          <Link to={"/login"}>
            <Button variant="secondary customBtn">Login</Button>
          </Link>
        </>
      )}
    </>
  );
};

export default Payment;
