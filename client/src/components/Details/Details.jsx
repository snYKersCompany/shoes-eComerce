import React from "react";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import "../../styles/details.css";

const Details = (
  id,
  brand,
  name,
  category,
  gender,
  color,
  detail_picture,
  colection,
  release_date,
  description,
  range,
  rating,
  price
) => {
  return (
    <div className="details d-flex flex-column">
      <div className="d-flex justify-content-center DetailsContainerGeneral">
        <section className="d-flex mt-5 section1 mb-5 DetailsContainerImg">
          <div className="div1 col-6 d-flex flex-column align-items-start text-start DetailsHeader">
            <h2 className="fs-1 title ms-3 brand">
              {brand}&nbsp;{name}
            </h2>
            <p className="fs-3 ms-3 text-black category">
              {category}&nbsp;{gender}
            </p>
            <p className="fs-3 ms-3 text-black">Color: {color}</p>
          </div>

          <div className="div2 col-6 d-flex flex-column align-items-end text-end">
            <Image className="image" src={detail_picture} alt={name} />
            <p className="fs-6 me-3 text-secondary">
              Colection <br />
              {colection}
            </p>
            <p className="released fs-4 me-3">Released {release_date}</p>
          </div>
        </section>
      </div>
      <section className="d-flex flex-column justify-content-center align-items-center text-center mb-2">
        <p className="fs-5 text-secondary">
          <em>{description}</em>
        </p>
        <p className="fw-bold fs-5">Range: {range}</p>
        <p className="fw-bold fs-5">Rating: {rating}</p>
      </section>

      <section className="d-flex mb-2 flex-row justify-content-center align-items-center">
        <p className="fw-bold d-flex align-items-center align-self-center mt-3 me-3 fs-5">
          Price: {price}
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
