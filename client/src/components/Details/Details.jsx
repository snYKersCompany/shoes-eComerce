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
            {/* {brand}&nbsp;{name} */}
            <h2 className="fs-1 title ms-3 brand">Nike Air Max</h2>
            {/* {category}&nbsp;{gender} */}
            <p className="fs-3 ms-3 text-black category">Basket Men</p>
            {/* {color} */}
            <p className="fs-3 ms-3 text-black">Color Red</p>
          </div>

          <div className="div2 col-6 d-flex flex-column align-items-end text-end">
            {/* {detail_picture} */}
            <Image
              className="image"
              src="https://image.goat.com/750/attachments/product_template_pictures/images/018/898/008/original/482531_00.png.png"
              alt="nike"
              />
            {/* {colection} */}
            <p className="fs-6 me-3 text-secondary">
              Colection <br />
              air jordan 1 - air jordan 1 - air jordan 1 - air jordan 1
            </p>
            {/* release_date */}
            <p className="released fs-4 me-3">Released 21/02/21</p>
          </div>
      </section>

      </div>
      <section className="d-flex flex-column justify-content-center align-items-center text-center mb-2">
        {/* {description} */}
        <p className="fs-5 text-secondary">
          <em>
            This Nike Air Jordan 1 Retro High OG &#39;Shadow&#39; 2018 is a
            retro re-release of an original 1985 colorway. The shoe features a
            black and medium grey leather upper with a white midsole and black
            outsole. It also features OG Nike Air branding on the tongue and the
            Wings logo on the ankle collar. It was last retroed in 2013, and a
            low-top version dropped in 2015.
          </em>
        </p>
        {/* {range} */}
        <p className="fw-bold fs-5">Range: 14.5</p>
        {/* {rating} */}
        <p className="fw-bold fs-5">Rating: 5</p>
        {/* {price} */}
      </section>

      <section className="d-flex mb-2 flex-row justify-content-center align-items-center">
        <p className="fw-bold d-flex align-items-center align-self-center mt-3 me-3 fs-5">
          Price: $1500
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
