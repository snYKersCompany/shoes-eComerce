import React, { useState } from "react";
import { useAuth } from "../../context/authContext";
import { useNavigate } from "react-router-dom";
//BS
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

const Register = () => {
  const navigate = useNavigate();
  const { signUp } = useAuth();

  /////-----MODAL REGISTER-----/////
  const [showRegister, setShowRegister] = useState(false);
  const handleCloseRegister = () => setShowRegister(false);
  const handleShowRegister = () => setShowRegister(true);

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
    try {
      await signUp(user.email, user.password);
      console.log(user);
      navigate("/home");
    } catch (error) {
      if (error.code === "auth/invalid-email") {
        setError("Correo invalido");
      }
      if (error.code === "auth/internal-error") {
        setError("La contrasena debe tener 7 o mas caracteres");
      }
      console.log(error);
    }
  };

  return (
    <>
      <Button variant="primary" onClick={() => handleShowRegister()}>
        Register
      </Button>

      <Modal
        show={showRegister}
        onHide={() => handleCloseRegister}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">Register</Modal.Title>
        </Modal.Header>
        <Form>
          {error && <p>{error}</p>}
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              name="email"
              type="email"
              placeholder="Enter email"
              onClick={(e) => handleChange(e)}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              name="password"
              type="password"
              placeholder="Password"
              onClick={(e) => handleChange(e)}
            />
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
            onClick={(e) => handleSubmit(e)}
          >
            Register
          </Button>
        </Form>
        <Modal.Footer>
          <Button onClick={handleCloseRegister}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Register;
