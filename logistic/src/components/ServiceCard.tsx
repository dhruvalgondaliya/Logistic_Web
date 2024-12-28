import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon: Icon, title, description }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
      <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-teal-600" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default ServiceCard;