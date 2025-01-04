import React from 'react';
import ServiceCard from './ServiceCard1';
import { services } from './services';

const ServicesSection1: React.FC = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-12 h-[2px] bg-orange-300"></div>
            <h2 className="text-orange-500 font-semibold uppercase tracking-wider">Our Services</h2>
            <div className="w-12 h-[2px] bg-orange-300"></div>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
            We provide the necessary<br />services to you
          </h3>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              Icon={service.Icon}
              imageUrl={service.imageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection1;