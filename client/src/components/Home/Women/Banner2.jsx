import React from "react";
import { Link } from "react-router-dom";
import { JordanUCN } from "../../../utils/womens";
import "../../../styles/homeWomenBanner2.css";

const Banner2 = () => {
  return (
    <div className="ContainerHWB2 d-flex justify-content-center align-items-center">
      <div className="HWB2 d-flex justify-content-center align-items-center">
        <div className="HWB2-section1 d-flex flex-column me-5 align-items-center align-self-end text-center mb-5 HWB2-shadow">
          <p className="HWB2-name text-white">{JordanUCN.name}</p>
          <p className="HWB2-price text-yellow">${JordanUCN.price}</p>
          <Link to={`/home/${JordanUCN._id}`}>
            <button className="HWB2-button d-flex">
              <div className="box">M</div>
              <div className="box">O</div>
              <div className="box">R</div>
              <div className="box">E</div>
            </button>
          </Link>
        </div>

        <div className="HWB2-section2 d-flex ms-5"></div>
      </div>
    </div>
  );
};

export default Banner2;
