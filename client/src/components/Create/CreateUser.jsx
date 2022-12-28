import React, { useState } from "react";
import axios from "axios";
// import { useDispatch } from "react-redux";
import style from "../../styles/FormUser.css";

export default function FormUser() {
  // States
  const [input, setInput] = useState({});
  const [error, setError] = useState({});
  const [submit, setSubmit] = useState(false);

  // Dependencies
  //   const dispatch = useDispatch();
  const url = "http://localhost:3001/api/users";

  // Functions
  function validateInput(value, name) {
    const expressionName = /^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/;
    const expressionEmail = /\S+@\S+\.\S+/;

    switch (name) {
      case "name":
        return !value || !expressionName.test(value)
          ? setError({ ...error, name: "It must set a valid name" })
          : setError({ ...error, name: "" });
      case "email":
        return !value || !expressionEmail.test(value)
          ? setError({ ...error, email: "Set a valid email" })
          : setError({ ...error, email: "" });
      default:
        return null;
    }
  }
  function handleChange(event) {
    setInput({ ...input, [event.target.name]: event.target.value });
    validateInput(event.target.value, event.target.name);
  }
  function handleSubmit(event) {
    event.preventDefault();
    setSubmit(true);
    axios.post(url, input).then((response) => console.log(response.data));
    setInput({});
  }
  return (
    <div className="creation">
      <div>
        <form onSubmit={handleSubmit} className={style.form}>
          <label htmlFor="name">Name: </label>
          <input
            id="name"
            type="text"
            name="name"
            value={input.name}
            className={error.name && style.danger}
            onChange={handleChange}
          />
          {!error.name ? null : <p className={style.danger}>{error.name}</p>}

          <label htmlFor="email">Email: </label>
          <input
            id="email"
            type="text"
            name="email"
            value={input.email}
            className={error.email && style.danger}
            onChange={handleChange}
          />
          {!error.email ? null : <p className={style.danger}>{error.email}</p>}

          {/* Submit Button */}
          <button
            type="submit"
            value="CREATE"
            onClick={handleSubmit}
            className="button"
            disabled={error.name || !input.name || error.email || !input.email}
          >
            Send data
          </button>
          {submit && <h2 className={style.confirm}>Data successfully set!</h2>}
        </form>
      </div>
    </div>
  );
}
