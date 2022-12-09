import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../context/authContext";
///JSX
import Alert from "./Alert";
//BS
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal"; // eslint-disable-line

const Login = () => {
  const navigate = useNavigate();
  const { logIn, logInGoogle, resetPassword } = useAuth();

  /////-----STATES-----/////
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState();

  /////-----HANDLES-----/////
  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    return new Promise(() => {
      e.preventDefault();
      setError("");
      logIn(user.email, user.password)
        .then(() => {
          navigate("/home");
        })
        .catch((error) => {
          if (error.code === "auth/wrong-password") {
            setError("Wrong Password");
          }
          setError(error.message);
        });
    });
  };

  // const handleSubmit = () => {
  //   const a = new Promise(
  //     logIn(user.email, user.password).then((user) => {
  //       alert(`${user} has been loged in snYKers`)
  //         .then(navigate("home"))
  //         .catch((error) => {
  //           console.log(error.code);
  //           if (error.code === "auth/invalid-email") {
  //             setError("Correo invalido");
  //           }
  //           setError(error.message);
  //         });
  //     })
  //   );
  //   return a;
  // };

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
      alert("We have sent you an email with a link to reset your password");
      setError("We have sent you an email with a link to reset your password");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <h1>Login</h1>
      {error && <Alert message={error} />}
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
        <Button variant="primary" type="submit">
          Login
        </Button>
        <Button variant="primary" type="submit" onClick={handleResetPassword}>
          Forgot Password ?
        </Button>
      </Form>

      <Button variant="primary" onClick={handleGoogleLogin}>
        Login with Google
      </Button>
      <Link to="/register">
        <Button variant="primary">Dont have an account? Register here</Button>
      </Link>
    </>
  );
};

export default Login;
