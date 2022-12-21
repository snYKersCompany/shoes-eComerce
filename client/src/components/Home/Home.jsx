import React, { useEffect } from "react";
import { useAuth } from "../../context/authContext";
//JSX
import NavBar from "../Navbar/Navbar";
import Paginated from "../Paged/Paginated.jsx";
import Footer from "../Footer/Footer";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import Carrousel from "../Carrousel";
//actions

const Home = () => {
  
  //devuelve el user del contexto
  const { user } = useAuth(); // eslint-disable-line

  useEffect(() => {
    
    if (user) {
      console.log(user);
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