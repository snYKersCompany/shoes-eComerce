import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useAuth } from "../../context/authContext";
import { useNavigate, Link } from "react-router-dom";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
///JSX
import AlertMSJ from "./AlertMSJ";
//BS
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
//style
import "../../styles/register.css";
//actions
import { putUserInformation } from "../../redux/features/users/usersActions";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { signUp } = useAuth(); // eslint-disable-line

  const [shown, setShown] = useState(false);
  const [password, setPassword] = useState("");

  const switchShown = () => setShown(!shown);
  const onChange = ({ currentTarget }) => setPassword(currentTarget.value);

  const [forgotPassword, setForgotPassword] = useState(""); // eslint-disable-line

  /////-----STATES-----/////
  const [userIN, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  /////-----HANDLES-----/////
  function validateUserName(username) {
    if (
      !/^[a-zA-Z0-9_-]{4,16}$/.test(username) //mas de 4letras, numeros, guiones, y guionbajo
    ) {
      setError(
        `UserName invalid, It must have minimum 4 letters and maximum 16 letters, numbers, hyphens and underscores`
      );
    } else {
      setError("");
    }
  }

  function validateEmail(email) {
    if (
      !/^[a-z0-9_-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(
        email
      ) //example alguien.alguie@algunlugar.es
    ) {
      setError(
        `error, special characters are invalid, need @ or . or .com/ar/es etc`
      );
    } else {
      setError("");
    }
  }

  function validatePassword(password) {
    if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password)) {
      setError(
        `Password invalid, It must have 8 letters, 1 number and 1 character`
      );
    } else {
      setError("");
    }
  }

  const handleChange = ({ target: { name, value } }) => {
    if (name === "username") {
      validateUserName(value);
    }
    if (name === "email") {
      validateEmail(value);
    }
    if (name === "password") {
      validatePassword(value);
    }
    setShown(false);
    setUser({ ...userIN, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const userUID = await signUp(userIN.email, userIN.password);
      navigate("/");
      alert("Your register went succesfully :D");
      dispatch(
        putUserInformation(userUID.user.uid, {
          username: userIN.username,
          password: userIN.password,
        })
      );
      setUser({ username: "", email: "", password: "" });
      setPassword("");
      setShown(false);
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        setError("This email is already in use, please use another");
      }
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
      //if (error.code === "")
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
              <Form.Group controlId="formBasicUsername" className="mb-4">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  size="40"
                  maxLength="256"
                  className="ph-center"
                  onChange={(e) => handleChange(e)}
                  name="username"
                  type="username"
                  placeholder="Username"
                  required
                />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  className="ph-center"
                  onChange={(e) => handleChange(e)}
                  name="email"
                  type="email"
                  placeholder="Enter email"
                  required
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group
                onChange={onChange}
                controlId="formBasicPassword"
                className="mb-4"
              >
                <Form.Label>Password</Form.Label>
                <div className="d-flex justify-content-center">
                  <Form.Control
                    size="40"
                    maxLength="256"
                    className="ph-center"
                    onChange={(e) => handleChange(e)}
                    name="password"
                    type={shown ? "text" : "password"}
                    placeholder="Password"
                    required
                  />
                  <Button className="d-flex" onClick={switchShown}>
                    {shown ? <AiFillEye /> : <AiFillEyeInvisible />}
                  </Button>
                </div>
              </Form.Group>

              <Form.Group controlId="formBasicCheckbox"></Form.Group>
              {error ? null : (
                <Button variant="primary" type="submit">
                  Register
                </Button>
              )}
            </Form>
            <Link to="/login">
              <Button variant="primary" className="mt-4">
                Already have an account? Login here
              </Button>
            </Link>
          </Card.Body>
          <Card.Footer className="text-muted">
            <Link to="/">Go Home</Link>
          </Card.Footer>
        </Card>
      </CardGroup>
    </>
  );
};

export default Register;
