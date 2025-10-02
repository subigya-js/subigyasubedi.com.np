"use client";

import { Montserrat } from "next/font/google";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { MdOutlineFileDownload } from "react-icons/md";
import { FaBars, FaTimes } from "react-icons/fa";

const font = Montserrat({ weight: "400", subsets: ["latin"] });

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Experiences", path: "/experiences" },
    { name: "Contact", path: "/contact" },
  ];

  const downloadResume = () => {
    // Create a link element to trigger download
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // Assumes resume.pdf is in public folder
    link.download = 'Subigya_Subedi_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavigation = (path: string) => {
    router.push(path);
    setIsMobileMenuOpen(false); // Close mobile menu after navigation
  };

  return (
    <>
      {/* Backdrop to prevent content from showing above navbar */}
      <div className="fixed top-0 left-0 w-full h-20 bg-transparent z-[999] pointer-events-none" />
      
      {/* Desktop/Tablet Navbar */}
      <nav className={`fixed top-5 left-1/2 transform -translate-x-1/2 py-3 px-4 sm:px-6 md:px-8 flex justify-between w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%] bg-[#1b1c1c] items-center rounded-full font-bold z-[1000] ${font.className}`} suppressHydrationWarning>

        {/* Left side - Mobile hamburger menu */}
        <div className="flex items-center">
          <button
            onClick={toggleMobileMenu}
            className="md:hidden flex items-center justify-center p-2 rounded-full hover:bg-gray-700/30 transition-colors"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <FaTimes className="text-white text-lg" />
            ) : (
              <FaBars className="text-white text-lg" />
            )}
          </button>
        </div>

        {/* Center - Desktop menu */}
        <ul className="hidden md:flex space-x-2 lg:space-x-4 xl:space-x-8 text-sm font-bold">
          {navItems.map((item) => (
            <li key={item.name}>
              <button
                onClick={() => handleNavigation(item.path)}
                className={`px-2 py-1 rounded-md transition-colors ${
                  pathname === item.path
                    ? 'text-yellow-500 bg-yellow-500/10'
                    : 'text-white hover:text-yellow-500 hover:bg-gray-700/30'
                }`}
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>

        {/* Right side - Download Resume Button */}
        <div className="flex items-center">
          <button
            onClick={downloadResume}
            className="flex items-center justify-center gap-2 px-3 py-2 rounded-xl border border-gray-500 hover:scale-105 hover:bg-gray-600/10 duration-400 transition-all text-white font-semibold"
            aria-label="Download Resume"
          >
            <MdOutlineFileDownload className="text-white text-lg" />
            <span className="hidden sm:inline text-sm">Resume</span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-black/50 z-[1001]" onClick={toggleMobileMenu}>
          <div
            className={`fixed top-20 left-1/2 transform -translate-x-1/2 w-[90%] bg-[#1b1c1c] rounded-2xl p-6 z-[1002] ${font.className}`}
            onClick={(e) => e.stopPropagation()}
          >
            <ul className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <li key={item.name}>
                  <button
                    onClick={() => handleNavigation(item.path)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                      pathname === item.path
                        ? 'text-yellow-500 bg-yellow-500/10'
                        : 'text-white hover:text-yellow-500 hover:bg-gray-700/30'
                    }`}
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;