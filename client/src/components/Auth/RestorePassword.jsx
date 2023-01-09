import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import AlertMSJ from "./AlertMSJ";
import SuccessMSJ from "./SuccessMSJ";
//BS
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

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
      <CardGroup>
        <Card className="text-center text-white" style={{ width: "18rem" }}>
          <Card.Body>
            {succes && <SuccessMSJ message={succes} />}
            {error && <AlertMSJ message={error} />}
            <Form onSubmit={(e) => handleSubmit(e)}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Restore password</Form.Label>
                <div className="d-flex justify-content-center">
                  <Form.Control
                    className="ph-center d-flex "
                    onChange={(e) => handleChange(e)}
                    name="email"
                    type="email"
                    placeholder="Enter email"
                  />
                  <span className="d-flex" style={{ width: "43px" }}></span>
                </div>
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
              <Form.Group>
                <Button variant="primary" type="submit">
                  Send Restore Password Email
                </Button>
              </Form.Group>
              <br />
              <Form.Group>
                <Link to="/login">
                  <Button variant="primary" type="submit">
                    LogIn with New Password
                  </Button>
                </Link>
              </Form.Group>
            </Form>
          </Card.Body>
          <Card.Footer className="text-muted">
            <Link to="/">Go Home</Link>
          </Card.Footer>
        </Card>
      </CardGroup>
    </>
  );
};

export default RestorePassowrd;
