import React, { useState, useEffect } from "react";
import scrollTop from "../../utils/images/arrow.png";
import "../../styles/scrollToTop.css";

const ScrollToTop = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      let isTop = window.scrollY < 100;
      if (isTop !== true) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
      return () => {
        isTop = true;
      };
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      {showScroll && (
        <div className="scroll_top" onClick={scrollToTop}>
          <img src={scrollTop} alt="scroll to top" />
        </div>
      )}
    </div>
  );
};

export default ScrollToTop;
