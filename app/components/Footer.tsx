"use client";

import { Montserrat } from "next/font/google";
import Link from "next/link";

const font = Montserrat({ weight: "400", subsets: ["latin"] });

const Footer = () => {
  return (
    <footer className={`bg-[#1b1c1c] rounded-3xl px-6 py-4 mb-5 min-w-[50%] ${font.className}`} suppressHydrationWarning>
      <div className="flex justify-between text-gray-300">
        <p className="text-[10px] sm:text-xs font-medium">
          <Link href="https://github.com/subigya-js" target="_blank" className="hover:text-white hover:underline duration-300">Subigya Subedi</Link> © {new Date().getFullYear()}, All rights reserved.&nbsp;
        </p>
        <p className="text-[10px] sm:text-xs">Design Inspired by: <Link href="https://github.com/kreatordev" target="_blank" className="hover:text-white hover:underline duration-300">KreatorDev</Link></p>
      </div>
    </footer>
  );
};

export default Footer;