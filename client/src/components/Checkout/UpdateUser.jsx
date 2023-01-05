import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useAuth } from "../../context/authContext";
import { useNavigate } from "react-router-dom";
import { getUserDashboards } from "../../redux/features/users/usersActions";
import "../../styles/FormUser.css";

export default function FormUserUpdate() {
  const { user } = useAuth();
  const { _id } = useParams();
  const { userDashboard } = useSelector((state) => state.users);

  console.log(userDashboard)

  // States
  const [input, setInput] = useState({
    username: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    country: "",
    image: "",
  });
  const [error, setError] = useState({});
  const [submit, setSubmit] = useState(false);

  // Hooks
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Variables
  const CLOUD_NAME = process.env.REACT_APP_CLOUD_NAME; // eslint-disable-line
  const UPLOAD_PRESET = process.env.REACT_APP_UPLOAD_PRESET; // eslint-disable-line

  // Functions
  useEffect(() => {
    dispatch(getUserDashboards(userDashboard._id));
    if (submit === true) {
      setTimeout(() => {
        setSubmit(false);
        document.getElementById("Form").reset();
      }, 5000);
    }
  }, [submit, user, _id, dispatch, userDashboard._id]);

  function validateInput(value, name) {

    switch (name) {
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
          ? setError({ ...error, city: "Please, provide a name of city" })
          : setError({ ...error, city: "" });
      case "state":
        return !value
          ? setError({ ...error, state: "Please, provide a name of State" })
          : setError({ ...error, state: "" });
      case "country":
        return !value
          ? setError({ ...error, country: "Please, provide a name of country" })
          : setError({ ...error, country: "" });
      default:
        return;
    }
  }

  function handleChange(event) {
    setInput({ ...input, [event.target.name]: event.target.value });
    validateInput(event.target.value, event.target.name);
  }

  async function handleSubmit(event) {
    if (user) {
      event.preventDefault();
      await axios.put(
        `users/update/${user.uid}`,
        input
      );
      setSubmit(true);
      setInput({
        phone: "",
        address: "",
        city: "",
        state: "",
        country: "",
        image: "",
      });
      navigate("/cart");

    } else {
      navigate("/login");
    }
  }

  return (
    <div className="Update-container">
      <div className="Update-background">
        <img
          src="https://wallpaper.dog/large/645620.jpg"
          alt="background"
          height="300px"
          width="100vw"
        />
      </div>
      <div className="Update-avatar">
        <img
          className="Update-avatar-image"
          src="https://cdn-icons-png.flaticon.com/512/25/25634.png"
          alt="namaeasd"
          height="170px"
        />
      </div>
      <div className="Update-name">
        <h3 className="text-white">Jon Mircha</h3>
      </div>

      <form onSubmit={handleSubmit} className="Update-form" id="Form">
        <label htmlFor="email">Email: </label>
        {user ? (

          <label className="label-onlyread">{user.email}</label>
        ) : null}

        <label htmlFor="username">Username: </label>
        {userDashboard ? (
          
          <label className="label-onlyread">{user?.username }</label>

        ) : null}

        <label htmlFor="image">Image: </label>
        <input
          placeholder={"upload a image"}
          id="update-image"
          type="file"
          name="image"
          value={input.image}
          className="update-image"
          onChange={handleChange}
        />

        <label htmlFor="phone">Phone: </label>
        <input
          placeholder={
            userDashboard.phone
              ? userDashboard.phone
              : "You must complete this field"
          }
          id="phone"
          type="text"
          name="phone"
          value={input.phone}
          className={error.phone && "danger-input"}
          onChange={handleChange}
        />
        {!error.phone ? null : <p className="danger">{error.phone}</p>}

        <label htmlFor="address">Address: </label>
        <input
          placeholder={
            userDashboard.address
              ? userDashboard.address
              : "You must complete this field"
          }
          id="address"
          type="text"
          name="address"
          value={input.address}
          className={error.address && "danger-input"}
          onChange={handleChange}
        />
        {!error.address ? null : <p className="danger">{error.address}</p>}

        <label htmlFor="city">City: </label>
        <input
          placeholder={
            userDashboard.city
              ? userDashboard.city
              : "You must complete this field"
          }
          id="city"
          type="text"
          name="city"
          value={input.city}
          className={error.city && "danger-input"}
          onChange={handleChange}
        />
        {!error.city ? null : <p className="danger">{error.city}</p>}

        <label htmlFor="state">State: </label>
        <input
          placeholder={
            userDashboard.state
              ? userDashboard.state
              : "You must complete this field"
          }
          id="state"
          type="text"
          name="state"
          value={input.state}
          className={error.state && "danger-input"}
          onChange={handleChange}
        />
        {!error.state ? null : <p className="danger">{error.state}</p>}

        <label htmlFor="country">Country: </label>
        <input
          placeholder={
            userDashboard.country
              ? userDashboard.country
              : "You must complete this field"
          }
          id="country"
          type="text"
          name="country"
          value={input.country}
          className={error.country && "danger-input"}
          onChange={handleChange}
        />
        {!error.country ? null : <p className="danger">{error.country}</p>}

        {/* Submit Button */}
        <button
          type="submit"
          value="CREATE"
          onClick={handleSubmit}
          className="Update-button"
          disabled={
            error.phone ||
            !input.phone ||
            error.address ||
            !input.address ||
            error.city ||
            !input.city ||
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
  );
}
