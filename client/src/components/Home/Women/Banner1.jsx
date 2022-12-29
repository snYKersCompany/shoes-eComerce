import React from "react";
import { Link } from "react-router-dom";
import "../../../styles/homeWomenBanner1.css";
import { Atmos } from "../../../utils/womens";

const Banner1 = () => {
  return (
    <div className="ContainerHWB1 d-flex">
      <div className="HWB1 d-flex">
        <div className="HWB1-texts text-white d-flex flex-column justify-content-center align-items-center ms-5">
          <p className="HWB1-text1 d-flex align-self-start HWB1-stroke text-cyan ms-2">
            By Hirofumi Kojima
          </p>
          <p className="HWB1-text2 HWB1-stroke2 fst-italic">
            {Atmos.description}
          </p>
        </div>
        <div className="HWB1-images d-flex flex-column text-white">
          <p className="HWB1-title d-flex justify-content-center align-items-center HWB1-stroke">
            {Atmos.name}
          </p>
          <div className="d-flex justify-content-center align-items-center hov">
            <img
              className="HWB1-image1"
              src={Atmos.card_picture}
              alt={Atmos.name}
            />
            <img
              className="HWB1-image2"
              src={Atmos.card_picture}
              alt={Atmos.name}
            />
          </div>
        </div>
        <div className="HWB1-ofert text-white d-flex flex-column justify-content-center align-items-center">
          <p className="HWB1-ofertText  HWB1-stroke">Only</p>
          <p className="HWB1-ofertPrice HWB1-stroke text-green">
            {Atmos.price}
          </p>
          <Link to={`/home/${Atmos._id}`}>
            <button className="fancy" href="#">
              <span className="top-key"></span>
              <span className="text">More Info</span>
              <span className="bottom-key-1"></span>
              <span className="bottom-key-2"></span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner1;
