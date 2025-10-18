import Image from "next/image";
import React from "react";

const Nav = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-sky-900 backdrop-blur-md border-b border-gray-800">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Image
            src="/happyLogo.jpg"
            alt="Happy YEG Logo"
            width={32}
            height={32}
          />
          <span className="text-2xl font-bold text-white">Happy YEG</span>
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="#location"
            className="text-white hover:text-blue-400 transition-colors"
          >
            Location Select
          </a>
          <a
            href="#"
            className="text-white hover:text-blue-400 transition-colors"
          >
            Contact
          </a>
          <a
            href="#"
            className="text-white hover:text-blue-400 transition-colors"
          >
            About
          </a>
        </nav>
        <a
          href="#"
          className="hidden md:inline-block bg-blue-700 hover:bg-blue-600 text-white font-semibold py-2 px-5 rounded-lg transition-colors"
        >
          Alerts
        </a>
      </div>
    </header>
  );
};
export default Nav;
