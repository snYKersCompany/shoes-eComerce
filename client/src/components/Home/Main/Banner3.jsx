import React from "react";
import {Link} from "react-router-dom"

const BannerThree = () => {
  return (
    <div className="mb3-container">
    <div className="mb3">
      <div className="mb3-text">
      <p>Adidas</p>
      <p>Yeezy Boost Wave Runner</p>
      </div>
         <div >
      <Link to={`/home/63b2df4c46a59de39735142a`}>
      <button className="mb3-btn" >MORE INFO</button>
      </Link>
      </div>
      </div>
    </div>
  );
};

export default BannerThree;