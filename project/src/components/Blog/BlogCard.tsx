import React from 'react';
import { motion } from 'framer-motion';

interface BlogCardProps {
  image: string;
  date: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  title: string;
  excerpt: string;
}

export default function BlogCard({ image, date, author, title, excerpt }: BlogCardProps) {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-xl overflow-hidden shadow-lg"
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute bottom-4 left-4">
          <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm">
            {date}
          </span>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center space-x-3 mb-4">
          <img 
            src={author.avatar} 
            alt={author.name}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h4 className="font-semibold text-gray-900">{author.name}</h4>
            <p className="text-sm text-gray-600">{author.role}</p>
          </div>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-orange-500 transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 mb-4">{excerpt}</p>
        <button className="text-orange-500 font-semibold hover:text-orange-600 transition-colors flex items-center">
          Read Article
          <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </motion.div>
  );
}