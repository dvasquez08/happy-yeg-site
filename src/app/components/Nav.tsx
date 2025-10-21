"use client";

import Image from "next/image";
import { useState } from "react";
import { Search, Menu, X } from "lucide-react";

interface NavProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

const Nav = ({ searchQuery, onSearchChange }: NavProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearchChange(e.target.value);
  };

  // Common search bar component to avoid repetition
  const SearchBar = () => (
    <div className="relative">
      <input
        type="text"
        placeholder="Search for a restaurant..."
        value={searchQuery}
        onChange={handleSearchChange}
        className="bg-blue-900 text-white placeholder-gray-400 rounded-lg py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full md:w-64"
      />
      <Search
        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
        size={20}
      />
    </div>
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-blue-950/80 backdrop-blur-md border-b border-gray-800">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Image
            src="/happy-logo.png"
            alt="Happy YEG Logo"
            width={32}
            height={32}
          />
          <span className="text-2xl font-bold text-white">HappyYEG</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <SearchBar />
          <a
            href="#location"
            className="text-white hover:text-blue-400 transition-colors"
          >
            Locations
          </a>
          <a
            href="#"
            className="text-white hover:text-blue-400 transition-colors"
          >
            Contact
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? (
              <X className="text-white" size={28} />
            ) : (
              <Menu className="text-white" size={28} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-blue-950 border-t border-gray-800">
          <div className="container mx-auto px-6 py-4 space-y-4">
            <SearchBar />
            <nav className="flex flex-col space-y-2">
              <a
                href="#location"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white hover:text-blue-400 transition-colors py-2"
              >
                Locations
              </a>
              <a
                href="#"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white hover:text-blue-400 transition-colors py-2"
              >
                Contact
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};
export default Nav;
