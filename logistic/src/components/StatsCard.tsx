import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StatsCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const StatsCard: React.FC<StatsCardProps> = ({ icon: Icon, title, description }) => {
  return (
    <div className="text-center p-6 bg-white rounded-lg shadow hover:shadow-lg transition-all">
      <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
        <Icon className="w-6 h-6 text-teal-600" />
      </div>
      <h3 className="text-2xl font-bold text-gray-800 mb-1">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default StatsCard;