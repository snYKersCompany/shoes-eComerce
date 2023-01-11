import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
//JSX
import NavBar from "../NavBar2.0/NavBar2.0";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import Preview from "../Paypal/Preview/Preview";
import Reviews from "../Reviews/Reviews";
//BS
import { BsFillStarFill } from "react-icons/bs";
import { TbStarOff } from "react-icons/tb";
//actions
import { getProductsDetails } from "../../redux/features/products/productsActions";
//styles
import "../../styles/details.css";
import { useNavigate } from "react-router-dom";

import { getReviewProduct } from "../../redux/features/reviews/reviewsActions";

const Details = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const { productDetail } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProductsDetails(id));
    dispatch(getReviewProduct(id));
  }, [dispatch, id]);

  //local Storage

  const [size, setSize] = useState("");
  const [stock, setStock] = useState("");

  const handleSize = (size, stock) => {
    setSize(size);
    let aux = [];
    stock > 100 ? (stock = 100) : (stock = Number(stock));
    for (let i = 1; i !== stock; i++) {
      aux.push(i);
    }
    setStock(aux);
  };

  const [count, setCount] = useState(false);
  const [repeated, setRepeated] = useState("false");

  let productsCart = localStorage.getItem("carrito");

  const [products, setProducts] = useState(
    productsCart?.length > 1 ? JSON.parse(productsCart) : []
  );
  useEffect(() => {}, [products, repeated]);

  function setProduct() {
    if (localStorage.getItem("carrito")?.length > 1) {
      let cart = {
        id: productDetail._id,
        name: productDetail.name,
        description: productDetail.description,
        img: productDetail.detail_picture,
        size,
        idAux: productDetail._id + size,
        price: productDetail.price,
        count,
        totalPrice: productDetail.price * count,
      };

      if (products.findIndex((el) => el.idAux === cart.idAux) === 0) {
        setRepeated("true");
      } else {
        setRepeated("false");
        localStorage.setItem(
          "carrito",
          JSON.stringify(
            JSON.parse(localStorage.getItem("carrito")).concat([cart])
          )
        );
      }
    } else {
      let cart = {
        id: productDetail._id,
        name: productDetail.name,
        description: productDetail.description,
        img: productDetail.detail_picture,
        size,
        idAux: productDetail._id + size,
        price: productDetail.price,
        count,
        totalPrice: productDetail.price * count,
      };
      setRepeated("false");
      localStorage.setItem("carrito", JSON.stringify([cart]));
    }
  }

  //Fin local Storage
  return (
    <div className="gridGeneralDetails">

      <div className="containerNavDetails">
        <NavBar />
        <ScrollToTop />
      </div>
      
      <div className="detailsContainerCard">
        <div className="d-flex DetailsContainerGeneral">
          <section className="d-flex  section1 DetailsContainerCard">
            <div className="">
              <h2 className="">
                {productDetail.brand}&nbsp;{productDetail.name}
              </h2>
              <p className="">
                {productDetail.gender} <br />
                {productDetail.category}
              </p>
              <p className="">
                Color: {productDetail.color}
              </p>
            </div>

            <div className="">
              <img
                className="image"
                src={productDetail.detail_picture}
                alt={productDetail.name}
                width={"150px"}
              />
              <p className="text-secondary">
                Collection <br />
                {productDetail.collection}
              </p>
              <p className="released  ">
                Released {productDetail.release_date}
              </p>
            </div>
          </section>
        </div>
      </div>

      <div className="detailsContainerInfo">
        <div >
          <span className="subtittleDescriptionDetails">Description</span>
          <em className="">
            <div className="ContentDescriptionDetails">
              <div
                dangerouslySetInnerHTML={{ __html: productDetail.description }}
              />
            </div>
          </em>

          <span className="subtittleDescriptionDetails">Sizes:</span>
          {/* productDetail.ranges */}
          <div className="ContainerSizes">
            <div className="auxContainerSize">

            {productDetail.stock ? (
              Object.entries(productDetail.stock).map((r) =>
              r[1] !== 0 ? (
                <div
                onClick={() => handleSize(r[0], r[1])}
                key={r[0]}
                value={r[0]}
                style={{ order: r[0] * 2 }}
                className={`${
                  size === r[0]
                  ? "containerSize selectedSize"
                  : "containerSize"
                }`}
                > 
                      {r[0]}
                  </div>
                ) : (
                  <div
                  disabled
                  key={r[0]}
                  style={{ order: r[0] * 2 }}
                  className={`containerSize bg-warning"}`}
                  >
                    {r[0]}
                  </div>
                )
                )
                ) : (
                  <></>
                  )}
            </div>
          </div>


          {productDetail.rating === 0 ? (
            <h4 className="fw-bold fs-5">
              None Rating:
              <br />
              <TbStarOff />
            </h4>
          ) : (
          <span className="subtittleDescriptionDetails">
            Rating:
            <div className="StarContainerDetails">
              <div className="StarContainer">
              
              {[...Array(productDetail)].map((i, index) => (
                <BsFillStarFill key={index} className="star " />
                ))}

              </div>
            </div>
          </span>
          )}
        </div>
        <div className="d-flex justify-content-center">
          <label>Count: </label>
          <select
            defaultValue={"null"}
            onChange={(e) => setCount(Number(e.target.value))}
          >
            <option hidden key={"null"}>
              select the units
            </option>
            {stock.length >= 1 &&
              stock.map((und) => (
                <option value={und} key={und}>
                  {und}
                </option>
              ))}
          </select>
        </div>

        {count !== false ? (
          <section className="d-flex ">
            <p className="d-flex ">
              Price: ${productDetail.price}
            </p>
            <Preview setProduct={setProduct} repeated={repeated} />
          </section>
        ) : (
          <></>
        )}
      </div>  
      
      <div className="reviewsContainerDetails">
        <Reviews productDetail={productDetail} id={id}/>
      </div>

      <div className="buttonBackDetails">
      <button className="d-flex mx-1" onClick={() => navigate("/")}>
        Return Home
      </button>
      </div>
    </div>
  );
};

export default Details;
