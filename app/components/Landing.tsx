"use client";

import React, { useEffect, useState } from "react";
// import Image from "next/image";
// import MainPhoto from "../assets/MainPhoto.jpeg";
import { Ubuntu } from "next/font/google";
import AboutCard from "./AboutCard";
import LinksCard from "./LinksCard";

const font = Ubuntu({ weight: "400", subsets: ["latin"] });

const Landing: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 10);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`w-full flex flex-col md:flex-row justify-center items-center ${font.className}`}
      suppressHydrationWarning
    >
      <div className={`w-full md:w-1/2 flex justify-center md:justify-start items-center transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
        <AboutCard />
      </div>
      <div className={`w-full md:w-1/2 mt-8 md:mt-0 flex flex-col justify-center items-center md:items-end gap-3 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
        <LinksCard />
      </div>
    </div>
  );
};

export default Landing;
