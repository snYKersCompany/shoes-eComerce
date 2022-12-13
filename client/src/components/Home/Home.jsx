import React from "react";
import { useAuth } from "../../context/authContext";
<<<<<<< HEAD
import NavBar from "../Navbar/Navbar";
=======
import NavBar from "../NavBar/NavBar";
>>>>>>> dev
import Paginated from "../Paged/Paginated.jsx";
import Footer from "../Footer/Footer";
import ScrollToTop from "../ScrollToTop/ScrollToTop";

const Home = () => {
  //devuelve toda la info del contexto
  const authContext = useAuth(); // eslint-disable-line

  //devuelve el user del contexto
  const { user } = useAuth(); // eslint-disable-line
  // console.log(user.uid);

  return (
    <>
      <ScrollToTop />
      <NavBar />
      <Paginated />
      <Footer />
    </>
  );
};

export default Home;
