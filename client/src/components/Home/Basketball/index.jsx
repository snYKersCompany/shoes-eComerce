import React from "react";
import BannerPrincipal from "./BannerPrincipal";
import Banner from "./Banner";
import NavBar from "../../NavBar/NavBar";
import Carrousel from "./Carrousel";
import Text from "./Text";
import Footer from "../../Footer/Footer";
import "./basketball.css";

const Index = () => {
  return (
    <>
      <NavBar />
      <div className="fakeBodyBskt">
        <Text />  
        <Carrousel name={"Only Basketball"} category={"basketball"} color={"1"} />
        <BannerPrincipal />
        <Carrousel name={"for men"} category={"lifestyle"} 
        color={"2"} 
        />
        <Banner 
          inverted={true}
          tittle={"Air Jordan 1 High Women's 'Starfish'"}
          content={"The beloved “Starfish” color from the “Shattered Backboard” series will grace yet another Air Jordan 1 release, but this time as a women’s exclusive release."}
          img={"https://cdn.shopify.com/s/files/1/0095/4420/4367/articles/DO9369-101_1000x1000.jpg?v=1666198517"}
          // color={"#ff5733"}
          secondColor={"white"}
       />
        <Banner
          inverted={false}
          tittle={"The summer season is here"} 
          content={"Looking for a new pair of summer sneakers? Check out our latest arrivals! Our latest styles include canvas sneakers, espadrilles, and slip-ons. With so many colors and styles to choose from, you're sure to find the perfect pair of summer sneakers for you!"}
          img={"https://sneakernews.com/wp-content/uploads/2016/08/nike-basketball-summer-pack-release-info.jpg"}
          color={"#7D0633"}
          secondColor={"white"}
        />
      </div>
      <Footer />
    </>
  );
};

export default Index;
