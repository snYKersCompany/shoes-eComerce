import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCategorys } from "../../../redux/features/products/productsActions";
import CardCarrousel2 from "./CardCarrousel2";
import "../../../styles/homeWomenCarrousel2.css";

const Carrousel2 = () => {
  const dispatch = useDispatch();
  const { nike } = useSelector((state) => state.products.brand);
  useEffect(() => {
    dispatch(getCategorys({ brand: "nike" }));
  }, [dispatch]);

  return (
    <div className="HWC2-container">
      <div className="HWC2">
        <h3 className="HWC2-title">Other Nikes</h3>
        <div className="HWC2-cardContainer">
          {nike !== "void" && nike?.length > 2 ? (
            nike.slice(0, 25).map((el, i) => (
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
