import React from "react";
import { useAuth } from "../../context/authContext";
import NavBar from "../Navbar/Navbar";
import Paginated from "../Paged/Paginated.jsx";
import Filters from "../Filters/Filters.jsx";
import Footer from "../Footer/Footer";

const Home = () => {
  //devuelve toda la info del contexto
  const authContext = useAuth(); // eslint-disable-line

  //devuelve el user del contexto
  const { user } = useAuth(); // eslint-disable-line

  return (
    <>
      <NavBar />
      <Filters />
      <Paginated />
      <Footer />
    </>
  );
};

export default Home;
