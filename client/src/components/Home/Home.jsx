import React, { useState, useEffect } from "react";
import { useAuth } from "../../context/authContext";
import NavBar from "../NavBar/Navbar";
import Paginated from "../Paged/Paginated.jsx";
import Filters from "../Filters/Filters.jsx";
import Footer from "../Footer/Footer";
import Register from "../Auth/Register";
import Login from "../Auth/Register";

const Home = () => {
  const authContext = useAuth();
  const { user } = useAuth();

  return (
    <>
      <NavBar />
      <Filters />
      <h1>CardGrid</h1>
      <Paginated />
      <Footer />
    </>
  );
};

export default Home;
