"use client";

import { Montserrat } from "next/font/google";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const font = Montserrat({ weight: "400", subsets: ["latin"] });

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [isDarkMode, setIsDarkMode] = useState(true);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Experiences", path: "/experiences" },
    { name: "Contact", path: "/contact" },
  ];

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <>
      {/* Backdrop to prevent content from showing above navbar */}
      <div className="fixed top-0 left-0 w-full h-20 bg-transparent z-[999] pointer-events-none" />
      
      <nav className={`fixed top-5 left-1/2 transform -translate-x-1/2 py-3 px-6 sm:px-8 flex justify-between w-[50%] bg-[#1b1c1c] items-center rounded-full font-bold z-[1000] ${font.className}`} suppressHydrationWarning>
        {/* Desktop menu */}
        <ul className="hidden md:flex space-x-4 lg:space-x-8 text-sm font-bold">
          {navItems.map((item) => (
            <li key={item.name}>
              <button
                onClick={() => router.push(item.path)}
                className={`transition-colors ${pathname === item.path ? 'text-yellow-500' : 'text-white hover:text-yellow-500'
                  }`}
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>

        <button
          onClick={toggleTheme}
          className="flex items-center justify-center p-2 rounded-full hover:bg-gray-700 transition-colors"
          aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
        >
          {isDarkMode ? (
            <FaMoon className="text-white" />
          ) : (
            <FaSun className="text-yellow-500" />
          )}
        </button>
      </nav>

      {/* Mobile footer navbar */}
      {/* <div className={`md:hidden fixed bottom-0 left-0 w-full bg-gray-900 z-[1000] ${font.className}`} suppressHydrationWarning>
        <ul className="flex justify-around items-center h-[10vh] text-sm font-bold">
          {navItems.map((item) => (
            <li key={item.name} className="w-1/3">
              <button
                onClick={() => router.push(item.path)}
                className="w-full h-full flex flex-col items-center justify-center"
              >
                <span className={`text-xs mt-1 transition-colors ${pathname === item.path ? 'text-yellow-500' : 'text-white'
                  }`}>
                  {item.name}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div> */}
    </>
  );
};

export default Navbar;