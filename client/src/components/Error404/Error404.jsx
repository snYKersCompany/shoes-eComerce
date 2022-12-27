import React from "react";
import { Link } from "react-router-dom";
import "../../styles/error.css";

const Error404 = () => {
  return (
    <div className="error d-flex flex-column justify-content-center align-items-center">
      <div className="divError d-flex flex-column justify-content-center align-items-center">
        <h3 className="text-gold">Ooopps page not found!!</h3>
        <Link to="/home" className="d-flex text-decoration-none">
          <button className="btn-404">Go Back</button>
        </Link>
      </div>
    </div>
  );
};

export default Error404;
