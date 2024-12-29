import React from 'react';
import { Package, Truck, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: Package,
    title: 'Step 1: Receive Packages',
    description: 'We carefully receive and document all packages'
  },
  {
    icon: Truck,
    title: 'Step 2: Transport Packages',
    description: 'Safe and efficient transportation to destination'
  },
  {
    icon: CheckCircle,
    title: 'Step 3: Deliver Packages',
    description: 'Timely delivery with proof of receipt'
  }
];

const Process = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          We always follow the best ways of logistics
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="flex flex-col items-center text-center p-6 opacity-0 animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <step.icon className="w-16 h-16 text-teal-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Process;