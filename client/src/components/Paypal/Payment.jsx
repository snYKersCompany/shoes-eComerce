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
    try {
      if (user) {
        if (userDashboard.phone) {
          axios
            .post("/checkouts", {
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
          navigate(`/complete-data/${userDashboard._id}`);
        }
      } else {
        navigate("/complete-register");
      }
    } catch (error) {
      console.log(error)
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
