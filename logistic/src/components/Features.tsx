import React from 'react';
import { Truck, Shield, Plane, Warehouse } from 'lucide-react';

const features = [
  {
    icon: Truck,
    title: 'Land Freight Transportation',
    description: 'Efficient and reliable ground transportation solutions'
  },
  {
    icon: Shield,
    title: 'Logistics Insurance',
    description: 'Complete coverage for your peace of mind'
  },
  {
    icon: Plane,
    title: 'Air Freight Transportation',
    description: 'Fast and secure air freight services worldwide'
  },
  {
    icon: Warehouse,
    title: 'Warehouse Support',
    description: 'Modern storage solutions for your goods'
  }
];

const Features = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Why we are considered the best in business
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="p-6 rounded-xl bg-white border border-gray-100 hover:shadow-xl transition-all hover:scale-105 group"
            >
              <feature.icon className="w-12 h-12 text-teal-600 group-hover:text-teal-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;