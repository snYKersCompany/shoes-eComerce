import React from "react";
import "../../../styles/banner.css";
import "../../../styles/carrouselMain.css";
import "../../../styles/bannerTwo.css";
import "../../../styles/carrouselTwo.css";
import "../../../styles/reviewMain.css";
import "../../../styles/bannerThree.css";
import { useAuth } from "../../../context/authContext";
//components
import NavBar from "../../NavBar2.0/NavBar2.0";
import Carrousel from "./Carrousel";
import BannerTwo from "./Banner2";
import ScrollToTop from "../../ScrollToTop/ScrollToTop";
import CarrouselTwo from "./Carrousel2";
import ReviewMain from "./ReviewMain";
import BannerThree from "./Banner3";
import Footer from "../../Footer/Footer";
import Welcome from "./Welcome";
import Carrousel3 from "./Carrousel3";

const Main = () => {
  const { user } = useAuth();
  console.log(user);
  return (
    <>
      <div className="background-index">
        <ScrollToTop />
        <NavBar />
        <Welcome />
        <Carrousel />
        <div className="carrousel-two">
          <CarrouselTwo /> {/* marcas */}
          <BannerThree />
          <Carrousel3 />
          <ReviewMain />
          <BannerTwo />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Main;
