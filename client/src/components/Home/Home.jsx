import React from "react";
import { useAuth } from "../../context/authContext";
import Navbar from "../NavBar/Navbar";
import Paginated from "../Paged/Paginated.jsx";
import Footer from "../Footer/Footer";

const Home = () => {
  //devuelve toda la info del contexto
  const authContext = useAuth(); // eslint-disable-line

  //devuelve el user del contexto
  const { user } = useAuth(); // eslint-disable-line
  // console.log(user.uid);

  return (
    <>
      <Navbar />
      <Paginated />
      <Footer />
    </>
  );
};

export default Home;
