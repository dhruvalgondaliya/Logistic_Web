import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  Icon: LucideIcon;
  imageUrl: string;
}

const ServiceCard1: React.FC<ServiceCardProps> = ({ title, Icon, imageUrl }) => {
  return (
    <div className="relative group overflow-hidden rounded-lg">
      <div className="aspect-square">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t hover:from-orange-600 to-transparent opacity-90 group-hover:opacity-95 transition-opacity"></div>
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <div className="bg-white rounded-full hover:bg-white w-16 h-16 flex items-center justify-center mb-4 group-hover:bg-white-500 transition-colors">
          <Icon className="w-8 h-8 text-orange-600 group-hover:text-orange transition-colors" />
        </div>
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
    </div>
  );
};

export default ServiceCard1;