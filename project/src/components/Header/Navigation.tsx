import { useState } from 'react';
import { ShoppingCart, Search, Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '#', hasDropdown: true },
  { label: 'Pages', href: '#pages', hasDropdown: true },
  { label: 'Services', href: '#services', hasDropdown: true },
  { label: 'Projects', href: '#projects', hasDropdown: true },
  { label: 'Blog', href: '#blog', hasDropdown: true },
  { label: 'Shop', href: '#shop', hasDropdown: true },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="hidden lg:flex items-center space-x-8">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="flex items-center text-gray-700 hover:text-orange-500 transition-colors group"
          >
            {item.label}
            {item.hasDropdown }
          </a>
        ))}
      </nav>

      {/* Tablet/Mobile Navigation */}
      <div className="lg:hidden flex items-center space-x-4">
        <button className="relative">
          <ShoppingCart className="h-6 w-6 text-gray-700 hover:text-orange-500" />
          <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
            0
          </span>
        </button>
        <button>
          <Search className="h-6 w-6 text-gray-700 hover:text-orange-500" />
        </button>
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <X className="h-6 w-6 text-gray-700 hover:text-orange-500" />
          ) : (
            <Menu className="h-6 w-6 text-gray-700 hover:text-orange-500" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg p-4 border-t">
          <div className="space-y-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-center justify-between text-gray-700 hover:text-orange-500 py-2"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
                {item.hasDropdown && <ChevronDown className="h-4 w-4" />}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
}