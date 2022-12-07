import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";
//BS
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

const Login = (props) => {
  const navigate = useNavigate();
  const { login } = useAuth();

  /////-----MODAL LOGIN-----/////
  const [showLogin, setShowLogin] = useState(false);
  const handleCloseLogin = () => setShowLogin(false);
  const handleShowLogin = () => {
    console.log("setshow Login");
    setShowLogin(true);
  };

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
      navigate("/");
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
      <Button variant="primary" onClick={() => handleShowLogin()}>
        Login
      </Button>

      <Modal
        {...props}
        show={showLogin}
        onHide={() => handleCloseLogin}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={(e) => handleSubmit(e)}>
            {error && <p>{error}</p>}
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                name="email"
                id="email"
                type="email"
                placeholder="Enter email"
                onSubmit={(e) => handleChange(e)}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                name="password"
                id="password"
                type="password"
                placeholder="Password"
                onSubmit={(e) => handleChange(e)}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Login
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleCloseLogin}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Login;
