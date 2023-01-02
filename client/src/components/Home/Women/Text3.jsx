import React from "react";
import { Link } from "react-router-dom";
import "../../../styles/homeWomenText3.css";

const Text3 = () => {
  return (
    <div className="HWT3-container d-flex justify justify-content-center align-items-center">
      <div className="HWT3 d-flex flex-column justify-content-center align-items-center mt-2 mb-3">
        <p>Join our Club</p>
        <Link to="/register">
          <button className="HWT3-button"> Register Now</button>
        </Link>
      </div>
    </div>
  );
};

export default Text3;
