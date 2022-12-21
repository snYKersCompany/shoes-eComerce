import React, { useEffect } from "react";
import { useAuth } from "../../context/authContext";
import { useSelector } from "react-redux";
//JSX
import NavBar from "../Navbar/Navbar";
import Paginated from "../Paged/Paginated.jsx";
import Footer from "../Footer/Footer";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import Carrousel from "../Carrousel";
//actions

const Home = () => {
  //devuelve el user del contexto
  const { user } = useAuth();
  console.log("este es el user en home", user);

  useEffect(() => {
    if (user) {
      console.log("este es el user en home", user);
    }
  }, [user]);

  return (
    <>
      <ScrollToTop />
      <NavBar />
      <Carrousel />
      <Paginated />
      <Footer />
    </>
  );
};

export default Home;
