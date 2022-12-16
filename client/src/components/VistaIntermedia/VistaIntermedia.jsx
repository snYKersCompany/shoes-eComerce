import React from "react";
import CardsContainer from "../CardsContainer/CardsContainer";
//JSX
import NavBar from "../NavBar/NavBar";

const VistaIntermedia = ({ products }) => {
  var productsSliced = "hola";

  return (
    <>
      <NavBar />
      <CardsContainer productsSliced={productsSliced} />
    </>
  );
};

export default VistaIntermedia;
