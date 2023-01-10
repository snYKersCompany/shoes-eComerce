import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import AlertMSJ from "./AlertMSJ";
import SuccessMSJ from "./SuccessMSJ";
//BS
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
//styles
import "../../styles/RestorePassword.css";

const RestorePassowrd = () => {
  const { resetPassword } = useAuth();
  const [error, setError] = useState("");
  const [succes, setSuccess] = useState("");
  const [forgotenUser, setForgotenUser] = useState({
    email: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError("");
      await resetPassword(forgotenUser.email);
      setSuccess(" Check your inbox email and follow the instructions");
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  };

  const handleChange = ({ target: { name, value } }) => {
    setForgotenUser({ ...forgotenUser, [name]: value });
  };

  return (
    <>
      <div className="restorePassContainer">
        <div className="restorePassWelcomeContainer">
          <Link to="/" className="restorePassActionBTNHome">
            Home
          </Link>
          <h3 className="restorePassWelcomeMSJ">Thanks for trusting in us</h3>
          <h5 className="restorePassWelcomeMSJRestore">
            Restore your password
          </h5>
        </div>
        <Form onSubmit={(e) => handleSubmit(e)}>
          <div className="restorePassFormContainer">
            {succes && <SuccessMSJ message={succes} />}
            {error && <AlertMSJ message={error} />}
            <Form.Group controlId="formBasicEmail" className="mb-4">
              <Form.Control
                className="ph-center d-flex "
                onChange={(e) => handleChange(e)}
                name="email"
                type="email"
                placeholder="Enter email"
              />
            </Form.Group>
            <Button variant="success" type="submit">
              <p className="restorePassBTNSubmit">
                Send Restore Password Email
              </p>
            </Button>
          </div>
        </Form>
        <div className="restorePassActionsBTNSContainer">
          <div className="restorePassActionsBTNSFlex">
            <Link to="/login">
              <button className="restorePassActionBTN " type="submit">
                LogIn with New Password
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default RestorePassowrd;
