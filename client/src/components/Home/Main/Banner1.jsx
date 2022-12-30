import React from "react";

import img from "../../../utils/images/main/recortado.png"

const Banner = () => {
  return (
    <div className="mb1-container">
      <div className="mb1">
        <button className="mb1-btn">
          MORE INFO
        </button>
        <div className="mb1-text">
          <h1 className="mb1-new">new</h1>
          <h1 className="mb1-brand">Nike</h1>
          <h1 className="mb1-brand1">Air Force 1</h1>
          <h1 className="mb1-brand2">'07 LV8 Overbranding'</h1>
          <h3 className="mb1-price">USD$33</h3>
        </div>
        <div className="mb1-image">
          <img
            className="mb1-img"
            src={img}
          />
          <img
            className="mb1-img2"
            src={img}
          />
        </div>
      </div>
    </div>
  );
};

export default Banner