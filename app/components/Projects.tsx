"use client";

import React, { useState, useEffect } from "react";
import { projects } from "../constants";
import Link from "next/link";

interface Project {
  id: string;
  name: string;
  desc: string;
  repo: string;
  deploy: string;
}

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
  <div className="bg-gray-800 rounded-lg p-4 shadow-lg m-2 h-full flex flex-col justify-between">
    <div>
      <h3 className="text-xl font-bold text-yellow-500 mb-2">{project.name}</h3>
      <p className="text-gray-300 mb-4">{project.desc}</p>
    </div>
    <div className="flex justify-between">
      <Link href={project.repo} target="_blank" rel="noopener noreferrer">
        <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-bold py-2 px-3 rounded text-sm">
          Repository
        </button>
      </Link>
      <Link href={project.deploy} target="_blank" rel="noopener noreferrer">
        <button className="bg-green-500 hover:bg-green-600 text-gray-900 font-bold py-2 px-3 rounded text-sm">
          Live Demo
        </button>
      </Link>
    </div>
  </div>
);

interface SliderProps {
  children: React.ReactNode[];
  slidesToShow: number;
}

const Slider: React.FC<SliderProps> = ({ children, slidesToShow }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      // Swipe left
      setCurrentIndex((prev) =>
        Math.min(prev + slidesToShow, children.length - slidesToShow)
      );
    }

    if (touchEnd - touchStart > 75) {
      // Swipe right
      setCurrentIndex((prev) => Math.max(prev - slidesToShow, 0));
    }
  };

  return (
    <div
      className="overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div
        className="flex transition-transform duration-300 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * (100 / slidesToShow)}%)`,
        }}
      >
        {children}
      </div>
      <div className="flex justify-center mt-4">
        {Array.from({ length: Math.ceil(children.length / slidesToShow) }).map(
          (_, index) => (
            <button
              key={index}
              className={`h-2 w-2 mx-1 rounded-full ${
                index === Math.floor(currentIndex / slidesToShow)
                  ? "bg-yellow-500"
                  : "bg-gray-400"
              }`}
              onClick={() => setCurrentIndex(index * slidesToShow)}
            />
          )
        )}
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  const [screenSize, setScreenSize] = useState("desktop");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setScreenSize("mobile");
      } else if (window.innerWidth < 1024) {
        setScreenSize("tablet");
      } else {
        setScreenSize("desktop");
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const renderProjects = () => {
    switch (screenSize) {
      case "mobile":
        return (
          <Slider slidesToShow={1}>
            {projects.map((project) => (
              <div key={project.id} className="w-full flex-shrink-0">
                <ProjectCard project={project} />
              </div>
            ))}
          </Slider>
        );
      case "tablet":
        return (
          <Slider slidesToShow={2}>
            {projects.map((project) => (
              <div key={project.id} className="w-1/2 flex-shrink-0">
                <ProjectCard project={project} />
              </div>
            ))}
          </Slider>
        );
      default:
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        );
    }
  };

  return <div className="container mx-auto px-4 py-8">{renderProjects()}</div>;
};

export default Projects;
