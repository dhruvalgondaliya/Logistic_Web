import { useState } from "react";
import { Menu, X} from "lucide-react";
import Logo from "./Logo";
import Navigation from "./Navigation";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Logo />

          {/* Desktop Navigation */}
          <Navigation className="hidden lg:flex" />

          {/* Mobile Controls */}
          <div className="flex items-center space-x-4 lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md text-gray-600 hover:text-gray-900"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100">
          <Navigation
            className="flex flex-col py-4"
            isMobile={true}
            isNavMenuOpen={isNavMenuOpen}
            setIsNavMenuOpen={setIsNavMenuOpen}
          />
        </div>
      )}
    </header>
  );
}
