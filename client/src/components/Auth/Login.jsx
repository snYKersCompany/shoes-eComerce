import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";
//BS
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  /////-----STATES-----/////
  const [user, setUser] = useState({
    email: "",
    password: "",
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
      await login(user.email, user.password);
      navigate("/home");
    } catch (error) {
      if (error.code === "auth/invalid-email") {
        setError("Correo invalido");
      }
      if (error.code === "auth/user-not-found") {
        setError("El mail no esta registrado");
      }
      if (error.code === "auth/wrong-password") {
        setError("Contrasena incorrecta");
      }
      if (error.code === "auth/internal-error") {
        setError("La contrasena debe tener 7 o mas caracteres");
      }
      console.log(error);
    }
  };

  return (
    <>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control name="email" type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default Login;
