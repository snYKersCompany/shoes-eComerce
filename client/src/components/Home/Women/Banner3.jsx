import React from "react";
import "../../../styles/homeWomenBanner3.css";

const Banner3 = () => {
  return (
    <div className="HWB3-container d-flex justify-content-center align-items-center mt-5 mb-5">
      <div className="HWB3 d-flex justify-content-center align-items-center">
        <div className="HWB3-section1 d-flex justify-content-center align-items-center ">
          <p className="HWB3-text1 text-white HWB3-stroke">Adidas</p>
        </div>

        <div className="HWB3-section2 d-flex flex-column justify-content-center align-items-center me-5">
          <iframe
            className="HWB3-iframe"
            width="550"
            height="400"
            src="https://www.youtube.com/embed/Wc4bTP8S4WE"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
          <button className="HWB3-button mt-5"> Buy Now </button>
        </div>

        <div className="HWB3-section3 d-flex justify-content-center align-items-center ms-5">
          <p className="HWB3-text2 text-white HWB3-stroke">
            Yezzy Boost V2 GLOW
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner3;
