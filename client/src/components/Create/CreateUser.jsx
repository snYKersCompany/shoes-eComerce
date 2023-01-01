import Axios from "axios";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import "../../styles/FormUser.css";

export default function FormUser() {    
  // States
  const [input, setInput] = useState({
    email: "",
    username: "",
    password: "",
    name: "",
    phone: "",
    address: "",
    city: "",
    cp: "",
    state: "",
    country: "",
    image: ""    
  });
  const [error, setError] = useState({});
  const [submit, setSubmit] = useState(false);
  const [file, setFile] = useState(null);

  // Hooks
  const dispatch = useDispatch();
  const navigate = useNavigate();  
  const { signUp } = useAuth();

  // Variables
  const CLOUD_NAME = process.env.REACT_APP_CLOUD_NAME;
  const UPLOAD_PRESET = process.env.REACT_APP_UPLOAD_PRESET;

  // Functions
  useEffect(() => {    
    if (submit === true) {
      setTimeout(() => {
        document.getElementById("Form").reset();
        // navigate("/");
      }, 5000);
    }
  }, [submit]);

  function validateInput(value, name) {
    const expression = /^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/;
    const expressionEmail = /\S+@\S+\.\S+/;
    const expressionPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    switch (name) {
      case "email":
        return !value || !expressionEmail.test(value)
        ? setError({ ...error, email: "It must set a valid email" })
        : setError({ ...error, email: "" })
      case "username":
        return !value
        ? setError({ ...error, username: "Please, provide a username" })
        : setError({ ...error, username: "" })
      case "password":
        return !value || !expressionPassword.test(value)
        ? setError({ ...error, password: "Set a valid password, it must a least 8 characters, 1 letter and 1 number" })
        : setError({ ...error, password: "" })
      case "name":
        return !value || !expression.test(value)
          ? setError({ ...error, name: "It must set a valid name" })
          : setError({ ...error, name: "" });
      case "phone":
        return !value
          ? setError({ ...error, phone: "Please, provide a phone number" })
          : setError({ ...error, phone: "" });
      case "address":
        return !value
          ? setError({ ...error, address: "Please, provide an address" })
          : setError({ ...error, address: "" });
      case "city":
        return !value
          ? setError({ ...error, city: "Please provide a name of city" })
          : setError({ ...error, city: "" });
      case "cp":
        return isNaN(parseInt(value))
          ? setError({ ...error, cp: "Please, provide a valid number of cp" })
          : setError({ ...error, cp: "" });
      case "state":
        return !value
          ? setError({ ...error, state: "Please provide a name of State" })
          : setError({ ...error, state: "" });
      case "country":
        return !value
          ? setError({ ...error, country: "Please, provide a name of country" })
          : setError({ ...error, country: "" });
      default:
        setError({});
    }
  }

  async function handleImage (event) {
    setFile(event.target.files[0]);
    const data = new FormData();
    data.append("file", event.target.files[0]);
    data.append("upload_preset", UPLOAD_PRESET);
    const response = await fetch(`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload/`, 
        { method: "POST", body: data });
    const info = await response.json();        
    setInput({ ...input, [event.target.name]: info.url });    
}

  function handleChange(event) {    
    setInput({ ...input, [event.target.name]: event.target.value });
    validateInput(event.target.value, event.target.name);
  }

  async function handleSubmit(event) {
    event.preventDefault();    
    let data = await signUp(input.email, input.password);
    const uid = data.user.uid;    
    const user = { ...input, uid };
    const response = await Axios.post(`http://localhost:3001/api/users`, user);    
    setSubmit(true);
    setInput({
      email: "",
      username: "",
      password: "",
      name: "",
      phone: "",
      address: "",
      city: "",
      cp: "",
      state: "",
      country: "",
      image: "",
    });
    setFile(null);
    console.log("Response: ", response.data);
  }

  return (
    <div className="container">
      <div className="group">
        <form onSubmit={handleSubmit} className="form" id="Form">
          <label htmlFor="email">Email: </label>
          <input              
              id="email"
              type="text"
              name="email"
              value={input.email}
              className={error.email && "danger"}
              onChange={handleChange}              
            />
          {!error.email ? null : <p className = "danger">{error.email}</p>}

          <label htmlFor="username">Username: </label>
          <input
            id="username"
            type="text"
            name="username"
            value={input.username}
            className={error.username && "danger"}
            onChange={handleChange}
          />
          {!error.username ? null : <p className="danger">{error.username}</p>}

          <label htmlFor="password">Password: </label>
          <input              
              id="password"
              type="password"
              name="password"
              value={input.password}
              className={error.password && "danger"}
              onChange={handleChange}              
            />
          {!error.password ? null : <p className = "danger">{error.password}</p>}

          <label htmlFor="name">Name: </label>
          <input
            id="name"
            type="text"
            name="name"
            value={input.name}
            className={error.name && "danger"}
            onChange={handleChange}
          />
          {!error.name ? null : <p className="danger">{error.name}</p>}

          <label htmlFor="phone">Phone: </label>
          <input
            id="phone"
            type="text"
            name="phone"
            value={input.phone}
            className={error.phone && "danger"}
            onChange={handleChange}
          />
          {!error.phone ? null : <p className="danger">{error.phone}</p>}

          <label htmlFor="address">Address: </label>
          <input
            id="address"
            type="text"
            name="address"
            value={input.address}
            className={error.address && "danger"}
            onChange={handleChange}
          />
          {!error.address ? null : <p className="danger">{error.address}</p>}

          <label htmlFor="city">City: </label>
          <input
            id="city"
            type="text"
            name="city"
            value={input.city}
            className={error.city && "danger"}
            onChange={handleChange}
          />
          {!error.city ? null : <p className="danger">{error.city}</p>}

          <label htmlFor="cp">CP: </label>
          <input
            id="cp"
            type="text"
            name="cp"
            value={input.cp}
            className={error.cp && "danger"}
            onChange={handleChange}
          />
          {!error.cp ? null : <p className="danger">{error.cp}</p>}

          <label htmlFor="state">State: </label>
          <input
            id="state"
            type="text"
            name="state"
            value={input.state}
            className={error.state && "danger"}
            onChange={handleChange}
          />
          {!error.state ? null : <p className="danger">{error.state}</p>}

          <label htmlFor="country">Country: </label>
          <input
            id="country"
            type="text"
            name="country"
            value={input.country}
            className={error.country && "danger"}
            onChange={handleChange}
          />
          {!error.country ? null : <p className="danger">{error.country}</p>}

          <input type="file" onChange={handleImage} name="image"/>
          {file ? (
            <img alt="Preview" height="60" src={URL.createObjectURL(file)} />
          ) : null}

          {/* Submit Button */}
          <button
            type="submit"
            value="CREATE"
            onClick={handleSubmit}
            className="button"
            disabled={
              error.email ||
              !input.email ||
              error.username ||
              !input.username ||
              error.password ||
              !input.password ||
              error.name ||
              !input.name ||
              error.phone ||
              !input.phone ||
              error.address ||
              !input.address ||
              error.city ||
              !input.city ||
              error.cp ||
              !input.cp ||
              error.state ||
              !input.state ||
              error.country ||
              !input.country
            }
          >
            Send data
          </button>
          {submit && <h2 className="confirm">Data successfully set!</h2>}
        </form>
      </div>
    </div>
  );
}