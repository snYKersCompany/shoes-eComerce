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
          <section className="DetailsContainerCard">
          <div className="DetailsContainerCard-2">
              <img
                className="image"
                src={productDetail.detail_picture}
                alt={productDetail.name}
              />
              {/* <p className="released  ">
                Released {productDetail.release_date}
              </p> */}
            </div>
            <div className="DetailsContainerCard-1">
              <h2 >
                <div className="DetailsContainerBrand" >
                {productDetail.brand}

                </div>
                <div className="DetailsContainerName">
                {productDetail.name}

                </div>
              </h2>
              <p className="DetailsContainerExtras">
                {productDetail.gender} <br />
                {productDetail.category}
              </p>
              <p>
                <span className="DetailsContainerColor">
                Color: {" "}
                </span>
                <span className="DetailsContainerColortxt">
                {productDetail.color}
                </span>
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
                {console.log(r[1])}
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

          <div className="d-flex justify-content-around ">
          <span className="subtittleDescriptionDetails">
            Price:
            <div className="PriceContainerDetails">
              <div className="text-white">
                <p className="mb-0">
              ${productDetail.price}

                </p>
              </div>
            </div>
          </span>
          {productDetail.rating !== 0 ? (
            <span className="subtittleDescriptionDetails">
            Rating:
            <div className="StarContainerDetails">
              <div className="StarContainer">
              
              <p className="none-rating-details mb-0 ">
              None: {" "}
              <TbStarOff />
            </p>  

              </div>
            </div>
          </span>

            
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

        <div className="CountDescriptionDetails">
          <span className="subtittleDescriptionDetails AddCartInfoDetailsCount">
            <div className="d-flex align-items-center">

            Count:
            <select
              defaultValue={"null"}
              onChange={(e) => setCount(Number(e.target.value))}
              className="SelectSizeDetails"
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
          </span>
          {count !== false ? (
            <div className="AddCartInfoDetails">
              
              <p className="subtittleDescriptionDetails me-3">
                <span className="me-1">Price: </span> <span className="text-white">${productDetail.price * count}</span>
              </p>

              <Preview setProduct={setProduct} repeated={repeated} />
            </div>
          ) : (
            <></>
          )}

        </div>


      </div>  
      </div>

      
      <div className="reviewsContainerDetails">
        <Reviews productDetail={productDetail} id={id}/>
      </div>

      {/* <div className="buttonBackDetails">
      <button className="d-flex mx-1" onClick={() => navigate("/")}>
        Return Home
      </button>
      </div> */}
    </div>
  );
};

export default Details;
