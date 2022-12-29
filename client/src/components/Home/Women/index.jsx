import React from "react";
import Banner1 from "./Banner1";
import Banner2 from "./Banner2";
import Banner3 from "./Banner3";
import Carrousel1 from "./Carrousel1";
import Carrousel2 from "./Carrousel2";
import Footer from "../../Footer/Footer";
import NavBar from "../../NavBar/NavBar";
import ScrollToTop from "../../ScrollToTop/ScrollToTop";
import Text1 from "./Text1";
import Text2 from "./Text2";
import Text3 from "./Text3";

const Women = () => {
  return (
    <div className="HW-index">
      <NavBar />
      <ScrollToTop />
      <Banner1 />
      <Carrousel1 />
      <Text2 />
      <Banner3 />
      <Text1 />
      <Banner2 />
      <Carrousel2 />
      <Text3 />
      <Footer />
    </div>
  );
};

export default Women;
