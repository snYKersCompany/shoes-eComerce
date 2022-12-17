import React, { useEffect } from "react";
import { useAuth } from "../../context/authContext";
import { useDispatch } from "react-redux";
//JSX
import NavBar from "../NavBar/NavBar";
import Paginated from "../Paged/Paginated.jsx";
import Footer from "../Footer/Footer";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import { getUserDashboards } from "../../redux/features/users/usersActions";
import Carrousel from "../Carrousel";
//actions

const Home = () => {
  const dispatch = useDispatch();

  //devuelve el user del contexto
  const { user } = useAuth(); // eslint-disable-line

  useEffect(() => {
    dispatch(getUserDashboards())
    if (user) {
      console.log(user);
    }
  }, [user, dispatch]);

  return (
    <>
      {console.log(localStorage.getItem("carrito"))}
      <ScrollToTop />
      <NavBar />
      <Carrousel />
      <Paginated />
      <Footer />
    </>
  );
};

export default Home;