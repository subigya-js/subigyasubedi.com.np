"use client";

import { Ubuntu } from "next/font/google";
import React, { useEffect, useState } from "react";
import AboutCard from "./AboutCard";
import ExperienceCard from "./ExperienceCard";
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
      className={`w-full flex flex-col gap-6 lg:gap-8 px-4 md:px-6 lg:px-8 ${font.className}`}
      suppressHydrationWarning
    >
      <div className="flex md:flex-row flex-col justify-center items-stretch gap-6 lg:gap-8">
        <div className={`w-full lg:w-[70%] flex justify-center lg:justify-start items-center transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
          <AboutCard />
        </div>
        <div className={`w-full lg:w-[30%] flex flex-col justify-center items-center lg:items-end gap-3 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
          <LinksCard />
        </div>
      </div>
      <div className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
        <p className="text-sm md:text-md text-gray-300 mb-4 px-2 font-semibold">Experiences:</p>
        <ExperienceCard />
      </div>
    </div>
  );
};

export default Landing;
