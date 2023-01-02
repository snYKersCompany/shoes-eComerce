import React from "react";
import { Link } from "react-router-dom";



const BannerTwo = () => {
  return (
    <div className="mb2-container">
      <div className="mb2-text">
        <h1 className="reg-text">
          Register now to be aware of the offers we have for you
        </h1>
      </div>
      <div className="mb2-btn">
        <Link className="mb2-btn" to={`/register`}>
        <button className="register-btn">REGISTER NOW!</button>
        </Link>
      </div>
    </div>
  );
};

export default BannerTwo;