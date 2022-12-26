import React from "react";
import { useSelector } from "react-redux";
import Carousel from "react-bootstrap/Carousel";
import "../../styles/Carrousel.css";

const Carrousel = () => {
  const { products } = useSelector((state) => state.products);
  function getRandomInt(max) {
    console.log(Math.floor(Math.random() * max));
    console.log(products.length);
    return Math.floor(Math.random() * max);
  }
  return (
    <div>
      {products.length ? (
        <Carousel className="carrousel">
          <Carousel.Item>
            <div className="container">
              <img
                src={products[getRandomInt(products.length)].card_picture}
                alt="First slide"
              />
              <Carousel.Caption className="content">
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="container">
              <img
                src={products[getRandomInt(products.length)].card_picture}
                alt="Second slide"
              />
              <Carousel.Caption className="content">
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="container">
              <img
                src={products[getRandomInt(products.length)].card_picture}
                alt="Third slide"
              />
              <Carousel.Caption className="content">
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </div>
          </Carousel.Item>
        </Carousel>
      ) : null}
    </div>
  );
};

export default Carrousel;
