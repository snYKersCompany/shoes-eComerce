import React from "react";
import { useAuth } from "../../context/authContext";
import NavBar from "../Navbar/Navbar";
import Register from "../Auth/Register"; // eslint-disable-line
import Login from "../Auth/Register"; // eslint-disable-line
import Paginated from "../Paged/Paginated.jsx";
import Filters from "../Filters/Filters.jsx";
import Footer from "../Footer/Footer";

const Home = () => {
  const authContext = useAuth(); // eslint-disable-line
  const { user } = useAuth(); // eslint-disable-line

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
