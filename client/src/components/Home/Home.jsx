import React, { useState, useEffect } from "react"; // eslint-disable-next-line
import { useAuth } from "../../context/authContext";
//COMPONENTS
import NavBar from "../NavBar/Navbar";
import Paginated from "../Paged/Paginated.jsx";
import Filters from "../Filters/Filters.jsx";
import Footer from "../Footer/Footer";
import Register from "../Auth/Register"; // eslint-disable-next-line
import Login from "../Auth/Register"; // eslint-disable-next-line

const Home = () => {
  const authContext = useAuth();// eslint-disable-next-line
  const { user } = useAuth();// eslint-disable-next-line

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
