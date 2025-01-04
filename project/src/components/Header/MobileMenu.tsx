import  { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/aboutUS' },
  { label: 'Pricing', to: '/pricing' },
  {Lable:'Services',to :'/services'}
];

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-gray-600 hover:text-orange-500 transition-colors"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-lg p-4 space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              className="block text-gray-600 hover:text-orange-500 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}