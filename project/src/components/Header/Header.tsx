import { useState, useEffect } from "react";
import {
  Menu,
  X,
  Search,
  Facebook,
  Instagram
} from "lucide-react";
import Logo from "./Logo";
import Navigation from "./Navigation";
import { Link } from "react-router-dom";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors ${
        isScrolled
          ? "bg-gray-800 text-white shadow-lg"
          : "bg-white text-gray-700"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo section */}
          <Logo />

          {/* Desktop Navigation */}
          <Navigation className="hidden lg:flex" />

          <div className="flex items-center space-x-4">
            {/* Desktop Search Bar and Social Media Icons */}
            <div className="hidden lg:flex items-center space-x-2">
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className={`p-2 rounded-md ${
                  isScrolled
                    ? "text-white hover:text-orange-400"
                    : "text-gray-700 hover:text-orange-500"
                }`}
              >
                <Search
                  className={`h-6 w-6 ${
                    isScrolled ? "text-orange-500" : "text-gray-700"
                  }`}
                />
              </button>
              {isSearchOpen && (
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-40 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              )}
            </div>

            {/* Desktop Social Media Icons */}
            <div
              className={`hidden lg:flex space-x-4 ${
                isScrolled ? "text-white" : "text-gray-700"
              }`}
            >
              <Link
                to="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600"
              >
                <Facebook className="h-6 w-6" />
              </Link>
              <Link
                to="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-600"
              >
                <Instagram className="h-6 w-6" />
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-md lg:hidden ${
                isScrolled
                  ? "text-white hover:text-orange-400"
                  : "text-gray-700 hover:text-orange-500"
              }`}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100">
          <Navigation className="flex flex-col py-4" isMobile={true} />
          {/* Mobile Search Bar and Social Media Icons */}
          <div className="flex  items-center space-y-4 py-4">
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className={`p-2 rounded-md ${
                  isScrolled
                    ? "text-white hover:text-orange-400"
                    : "text-gray-700 hover:text-orange-500"
                }`}
              >
                <Search
                  className={`h-6 w-6 ${
                    isScrolled ? "text-orange-500" : "text-gray-700"
                  }`}
                />
              </button>
              {isSearchOpen && (
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-40 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              )}
            </div>

            {/* Mobile Social Media Icons */}
            <div className="flex space-x-4 ms-3">
              <Link
                to="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-blue-600"
              >
                <Facebook className="h-6 w-6 mb-4" />
              </Link>
              <Link
                to="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-pink-600"
              >
                <Instagram className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
