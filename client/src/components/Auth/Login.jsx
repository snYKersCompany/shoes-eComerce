import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../context/authContext";
///JSX
import AlertMSJ from "./AlertMSJ";
//BS
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import RestorePassword from "./RestorePassword";
//styles
import "../../styles/login.css";

const Login = () => {
  const navigate = useNavigate();
  const { logIn, logInGoogle, resetPassword } = useAuth();

  /////-----STATES-----/////
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [forgotPassword, setForgotPassword] = useState("");

  /////-----HANDLES-----/////
  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  //Funcion con try cath async
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(user.email, user.password);
      navigate("/home");
    } catch (error) {
      console.log("catch");
      console.log(error.code);
      console.log(error.message);
      if (error.code === "auth/invalid-email") {
        setError("Introduce an email");
      }
      if (error.code === "auth/internal-error") {
        setError("Introduce a password");
      }
      if (error.code === "auth/wrong-password") {
        setError("Wrong Password");
      }
      if (error.code === "auth/user-not-found") {
        setError("This email is no registered");
      }
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await logInGoogle();
      navigate("/home");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleResetPassword = async () => {
    if (!user.email) {
      return setError("Please enter your email");
    }
    try {
      await resetPassword(user.email);
      setForgotPassword(
        "We have sent you an email with a link to reset your password"
      );
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <CardGroup>
        <Card className="text-center text-white" style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>Login</Card.Title>
            {forgotPassword && <RestorePassword message={forgotPassword} />}
            {error && <AlertMSJ message={error} />}
            <Form onSubmit={(e) => handleSubmit(e)}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  className="ph-center"
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
                  className="ph-center"
                  onChange={(e) => handleChange(e)}
                  name="password"
                  type="password"
                  placeholder="Password"
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Login
              </Button>
              <Button
                className="m-2"
                variant="primary"
                type="submit"
                onClick={handleResetPassword}
              >
                Forgot Password ?
              </Button>
            </Form>
            <Button
              className="m-2"
              variant="primary"
              onClick={handleGoogleLogin}
            >
              Login with Google
            </Button>
            <Link to="/register">
              <Button className="m-2" variant="primary">
                Dont have an account? Register here
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

export default Login;
