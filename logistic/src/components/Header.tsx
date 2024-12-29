import React from 'react';
import { Truck } from 'lucide-react';

const Header = () => {
  return (
    <header className="fixed w-full bg-white shadow-sm z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Truck className="h-8 w-8 text-teal-600" />
            <span className="text-2xl font-bold text-teal-600">Loraic</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-600 hover:text-teal-600 transition-colors">Home</a>
            <a href="#" className="text-gray-600 hover:text-teal-600 transition-colors">Services</a>
            <a href="#" className="text-gray-600 hover:text-teal-600 transition-colors">Projects</a>
            <a href="#" className="text-gray-600 hover:text-teal-600 transition-colors">About</a>
            <a href="#" className="text-gray-600 hover:text-teal-600 transition-colors">Blog</a>
            <a href="#" className="text-gray-600 hover:text-teal-600 transition-colors">Contact</a>
          </nav>

          <button className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition-colors shadow-md hover:shadow-lg">
            Get a Quote
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;