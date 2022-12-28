import React from "react";
import Banner1 from "./Banner1";
import Banner2 from "./Banner2";
import Banner3 from "./Banner3";
import Carrusell from "./Carrusell";
import Footer from "../../Footer/Footer";
import NavBar from "../../NavBar/NavBar";
import ScrollToTop from "../../ScrollToTop/ScrollToTop";
import Text1 from "./Text1";
import Text2 from "./Text2";
import Text3 from "./Text3";

const Women = () => {
  return (
    <div>
      <NavBar />
      <ScrollToTop />
      <Text1 />
      <Banner1 />
      <Carrusell />
      <Text2 />
      <Banner2 />
      {/* <Carrusell /> */}
      <Banner3 />
      <Text3 />
      <Footer />
    </div>
  );
};

export default Women;
