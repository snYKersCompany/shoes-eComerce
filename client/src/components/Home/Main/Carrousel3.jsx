import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCategorys } from "../../../redux/features/products/productsActions";
import CardCarrousel3 from "./CardCarrousel3";
import "../../../styles/carrouselMain3.css";

const Carrousel3 = () => {
  const dispatch = useDispatch();
  const { adidas } = useSelector((state) => state.products.brand);

  useEffect(() => {
    dispatch(getCategorys({ brand: "adidas" }));
  }, [dispatch]);

  return (
    <>
      <h1 className="carr-txt">Adidas style</h1>
      <div className="containerCarrousel3">
        {adidas !== "void" && adidas?.length > 1 ? (
          adidas.slice(0, 25).map((el, i) => (
            <div className="" key={i}>
              <Link to={`/home/${el._id}`} className="text-decoration-none">
                <CardCarrousel3 img={el.card_picture} name={el.name} />
              </Link>
            </div>
          ))
        ) : (
          <CardCarrousel3 name={"nada aún"} />
        )}
      </div>
    </>
  );
};

export default Carrousel3;
