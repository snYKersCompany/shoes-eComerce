import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllProducts } from "../../../redux/features/products/productsActions";
import CardCarrousel1 from "./CardCarrousel1";
import "../../../styles/homeWomenCarrousel1.css";

const Carrousel1 = ({ name }) => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  // console.log(products);
  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  return (
    <div className="HWC1-container">
      <div className="HWC1">
        <h3 className="HWC1-title text-green">Running Shoes{name}</h3>
        <div className="HWC1-cardContainer">
          {products[0] !== "void" && products?.length > 1 ? (
            products.slice(0, 25).map((el, i) => (
              <div className="HWC1-card" key={i}>
                <Link to="#" className="text-decoration-none">
                  <CardCarrousel1 img={el.card_picture} />
                </Link>
              </div>
            ))
          ) : (
            <CardCarrousel1 name={"nada aún"} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Carrousel1;
