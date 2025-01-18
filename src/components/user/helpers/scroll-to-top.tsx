"use client";
import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa6";

const SCROLL_THRESHOLD = 50;

const ScrollToTop = () => {
  const [isHidden, setIsHidden] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > SCROLL_THRESHOLD) {
        setIsHidden(false);
      } else {
        setIsHidden(true);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const onClickBtn = () => window.scrollTo({ top: 0, behavior: "smooth" });
  return (
    <button
      className={`fixed bottom-8 right-6 z-50 rounded-full bg-pink-500 p-3 hover:text-xl transition-all duration-300 ease-out ${
        isHidden ? "hidden" : ""
      }`}
      onClick={onClickBtn}
    >
      <FaArrowUp />
    </button>
  );
};

export default ScrollToTop;
