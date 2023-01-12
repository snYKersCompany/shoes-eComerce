import React from "react";
import { Link } from "react-router-dom";
import { YezzyGlow } from "../../../utils/womens";
import "../../../styles/homeWomenBanner3.css";

const Banner3 = () => {
  return (
    <div className="WBanner3-container">
      <div className="WBanner3-section1">
        <p className="WBanner3-text1 text-white WBanner3-stroke">
          {YezzyGlow.brand}
        </p>
      </div>

      <div className="WBanner3-section2">
        <iframe
          className="WBanner3-iframe"
          src="https://www.youtube.com/embed/Wc4bTP8S4WE"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
        <Link to={`/home/${YezzyGlow._id}`}>
          <button className="WBanner3-button mt-3"> More Info </button>
        </Link>
      </div>

      <div className="WBanner3-section3">
        <p className="WBanner3-text2 text-white WBanner3-stroke">
          {YezzyGlow.name}
        </p>
      </div>
    </div>
  );
};

export default Banner3;
