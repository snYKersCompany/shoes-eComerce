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

  const handleClick = () => {
    if (user) {
      if (userDashboard) {
        axios
          .post("http://localhost:3001/api/chekcouts", {
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
      } else {
        navigate(`complete-data/${userDashboard.id}`);
      }
    } else {
      navigate("/complete-register");
    }
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
