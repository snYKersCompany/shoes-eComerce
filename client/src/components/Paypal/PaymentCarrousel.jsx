import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllProducts } from "../../redux/features/products/productsActions";
import PaymentCarrouselCard from "./PaymentCarrouselCard";
import "../../styles/PaymentCarrousel.css";

const PaymentCarrousel = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  return (
    <>
      <div className="containerPaymentCarrousel">
        {products[0] !== "void" && products?.length > 1 ? (
          products.slice(0, 25).map((el, i) => (
            <div key={i} className="individualPaymentContainerCard">
              <Link to={`/home/${el._id}`}>
                <PaymentCarrouselCard name={el.name} img={el.card_picture} />
              </Link>
            </div>
          ))
        ) : (
          <PaymentCarrouselCard name={"Loading.."} />
        )}
      </div>
    </>
  );
};

export default PaymentCarrousel;
