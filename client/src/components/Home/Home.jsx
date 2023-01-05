import React, { useEffect } from "react";
import { useAuth } from "../../context/authContext";
//JSX
import NavBar from "../NavBar2.0/NavBar2.0";
import Paginated from "../Paged/Paginated.jsx";
import Footer from "../Footer/Footer";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import Carrousel from "../Carrousel";
//actions

import "../../styles/palHome.css";

const Home = () => {
  //devuelve el user del contexto
  const { user } = useAuth();

  return (
    <>
      <NavBar />
      <div className="elHome">
        <ScrollToTop />

        {/* <Carrousel /> */}
        <Paginated />
        <Footer />
      </div>
    </>
  );
};

export default Home;
