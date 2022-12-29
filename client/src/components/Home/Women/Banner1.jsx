import React from "react";
import "../../../styles/homeWomenBanner1.css";

const Banner1 = () => {
  return (
    <div className="ContainerHWB1 d-flex">
      <div className="HWB1 d-flex">
        <div className="HWB1-texts text-white d-flex flex-column justify-content-center align-items-center ms-5">
          <p className="HWB1-text1 d-flex align-self-start HWB1-stroke text-cyan">
            New Sneakers
          </p>
          <p className="HWB1-text2 HWB1-stroke2">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam
            nihil obcaecati voluptates nulla sed harum ipsa, itaque laudantium
            id fuga provident, qui cumque, eos dolor dolorem asperiores. Ipsum,
            obcaecati nemo?
          </p>
        </div>
        <div className="HWB1-images d-flex flex-column text-white">
          <p className="HWB1-title d-flex justify-content-center align-items-center HWB1-stroke">
            New Article
          </p>
          <div className="d-flex justify-content-center align-items-center hov">
            <img
              className="HWB1-image1"
              src="https://image.goat.com/375/attachments/product_template_pictures/images/020/249/043/original/494127_00.png.png"
              alt="nombre"
            />
            <img
              className="HWB1-image2"
              src="https://image.goat.com/375/attachments/product_template_pictures/images/020/249/043/original/494127_00.png.png"
              alt="nombre"
            />
          </div>
        </div>
        <div className="HWB1-ofert text-white d-flex flex-column justify-content-center align-items-center">
          <p className="HWB1-ofertText  HWB1-stroke">Only</p>
          <p className="HWB1-ofertPrice HWB1-stroke text-green">$79</p>
          <button className="fancy" href="#">
            <span className="top-key"></span>
            <span className="text">More Info</span>
            <span className="bottom-key-1"></span>
            <span className="bottom-key-2"></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner1;
