"use client";

import React from "react";
import { useRouter, usePathname } from "next/navigation";
import { Montserrat } from "next/font/google";
import { AiOutlineHome, AiOutlineProject, AiOutlineContacts } from "react-icons/ai";

const font = Montserrat({ weight: "400", subsets: ["latin"] });

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();

  const navItems = [
    { name: "Home", path: "/", icon: <AiOutlineHome size={20} /> },
    { name: "Project", path: "/projects", icon: <AiOutlineProject size={20} /> },
    { name: "Contact", path: "/contact", icon: <AiOutlineContacts size={20} /> },
  ];

  return (
    <>
      <nav className={`h-[10vh] px-4 sm:px-6 flex justify-between items-center font-bold ${font.className}`}>
        <h1 className="text-yellow-500 text-lg sm:text-xl">subedi.js</h1>

        {/* Desktop menu */}
        <ul className="hidden md:flex space-x-4 lg:space-x-8 text-sm font-bold">
          {navItems.map((item) => (
            <li key={item.name}>
              <button 
                onClick={() => router.push(item.path)} 
                className={`transition-colors ${
                  pathname === item.path ? 'text-yellow-500' : 'text-white hover:text-yellow-500'
                }`}
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile footer navbar */}
      <div className={`md:hidden fixed bottom-0 left-0 w-full bg-gray-900 ${font.className}`}>
        <ul className="flex justify-around items-center h-[10vh] text-sm font-bold">
          {navItems.map((item) => (
            <li key={item.name} className="w-1/3">
              <button
                onClick={() => router.push(item.path)}
                className="w-full h-full flex flex-col items-center justify-center"
              >
                <span className={`transition-colors ${
                  pathname === item.path ? 'text-yellow-500' : 'text-white'
                }`}>
                  {item.icon}
                </span>
                <span className={`text-xs mt-1 transition-colors ${
                  pathname === item.path ? 'text-yellow-500' : 'text-white'
                }`}>
                  {item.name}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
