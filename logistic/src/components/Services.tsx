import React from 'react';
import { Globe2, Shield, Truck } from 'lucide-react';

const services = [
  {
    icon: Truck,
    title: 'Complete Logistics',
    description: 'End-to-end logistics solutions tailored to your needs'
  },
  {
    icon: Globe2,
    title: 'Shipping Worldwide',
    description: 'Global reach with local expertise'
  },
  {
    icon: Shield,
    title: 'Safe Transportation',
    description: 'Your cargo's safety is our top priority'
  }
];

const Services = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Why we are considered the best in transportation business
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <service.icon className="w-12 h-12 text-teal-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;