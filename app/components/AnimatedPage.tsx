"use client";

import React, { useEffect, useState } from "react";

interface AnimatedPageProps {
  children: React.ReactNode;
}

const AnimatedPage: React.FC<AnimatedPageProps> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 10);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`transition-all duration-1000 ease-out ${
        isVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"
      }`}
    >
      {children}
    </div>
  );
};

export default AnimatedPage;
