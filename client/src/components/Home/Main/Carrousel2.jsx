import React from "react";
import Carousel from "react-bootstrap/Carousel";
import imgNike1 from "../../../utils/images/main/nike1.jpg";
import imgNike2 from "../../../utils/images/main/nike2.jpg";
import imgNike3 from "../../../utils/images/main/nike3.jpg";
import imgNike4 from "../../../utils/images/main/nike4.jpg";
import imgNike5 from "../../../utils/images/main/nike5.jpg";
import imgAdidas1 from "../../../utils/images/main/adidas1.jpg";
import imgAdidas2 from "../../../utils/images/main/adidas2.jpg";
import imgAdidas3 from "../../../utils/images/main/adidas3.jpg";
import imgAdidas4 from "../../../utils/images/main/adidas4.jpg";
import imgAdidas5 from "../../../utils/images/main/adidas5.jpg";
import imgConverse1 from "../../../utils/images/main/converse1.jpg";
import imgConverse2 from "../../../utils/images/main/converse2.jpg";
import imgConverse3 from "../../../utils/images/main/converse3.jpg";
import imgConverse4 from "../../../utils/images/main/converse4.jpg";
import imgConverse5 from "../../../utils/images/main/converse5.jpg";
import "../../../styles/carrouselTwo.css";
const CarrouselTwo = () => {
  return (
    <>
      <h1
        className="carr-txt2"
        style={{
          color: "#fb7849",
        }}
      >
        Our brands
      </h1>
      <div>
        <Carousel
          className="carr-two"
          style={{
            clipPath: "polygon(100% 13%, 100% 100%, 0 100%, 0 0, 90% 0)",
          }}
        >
          <Carousel.Item>
            <div className="cont-two">
              <img className="carr-imgTwo" src={imgNike1} alt="First slide" />
              <img className="carr-imgTwo" src={imgNike2} alt="First slide" />
              <img className="carr-imgTwo" src={imgNike3} alt="First slide" />
              <img className="carr-imgTwo" src={imgNike4} alt="First slide" />
              <img className="carr-imgTwo" src={imgNike5} alt="First slide" />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="cont-two">
              <img
                className="carr-imgTwo"
                src={imgAdidas1}
                alt="Second slide"
              />
              <img
                className="carr-imgTwo"
                src={imgAdidas2}
                alt="Second slide"
              />
              <img
                className="carr-imgTwo"
                src={imgAdidas3}
                alt="Second slide"
              />
              <img
                className="carr-imgTwo"
                src={imgAdidas4}
                alt="Second slide"
              />
              <img
                className="carr-imgTwo"
                src={imgAdidas5}
                alt="Second slide"
              />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="cont-two">
              <img
                className="carr-imgTwo"
                src={imgConverse1}
                alt="Third slide"
              />
              <img
                className="carr-imgTwo"
                src={imgConverse2}
                alt="Third slide"
              />
              <img
                className="carr-imgTwo"
                src={imgConverse3}
                alt="Third slide"
              />
              <img
                className="carr-imgTwo"
                src={imgConverse4}
                alt="Third slide"
              />
              <img
                className="carr-imgTwo"
                src={imgConverse5}
                alt="Third slide"
              />
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
};

export default CarrouselTwo;
