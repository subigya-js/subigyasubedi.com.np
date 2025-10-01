"use client";

import React, { useEffect, useState } from "react";
import { Ubuntu } from "next/font/google";
import AboutCard from "./AboutCard";
import LinksCard from "./LinksCard";
import ExperienceCard from "./ExperienceCard";

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
      className={`w-full flex flex-col gap-8 ${font.className}`}
      suppressHydrationWarning
    >
      <div className="flex md:flex-row flex-col justify-center items-center gap-10 md:gap-0">
        <div className={`w-[70%] flex justify-center md:justify-start items-center transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
          <AboutCard />
        </div>
        <div className={`w-[30%] mt-8 md:mt-0 flex flex-col justify-center items-center md:items-end gap-3 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
          <LinksCard />
        </div>
      </div>
      <div className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
        <p className="text-md text-gray-300 mb-4 px-2 font-semibold">Experiences:</p>
        <ExperienceCard />
      </div>
    </div>
  );
};

export default Landing;
