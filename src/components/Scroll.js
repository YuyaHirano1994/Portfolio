import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import "./styles/Scroll.css";

function Scroll() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset;
    if (scrollTop > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={`scroll-to-top-button ${isVisible ? "visible" : ""}`} onClick={scrollToTop}>
      <FaArrowUp />
    </div>
  );
}

export default Scroll;
