import React from "react";
import { useSelector } from "react-redux";
//BS
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
//JSX
import Card from "../../CardsContainer/Card";
//styles
import "../../../styles/PreviewCarrousel.css";

const PreviewCarrousel = ({ productsSliced }) => {
  const { products } = useSelector((state) => state.products);
  const { userDashboard } = useSelector((state) => state.users);

  //function for img src
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  return (
    <div>
      {products.length ? (
        <div className="d-flex flex-wrap justify-content-center">
          <Carousel className="carrousel">
            <Carousel.Item>
              <Container>
                <Row>
                  <Col>
                    <div className="container">
                      <div className="d-flex flex-wrap justify-content-center">
                        {productsSliced?.map((product, i) => (
                          <Card
                            key={i}
                            _id={product._id}
                            name={product.name}
                            brand={product.brand}
                            card_picture={product.card_picture}
                            price={product.price}
                            rating={product.rating}
                            checkHeart={userDashboard.favourites?.some(
                              (idProduct) => idProduct === product._id
                            )}
                          />
                        ))}
                      </div>
                    </div>
                  </Col>
                  <Col>2 of 3</Col>
                  <Col>3 of 3</Col>
                </Row>
              </Container>
            </Carousel.Item>
            <Carousel.Item>
              <div className="container">
                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </Carousel.Caption>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="container">
                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                  </p>
                </Carousel.Caption>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
      ) : null}
    </div>
  );
};

export default PreviewCarrousel;
