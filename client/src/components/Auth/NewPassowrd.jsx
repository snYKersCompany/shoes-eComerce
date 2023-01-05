import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useAuth } from "../../context/authContext";
import { putUserInformation } from "../../redux/features/users/usersActions";
import AlertMSJ from "./AlertMSJ";
import SuccessMSJ from "./SuccessMSJ";
import NavBar from "../NavBar2.0/NavBar2.0";

const NewPassword = () => {
  const { user } = useAuth();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [succes, setSuccess] = useState("");
  const [newPassword, setNewPassword] = useState({
    password: "",
  });
  console.log(user);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError("");
      setSuccess("Password changed successfully");
      navigate("/");
      dispatch(
        putUserInformation(user.uid, { password: newPassword.password })
      );
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  };

  const handleChange = ({ target: { name, value } }) => {
    setNewPassword({ ...newPassword, [name]: value });
  };

  return (
    <div>
      <NavBar />
      <section className="newPassword">
        <div className="passwordContainer">
          <h1 className="text-white">Set new Password</h1>
          {succes && <SuccessMSJ message={succes} />}
          {error && <AlertMSJ message={error} />}
          <form onSubmit={(e) => handleSubmit(e)}>
            <label>Password</label>
            <input
              className="ph-center d-flex "
              onChange={(e) => handleChange(e)}
              name="password"
              type="password"
              placeholder="Enter password"
              autoFocus
              required
            />
            <div className="btnContainer">
              <button onClick={(e) => handleSubmit(e)}>Set new password</button>
            </div>
          </form>
          <Link to="/">
            <button>Back</button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default NewPassword;
