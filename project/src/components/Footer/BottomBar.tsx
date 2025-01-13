import React from 'react';
import { Link } from 'react-router-dom';
// import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const links = [
  { text: 'Privacy', to: '#' },
  { text: 'Terms & Conditions', to: '#' },
  { text: 'Contact', to: '/contact' }
];

export const BottomBar: React.FC = () => (
  <div className="border-t border-gray-700 py-4 mt-8">
    <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-gray-300 text-sm">
      <p>© 2025 NorthPole Gateway / All rights reserved</p>
      <div className="flex gap-4 mt-4 md:mt-0">
        {links.map((link, index) => (
          <React.Fragment key={link.text}>
            <Link to={link.to} className="hover:text-white transition-colors">
              {link.text}
            </Link>
            {index < links.length - 1 && <span>|</span>}
          </React.Fragment>
        ))}
      </div>
      {/* <div className="flex gap-4 mt-4 md:mt-0">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-80 transition-opacity"
        >
          <FaFacebook size={24} color="#1877F2" />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-80 transition-opacity"
        >
          <FaTwitter size={24} color="#1DA1F2" />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-80 transition-opacity"
        >
          <FaInstagram size={24} color="#E1306C" />
        </a>
      </div> */}
    </div>
  </div>
);
