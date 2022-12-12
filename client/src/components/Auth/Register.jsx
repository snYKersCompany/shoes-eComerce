import React, { useState } from "react";
import { useAuth } from "../../context/authContext";
import { useNavigate, Link } from "react-router-dom";
///JSX
import AlertMSJ from "./AlertMSJ";
//BS
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

const Register = () => {
  const navigate = useNavigate();
  const { signUp } = useAuth();

  /////-----STATES-----/////
  const [user, setUser] = useState({
    email: null,
    password: null,
  });
  const [error, setError] = useState("");

  /////-----HANDLES-----/////
  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(user.emial, user.password);
      navigate("/home");
    } catch (error) {
      console.log("catch");
      console.log(error.code);
      console.log(error.message);
      if (error.code === "auth/admin-restricted-operation") {
        setError("Introduce an email and password");
      }
      if (error.code === "auth/internal-error") {
        setError("Introduce a password");
      }
      if (error.code === "auth/weak-password") {
        setError("Password must be 6 or longer");
      }
      if (error.code === "auth/email-already-in-use") {
        setError("This email is already in use, please use another");
      }
      if (error.code === "auth/email-already-in-use") {
        setError("This email is already in use, please use another");
      }
      if (error.code === "auth/missing-email") {
        setError("Introduce an email");
      }
    }
  };

  return (
    <>
      <CardGroup>
        <Card className="text-center text-white" style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>Register</Card.Title>
            {error && <AlertMSJ message={error} />}
            <Form onSubmit={(e) => handleSubmit(e)}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  onChange={(e) => handleChange(e)}
                  name="email"
                  type="email"
                  placeholder="Enter email"
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
              <Form.Group controlId="formBasicPassword" className="mb-4">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  onChange={(e) => handleChange(e)}
                  name="password"
                  type="password"
                  placeholder="Password"
                />
              </Form.Group>
              <Form.Group controlId="formBasicCheckbox"></Form.Group>
              <Button variant="primary" type="submit">
                Register
              </Button>
            </Form>
            <Link to="/login">
              <Button variant="primary" className="mt-4">
                Already have an account? Login here
              </Button>
            </Link>
          </Card.Body>
          <Card.Footer className="text-muted">
            <Link to="/home">Go Home</Link>
          </Card.Footer>
        </Card>
      </CardGroup>
    </>
  );
};

export default Register;
