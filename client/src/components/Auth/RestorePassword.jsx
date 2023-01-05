import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import AlertMSJ from "./AlertMSJ";
import SuccessMSJ from "./SuccessMSJ";

const RestorePassowrd = () => {
  const emailRef = useRef();
  const { resetPassword } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [succes, setSuccess] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setError("");
      await resetPassword(emailRef.current.value);
      setSuccess(" Check your inbox email and follow the instructions");
    } catch (error) {
      console.log(error);
      setError(error.message);
    }

    setLoading(false);
  }

  return (
    <div>
      <section className="login">
        <div className="loginContainer">
          <h1>Recuperar contraseña</h1>
          {succes && <SuccessMSJ message={succes} />}
          {error && <AlertMSJ message={error} />}
          <form onSubmit={handleSubmit}>
            <label>Email</label>
            <input type="email" autoFocus required ref={emailRef} />
            <div className="btnContainer">
              <button type="submit" disabled={loading}>
                Restaurar password
              </button>
              <p>
                <Link to="/home">
                  <span>Regresear</span>
                </Link>
              </p>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default RestorePassowrd;
