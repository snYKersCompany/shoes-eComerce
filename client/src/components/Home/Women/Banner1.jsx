import React from "react";
import { Link } from "react-router-dom";
import { Atmos } from "../../../utils/womens";
import "../../../styles/homeWomenBanner1.css";

const Banner1 = () => {
  return (
    <div className="Women-b1-container">
      <div className="Women-b1-texts text-white">
        <p className="Women-b1-text1 Women-b1-stroke">By Hirofumi Kojima.</p>
        <p className="Women-b1-text2  fst-italic">{Atmos.description}</p>
      </div>

      <div className="Women-b1-images text-white">
        <p className="Women-b1-title Women-b1-stroke">{Atmos.name}</p>
        <img
          className="Women-b1-image1 hov"
          src={Atmos.card_picture}
          alt={Atmos.name}
        />
      </div>

      <div className="Women-b1-ofert text-white">
        <p className="Women-b1-ofertText HWB1-stroke">Only</p>
        <p className="Women-b1-ofertPrice HWB1-stroke">${Atmos.price}</p>
        <Link to={`/home/${Atmos._id}`} className="fancyLink">
          <button className="fancy" href="#">
            <span className="top-key"></span>
            <span className="text">More Info</span>
            <span className="bottom-key-1"></span>
            <span className="bottom-key-2"></span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Banner1;
