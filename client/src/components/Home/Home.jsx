import React, { useEffect } from "react";
import { useAuth } from "../../context/authContext";
import { useDispatch } from "react-redux";
//JSX
import NavBar from "../NavBar/Navbar";
import Paginated from "../Paged/Paginated.jsx";
import Footer from "../Footer/Footer";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
//actions
import { createUser } from "../../redux/features/users/usersActions";

const Home = () => {
  const dispatch = useDispatch();
  //devuelve toda la info del contexto
  const authContext = useAuth(); // eslint-disable-line
  //devuelve el user del contexto
  const { user } = useAuth(); // eslint-disable-line

  // useEffect(() => {
  //   if (user) {
  //     dispatch(createUser(user.email, user.password, user.uid));
  //   }
  // }, [dispatch, user]);

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
