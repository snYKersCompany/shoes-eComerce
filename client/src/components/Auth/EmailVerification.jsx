import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
//actions
import { useAuth } from "../../context/authContext";
//JSX
import SuccessMSJ from "./SuccessMSJ";
import AlertMSJ from "./AlertMSJ";
//BS
import Button from "react-bootstrap/esm/Button";
import "../../styles/EmailVerification.css";
import { useEffect } from "react";
import { BsCheck } from "react-icons/bs";

const EmailVerification = () => {
  const navigate = useNavigate();
  const { firebaseUser, emailVerification, user } = useAuth();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [sended, setSended] = useState(false);

  useEffect(() => {
    console.log(user);
  }, [user]);

  const handleVerificationBTN = (e) => {
    e.preventDefault();
    try {
      emailVerification(firebaseUser);
      setError("");
      setSuccess("Please check your email and follow the steps");
      setSended(true);
    } catch (error) {
      if (error.code === "auth/too-many-requests") {
        setSuccess("");
        setError("Too many requestes, try it later");
      }
      setError(error);
    }
  };

  const handleVerificationCompleted = async (e) => {
    if (sended === false) {
      setError("This user isnt verified yet");
    } else {
      navigate("/");
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
        <Button
          variant="outline-warning"
          className="verifyEmailBtn"
          onClick={(e) => handleVerificationCompleted(e)}
        >
          Verification Completed
        </Button>
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
