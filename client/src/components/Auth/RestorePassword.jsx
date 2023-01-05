import React, { useState } from "react";
import { Link } from "react-router-dom";
///JSX
import AlertMSJ from "./AlertMSJ";
import SuccessMSJ from "./SuccessMSJ";
//BS
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
//actions
import { useAuth } from "../../context/authContext";

const RestorePassword = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [userToReset, setUserToReset] = useState({
    email: "",
  });

  //Auth
  const { user, resetPassword } = useAuth();

  const handleSubmit = async () => {
    if (!userToReset.email) {
      setError("You have to provide an Email");
      try {
        resetPassword(userToReset.email);
        setError("");
        setSuccess(
          "We have sent you an email with a link to reset your password"
        );
      } catch (error) {
        setError(error.message);
      }
    }
  };

  const handleChange = ({ target: { name, value } }) => {
    setUserToReset({ ...userToReset, [name]: value });
    console.log(userToReset);
  };

  return (
    <>
      <CardGroup>
        <Card className="text-center text-white" style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>Restore Password</Card.Title>
            {success && <SuccessMSJ message={success} />}
            {error && <AlertMSJ message={error} />}
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>d
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
              <Button variant="primary" type="submit">
                Submit
              </Button>
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

export default RestorePassword;
