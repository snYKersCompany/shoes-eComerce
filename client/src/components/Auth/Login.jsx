import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
///JSX
import AlertMSJ from "./AlertMSJ";
//BS
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

//styles
import "../../styles/login.css";

const Login = () => {
  const navigate = useNavigate();
  const { logIn, logInGoogle, user } = useAuth();
  console.log(user);

  const [shown, setShown] = useState(false);
  const [password, setPassword] = useState("");

  const switchShown = () => setShown(!shown);
  const onChange = ({ currentTarget }) => setPassword(currentTarget.value);

  useEffect(() => {}, [user]);

  /////-----STATES-----/////
  const [userInput, setUserInput] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  /////-----HANDLES-----/////
  const handleChange = ({ target: { name, value } }) => {
    setUserInput({ ...userInput, [name]: value });
  };

  //Funcion con try cath async
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(userInput.email, userInput.password);
      navigate("/");
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
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleResetPassword = () => {
    try {
      navigate("/restore-password");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <div className="loginContainer">
        <div className="loginWelcomeContainer">
          <h3 className="loginWelcomeMSJ">Welcome back to snYKers</h3>
          <h5 className="loginWelcomeMSJLogin">LogIn your Account</h5>
        </div>
        <Form onSubmit={(e) => handleSubmit(e)}>
          <div className="loginFormContainer">
            {error && <AlertMSJ message={error} />}
            <Form.Group controlId="formBasicEmail" className="mb-4">
              <Form.Control
                className="ph-center d-flex "
                onChange={(e) => handleChange(e)}
                name="email"
                type="email"
                placeholder="Enter email"
              />
            </Form.Group>
            <Form.Group
              onChange={onChange}
              controlId="formBasicPassword"
              className="mb-4"
            >
              <Form.Control
                className="ph-center d-flex w-80"
                onChange={(e) => handleChange(e)}
                name="password"
                placeholder="Password"
                type={shown ? "text" : "password"}
                value={password}
              />
              <div className="d-flex justify-content-center">
                <Button variant="dark" onClick={switchShown}>
                  {shown ? <AiFillEye /> : <AiFillEyeInvisible />}
                </Button>
              </div>
            </Form.Group>
            {error ? null : (
              <Button variant="success" type="submit">
                <p className="loginBTNSubmit">Login</p>
              </Button>
            )}
          </div>
        </Form>
        <div className="loginActionBTNSContainer">
          <button
            className="loginActionBTN "
            type="submit"
            onClick={handleResetPassword}
          >
            Forgot Password ?
          </button>
          <br />
          <button className="loginActionBTN" onClick={handleGoogleLogin}>
            Login with Google
          </button>
          <br />
          <Link to="/register">
            <button className="loginActionBTN ">
              Dont have an account? Register here
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Login;
