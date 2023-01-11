import React from "react";
import { Link } from "react-router-dom";

import img from "../../../utils/images/main/recortado.png";

const Banner = () => {
  return (
    <div className="mb1-container">
      <div className="mb1">
        <div className="mb1-text">
          <div className="d-flex align-items-center">
            <p className="mb1-new">new</p>
            <h3 className="mb1-brand">Nike</h3>
          </div>

          <p className="mb1-brand1">Air Force 1 '07 LV8 Overbranding'</p>
          <p className="mb1-price">USD$33</p>

          <Link to={`/home/63972933f60a0fb9ec9dfe5f`}>
            <button className="mb1-btn">MORE INFO</button>
          </Link>
        </div>

        <div className="mb1-image">
          <img className="mb1-img" src={img} alt={img} />
          <img className="mb1-img2" src={img} alt={img} />
        </div>
      </div>
    </div>
  );
};

export default Banner;
