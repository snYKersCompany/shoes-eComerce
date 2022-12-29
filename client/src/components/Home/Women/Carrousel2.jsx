import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllProducts } from "../../../redux/features/products/productsActions";
import CardCarrousel2 from "./CardCarrousel2";
import "../../../styles/homeWomenCarrousel2.css";

const Carrousel2 = ({ name }) => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  // console.log(products);
  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  return (
    <div className="HWC2-container">
      <div className="HWC2">
        <h3 className="HWC2-title">Other Nikes{name}</h3>
        <div className="HWC2-cardContainer">
          {products[0] !== "void" && products?.length > 2 ? (
            products.slice(0, 25).map((el, i) => (
              <div className="HWC2-card" key={i}>
                <Link to="#" className="text-decoration-none">
                  <CardCarrousel2
                    img={el.card_picture}
                    name={el.name}
                    price={el.price}
                  />
                </Link>
              </div>
            ))
          ) : (
            <CardCarrousel2 name={"nada aún"} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Carrousel2;
