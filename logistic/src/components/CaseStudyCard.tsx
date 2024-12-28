import React from 'react';

interface CaseStudyCardProps {
  image: string;
  title: string;
  category: string;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ image, title, category }) => {
  return (
    <div className="group relative overflow-hidden rounded-lg cursor-pointer">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
        <span className="text-orange-400 text-sm mb-2">{category}</span>
        <h3 className="text-white text-xl font-semibold">{title}</h3>
      </div>
    </div>
  );
};

export default CaseStudyCard;