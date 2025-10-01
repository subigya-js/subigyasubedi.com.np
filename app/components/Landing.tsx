"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import MainPhoto from "../assets/MainPhoto.jpeg";
import { Ubuntu } from "next/font/google";

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
        <Image
          src={MainPhoto}
          alt="Main Photo"
          width={350}
          height={350}
          className="rounded-full border-4 border-gray-700 w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96"
        />
      </div>
      <div className={`w-full md:w-1/2 mt-8 md:mt-0 flex flex-col justify-center items-center md:items-end gap-3 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
        <h1 className="text-2xl sm:text-3xl text-yellow-500 font-bold text-center md:text-right">SUBIGYA SUBEDI</h1>
        <p className="text-lg sm:text-xl text-center md:text-right">A Full Stack Web Application Developer</p>
      </div>
    </div>
  );
};

export default Landing;
