import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllProducts } from "../../../redux/features/products/productsActions";
import { useEffect } from "react";
import CardCarrousel from "./CardCarrousel";
import "../../../styles/carrouselMain.css";

const Carrousel = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  return (
    <>
      <h1 className="carr-txt">NIKE style</h1>
      <div className="containerCarrousel">
        {products[0] !== "void" && products?.length > 1 ? (
          products.slice(0, 25).map((el, i) => (
            <div key={i} className="individualCardContainer">
              <Link to={`/home/${el._id}`} className="text-decoration-none">
                <CardCarrousel name={el.name} img={el.card_picture} />
              </Link>
            </div>
          ))
        ) : (
          <CardCarrousel name={"Loading.."} />
        )}
      </div>
    </>
  );
};

export default Carrousel;
