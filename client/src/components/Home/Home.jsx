import React, { useState, useEffect } from "react";
import { useAuth } from "../../context/authContext";
import NavBar from "../NavBar/Navbar";
import Paginated from "../Paged/Paginated.jsx";
import Filters from "../Filters/Filters.jsx";
import Footer from "../Footer/Footer";
import CardsContainer from "../CardsContainer/CardsContainer";

const Home = () => {
  //devuelve toda la info del contexto
  const authContext = useAuth();

  //devuelve el user del contexto
  const { user } = useAuth();

  return (
    <>
      <NavBar />
      <Filters />
      {/* <h1>Welcome {user}</h1> */}
      <Paginated />
      <Footer />
    </>
  );
};

export default Home;
