import React from 'react';
import { Truck, Search } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Truck className="h-8 w-8 text-teal-500" />
              <span className="text-2xl font-bold">Loraic</span>
            </div>
            <p className="text-gray-400">
              Your trusted partner in global logistics and transportation solutions.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white hover:underline">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white hover:underline">Services</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white hover:underline">Projects</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white hover:underline">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-gray-400">
              <li>123 Logistics Street</li>
              <li>New York, NY 10001</li>
              <li>contact@loraic.com</li>
              <li>+1 (555) 123-4567</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Track Your Shipment</h3>
            <div className="relative">
              <input
                type="text"
                placeholder="Enter tracking number"
                className="w-full px-4 py-2 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2">
                <Search className="text-gray-400 hover:text-white" />
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} Loraic Transportation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;