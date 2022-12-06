import React, { useState, useEffect } from "react"; // eslint-disable-line
//COMPONENTS
import NavBar from "../Navbar/Navbar";
import Paginated from "../Paged/Paginated.jsx";
import Filters from "../Filters/Filters.jsx";
import Footer from "./components/Footer/Footer";
import SearchBar from "./components/SearchBar/SearchBar";
// import CardsContainer from "./components/CardsContainer/CardsContainer.jsx"

const Home = () => {
  return (
    <>
      <NavBar />
      <SearchBar />
      <Filters />
      <h1>CardGrid</h1>
      <Paginated />
      {/* <CardsContainer/> */}
      <Footer />
    </>
  );
};

export default Home;
