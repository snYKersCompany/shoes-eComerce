import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductsDetails } from "../../redux/features/products/productsActions";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import ListGroup from "react-bootstrap/ListGroup";
import { BsFillStarFill } from "react-icons/bs";
import "../../styles/details.css";
//JSX
import NavBar from "../NavBar/Navbar";

const Details = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { productDetail } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProductsDetails(id));
  }, [dispatch, id]);

  console.log(productDetail);
  return (
    <>
      <NavBar />
      <div className="details d-flex flex-column">
        <div className="d-flex justify-content-center DetailsContainerGeneral">
          <section className="d-flex mt-5 section1 mb-5 DetailsContainerImg">
            <div className="div1 col-6 d-flex flex-column align-items-start text-start DetailsHeader">
              <h2 className="fs-1 title ms-3 brand">
                {productDetail.brand}&nbsp;{productDetail.name}
              </h2>
              <p className="fs-3 ms-3 mb-1 cat text-black category fw-bold">
                {productDetail.gender} <br />
                {productDetail.category}
              </p>
              <p className="fs-3 ms-3 text-secondary">
                Color: {productDetail.color}
              </p>
            </div>

            <div className="div2 col-6 d-flex flex-column align-items-end text-end">
              <Image
                className="image"
                src={productDetail.detail_picture}
                alt={productDetail.name}
              />
              <p className="fs-6 me-3 text-secondary">
                Colection <br />
                {productDetail.collection}
              </p>
              <p className="released fs-4 me-3">
                Released {productDetail.release_date}
              </p>
            </div>
          </section>
        </div>
        <section className="d-flex flex-column justify-content-center align-items-center text-center mb-2">
          <em className="fs-5 text-secondary">
            <div
              dangerouslySetInnerHTML={{ __html: productDetail.description }}
            />
          </em>

          <p className="fw-bold fs-5">Ranges:</p>
          {/* productDetail.ranges */}
          <ListGroup horizontal className="horizontalWrapper">
            {productDetail.range?.map((r) => (
              <ListGroup.Item className="horizontalItem" key={r}>
                {r}
              </ListGroup.Item>
            ))}
          </ListGroup>

          <p className="fw-bold fs-5">
            Rating: <br />
            {[...Array(productDetail.rating)].map((i, index) => (
              <BsFillStarFill key={index} className="star" />
            ))}
          </p>
        </section>

        <section className="d-flex mb-2 flex-row justify-content-center align-items-center">
          <p className="fw-bold d-flex align-items-center align-self-center mt-3 me-3 fs-5">
            Price: ${productDetail.price}
          </p>
          <Button
            variant="custom"
            className="d-flex fw-bold align-items-center custom fs-5"
          >
            Buy Now!!
          </Button>
        </section>
      </div>
    </>
  );
};

export default Details;
