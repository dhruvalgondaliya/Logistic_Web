// src/components/LinkSection.tsx

import React from 'react';
import { Link } from 'react-router-dom';
import { LinkSectionProps } from './types';

export const LinkSection: React.FC<LinkSectionProps> = ({ title, links }) => (
  <div>
    <h3 className="text-xl font-bold text-white">{title}</h3>
    <ul className="mt-4">
      {links.map((link) => (
        <li key={link} className="flex items-center gap-2">
          <span className="text-orange-500 text-3xl ">→</span>
          <Link 
            to={`/${link.toLowerCase().replace(' ', '-')}`} 
            className="text-teal-100 hover:text-orange-500 flex items-center"
          >
            <span>{link}</span>
          </Link>
        </li>
      ))}
    </ul>
  </div>
);
