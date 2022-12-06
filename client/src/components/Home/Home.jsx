import React, { useState, useEffect } from "react";
import { useAuth } from "../../context/authContext";
//COMPONENTS
import NavBar from "../NavBar/Navbar";
import Paginated from "../Paged/Paginated.jsx";
import Filters from "../Filters/Filters.jsx";

const Home = () => {
  const authContext = useAuth();
  const { user } = useAuth();

  return (
    <>
      <NavBar user={user} />
      <h1>Hola {user.name}</h1>
      <Filters />
      <h1>CardGrid</h1>
      <Paginated />
    </>
  );
};

export default Home;
