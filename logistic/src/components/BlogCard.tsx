import React from 'react';

interface BlogCardProps {
  image: string;
  title: string;
  date: string;
  excerpt: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ image, title, date, excerpt }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <span className="text-sm text-gray-500">{date}</span>
        <h3 className="text-xl font-semibold mt-2 mb-3">{title}</h3>
        <p className="text-gray-600">{excerpt}</p>
        <button className="mt-4 text-teal-600 font-semibold hover:text-teal-700">
          Read More →
        </button>
      </div>
    </div>
  );
};

export default BlogCard;