import React, { useState } from "react";
import { useAuth } from "../../context/authContext";
import { useNavigate, Link } from "react-router-dom";
///JSX
import AlertMSJ from "./Alert";
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
      await signUp(user.email, user.password);
      navigate("/home");
    } catch (error) {
      console.log(error.code);
      if (error.code === "auth/invalid-email") {
        setError("Correo invalido");
      }
      setError(error.message);
    }
  };

  return (
    <>
      <CardGroup>
        <Card className="text-center" style={{ width: "18rem" }}>
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
              <Form.Group controlId="formBasicPassword">
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
              <Button variant="primary">
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
