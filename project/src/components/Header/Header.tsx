import { useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import Navigation from "./Navigation";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white text-gray-700 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo section */}
          <Logo />

          {/* Desktop Navigation */}
          <Navigation className="hidden lg:flex" />

          <div className="flex items-center space-x-4">
            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md lg:hidden text-gray-700 hover:text-orange-500"
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
        </div>
      )}
    </header>
  );
}
