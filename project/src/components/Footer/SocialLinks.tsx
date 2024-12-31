import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const socialLinks = [
  { Icon: Facebook, href: '#', label: 'Facebook' },
  { Icon: Twitter, href: '#', label: 'Twitter' },
  { Icon: Linkedin, href: '#', label: 'LinkedIn' },
  { Icon: Instagram, href: '#', label: 'Instagram' },
];

export default function SocialLinks() {
  return (
    <div className="flex space-x-4">
      {socialLinks.map(({ Icon, href, label }) => (
        <a
          key={label}
          href={href}
          aria-label={label}
          className="text-gray-400 hover:text-orange-500 transition-colors"
        >
          <Icon className="h-6 w-6" />
        </a>
      ))}
    </div>
  );
}