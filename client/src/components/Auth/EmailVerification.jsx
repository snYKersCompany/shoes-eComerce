import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
//actions
import { useAuth } from "../../context/authContext";
//JSX
import SuccessMSJ from "./SuccessMSJ";
import AlertMSJ from "./AlertMSJ";
//BS
import Button from "react-bootstrap/esm/Button";
import "../../styles/EmailVerification.css";

const EmailVerification = () => {
  const { firebaseUser, emailVerification, logOut, user } = useAuth();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  console.log(firebaseUser);

  const handleVerificationBTN = (e) => {
    e.preventDefault();
    try {
      emailVerification(firebaseUser);
      setSuccess("Please check your email and follow the steps");
      setError("");
    } catch (error) {
      setError(error);
    }
  };

  return (
    <>
      <div className="verifyEmailContainer">
        {error && <AlertMSJ message={error} />}
        {success && <SuccessMSJ message={success} />}
        <h1 className="verifyEmailTxt">Please verify the email to continue</h1>
        <Button
          variant="success"
          className="verifyEmailBtn"
          onClick={(e) => handleVerificationBTN(e)}
        >
          Send Verification Email
        </Button>
        <Link to="/">
          <Button variant="outline-warning" className="verifyEmailBtn">
            Verification Completed
          </Button>
        </Link>
        <Link to="/">
          <Button variant="outline-danger" className="verifyEmailBtn">
            Go home
          </Button>
        </Link>
      </div>
    </>
  );
};

export default EmailVerification;
