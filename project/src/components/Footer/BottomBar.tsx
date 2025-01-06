import React from 'react';
import { Link } from 'react-router-dom';

const links = [
  { text: 'Privacy', to: '#' },
  { text: 'Terms & Conditions', to: '#' },
  { text: 'Site map', to: '#' },
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
    </div>
  </div>
);