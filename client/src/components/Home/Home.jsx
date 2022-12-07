import React, { useState, useEffect } from "react";
import { useAuth } from "../../context/authContext";
//COMPONENTS
import NavBar from "../Navbar/Navbar";
import Paginated from "../Paged/Paginated.jsx";
import Filters from "../Filters/Filters.jsx";
import Footer from "../Footer/Footer";

const Home = () => {
  const authContext = useAuth();
  const { user } = useAuth();

  return (
    <>
      <NavBar />
      <Filters />
      <h1>CardGrid</h1>
      <Paginated />
      {/* <CardsContainer/> */}
      <Footer />
    </>
  );
};

export default Home;
