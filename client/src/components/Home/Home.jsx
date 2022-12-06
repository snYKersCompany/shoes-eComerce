import React, { useState, useEffect } from "react";
//COMPONENTS
import NavBar from "../Navbar/Navbar";
import Paginated from "../Paged/Paginated.jsx";
import Filters from "../Filters/Filters.jsx"

const Home = () => {
  return (
    <>
      <NavBar />
      <Filters/>
      <h1>CardGrid</h1>
      <Paginated />
    </>
  );
};

export default Home;
