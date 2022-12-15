import React, { useState, useEffect, useRef } from "react";
import scrollTop from "../../utils/images/arrow.png";
import "../../styles/scrollToTop.css";

const ScrollToTop = () => {
  const [showScroll, setShowScroll] = useState(false);
  const mounted = useRef(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    mounted.current = true;
    window.addEventListener("scroll", () => {
      let isTop = window.scrollY < 100;
      if (isTop !== true) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
      return () => {
        mounted.current = false;
      };
    });
  });

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
