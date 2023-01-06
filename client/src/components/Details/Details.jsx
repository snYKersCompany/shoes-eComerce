import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
//JSX
import NavBar from "../NavBar2.0/NavBar2.0";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import Preview from "../Paypal/Preview/Preview";
import Reviews from "../Reviews/Reviews";
//BS
import Image from "react-bootstrap/Image";
import ListGroup from "react-bootstrap/ListGroup";
import { BsFillStarFill } from "react-icons/bs";
import { TbStarOff } from "react-icons/tb";
//actions
import { getProductsDetails } from "../../redux/features/products/productsActions";
//styles
import "../../styles/details.css";

const Details = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { productDetail } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProductsDetails(id));
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
        alert(`The product ${productDetail.name} is already in the cart`);
      } else {
        setRepeated("false");
        localStorage.setItem(
          "carrito",
          JSON.stringify(
            JSON.parse(localStorage.getItem("carrito")).concat([cart])
          )
        );
        alert(`The product ${productDetail.name} was successfully added`);
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
      alert(`The product ${productDetail.name} was successfully added`);
    }
  }

  //Fin local Storage
  return (
    <>
      <NavBar />
      <ScrollToTop />
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
                Collection <br />
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
          <ListGroup horizontal className={`horizontalWrapper`}>
            {productDetail.stock ? (
              Object.entries(productDetail.stock).map((r) =>
                r[1] !== 0 ? (
                  <ListGroup.Item
                    onClick={() => handleSize(r[0], r[1])}
                    key={r[0]}
                    value={r[0]}
                    style={{ order: r[0] * 2 }}
                    className={`${
                      size === r[0]
                        ? "horizontalItem bg-warning"
                        : "horizontalItem"
                    }`}
                  >
                    {r[0]}
                  </ListGroup.Item>
                ) : (
                  <ListGroup.Item
                    disabled
                    key={r[0]}
                    style={{ order: r[0] * 2 }}
                    className={`horizontalItem bg-warning"}`}
                  >
                    {r[0]}
                  </ListGroup.Item>
                )
              )
            ) : (
              <></>
            )}
          </ListGroup>

          {productDetail.rating === 0 ? (
            <h1 className="fw-bold fs-5">
              None Rating:
              <br />
              <TbStarOff />
            </h1>
          ) : (
            <p className="fw-bold fs-5">
              Rating: <br />
              {[...Array(productDetail.rating)].map((i, index) => (
                <BsFillStarFill key={index} className="star " />
              ))}
            </p>
          )}
        </section>
        <section className="d-flex justify-content-center m-3">
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
        </section>

        {count !== false ? (
          <section className="d-flex mb-2 flex-row justify-content-center align-items-center">
            <p className="fw-bold d-flex align-items-center align-self-center mt-3 me-3 fs-5">
              Price: ${productDetail.price}
            </p>
            <Preview setProduct={setProduct} repeated={repeated} />
          </section>
        ) : (
          <></>
        )}
      </div>
      <Reviews productDetail={productDetail}/>
    </>
  );
};

export default Details;
