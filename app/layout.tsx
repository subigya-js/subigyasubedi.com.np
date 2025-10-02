import type { Metadata } from "next";
import localFont from "next/font/local";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";
import { Ubuntu } from "next/font/google";
import { Toaster } from "sonner";

const font = Ubuntu({ weight: "400", subsets: ["latin"] });

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "SUBIGYA SUBEDI",
  description: "Full Stack Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col items-center justify-center ${font.className}`}
      >
        {/* Fixed top overlay to prevent content from showing above navbar */}
        <div className="fixed top-0 left-0 w-full h-20 bg-[#121212] z-[998]" />
        <div className="flex justify-center z-[999]">
          <Navbar />
        </div>
        <main className="flex-grow flex justify-center overflow-y-auto mt-24">
          <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
            {children}
          </div>
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}