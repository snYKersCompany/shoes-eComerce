import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductsDetails } from "../../redux/features/products/productsActions";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import "../../styles/details.css";

const Details = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { productDetail } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProductsDetails(id));
  }, [dispatch, id]);

  return (
    <div className="details d-flex flex-column">
      <div className="d-flex justify-content-center DetailsContainerGeneral">
        <section className="d-flex mt-5 section1 mb-5 DetailsContainerImg">
          <div className="div1 col-6 d-flex flex-column align-items-start text-start DetailsHeader">
            <h2 className="fs-1 title ms-3 brand">
              {productDetail.brand}&nbsp;{productDetail.name}
            </h2>
            <p className="fs-3 ms-3 text-black category">
              {productDetail.category}&nbsp;{productDetail.gender}
            </p>
            <p className="fs-3 ms-3 text-black">Color: {productDetail.color}</p>
          </div>

          <div className="div2 col-6 d-flex flex-column align-items-end text-end">
            <Image
              className="image"
              src={productDetail.detail_picture}
              alt={productDetail.name}
            />
            <p className="fs-6 me-3 text-secondary">
              Colection <br />
              {productDetail.colection}
            </p>
            <p className="released fs-4 me-3">
              Released {productDetail.release_date}
            </p>
          </div>
        </section>
      </div>
      <section className="d-flex flex-column justify-content-center align-items-center text-center mb-2">
        <p className="fs-5 text-secondary">
          <em>
            <div
              dangerouslySetInnerHTML={{ __html: productDetail.description }}
            />
          </em>
        </p>
        <p className="fw-bold fs-5">Range: {productDetail.range}</p>
        <p className="fw-bold fs-5">Rating: {productDetail.rating}</p>
      </section>

      <section className="d-flex mb-2 flex-row justify-content-center align-items-center">
        <p className="fw-bold d-flex align-items-center align-self-center mt-3 me-3 fs-5">
          Price: {productDetail.price}
        </p>
        <Button
          variant="custom"
          className="d-flex fw-bold align-items-center custom fs-5"
        >
          Buy Now!!
        </Button>
      </section>
    </div>
  );
};

export default Details;
