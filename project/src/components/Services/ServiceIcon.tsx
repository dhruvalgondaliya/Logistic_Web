import React from 'react';

interface ServiceIconProps {
  children: React.ReactNode;
}

export default function ServiceIcon({ children }: ServiceIconProps) {
  return (
    <div className="relative">
      <div className="w-16 h-16 flex items-center justify-center">
        <div className="absolute inset-0 bg-orange-500/20 rounded-lg transform rotate-12" />
        <div className="absolute inset-0 bg-teal-500/20 rounded-lg transform -rotate-12" />
        <div className="relative text-orange-500">
          {children}
        </div>
      </div>
    </div>
  );
}