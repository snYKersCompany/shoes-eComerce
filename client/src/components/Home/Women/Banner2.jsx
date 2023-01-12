import React from "react";
import { Link } from "react-router-dom";
import { JordanUCN } from "../../../utils/womens";
import "../../../styles/homeWomenBanner2.css";

const Banner2 = () => {
  return (
    <div className="WBanner2-container">
      <div className="WBanner2-section1  WBanner2-shadow">
        <p className="WBanner2-name text-white">{JordanUCN.name}</p>
        <p className="WBanner2-price text-yellow">${JordanUCN.price}</p>
        <Link to={`/home/${JordanUCN._id}`}>
          <button className="WBanner2-button d-flex">
            <div className="box">M</div>
            <div className="box">O</div>
            <div className="box">R</div>
            <div className="box">E</div>
          </button>
        </Link>
      </div>
      <div className="WBanner2-section2"></div>
    </div>
  );
};

export default Banner2;
