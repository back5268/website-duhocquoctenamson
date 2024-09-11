"use client";

import React, { useEffect, useState } from "react";

export const ScrollToTop = () => {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    if (
      document.body.scrollTop > 500 ||
      document.documentElement.scrollTop > 500
    ) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const backToTop = () => {
    document.documentElement.style.scrollBehavior = "smooth";
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!showButton) return null;
  return (
    <button
      type="button"
      onClick={backToTop}
      className="fixed z-30 bottom-[40px] right-[20px] p-4 bg-primary text-white leading-tight rounded-full"
    >
      <svg
        aria-hidden="true"
        focusable="false"
        data-prefix="fas"
        className="w-5 h-5"
        type="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
      >
        <path
          fill="currentColor"
          d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"
        ></path>
      </svg>
    </button>
  );
};
