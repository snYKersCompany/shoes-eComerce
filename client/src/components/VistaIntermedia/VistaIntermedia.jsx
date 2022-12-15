import React from "react";
import CardsContainer from "../CardsContainer/CardsContainer";
//JSX
import NavBar from "../NavBar/Navbar";

const VistaIntermedia = () => {
  return (
    <>
      <NavBar />
      <CardsContainer productsSliced={productsSliced} />
    </>
  );
};

export default VistaIntermedia;
