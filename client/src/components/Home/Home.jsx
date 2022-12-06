import React, { useState, useEffect } from "react";
//COMPONENTS
import NavBar from "../NavBar/Navbar";
import Paginated from "../Paged/Paginated";

const Home = () => {
  return (
    <>
      <NavBar />
      <h1>CardGrid</h1>
      <Paginated />
    </>
  );
};

export default Home;
