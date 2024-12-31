import React from 'react';
import { motion } from 'framer-motion';
import { Truck, Shield, Plane, Building2 } from 'lucide-react';
import ServiceCard from './ServiceCard';
import ServiceIcon from './ServiceIcon';

const services = [
  {
    icon: <Truck className="w-8 h-8" />,
    title: 'Land Freight Transportation',
    href: '#land-freight'
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: 'Logistics Insurance',
    href: '#insurance'
  },
  {
    icon: <Plane className="w-8 h-8" />,
    title: 'Air Freight Transportation',
    href: '#air-freight'
  },
  {
    icon: <Building2 className="w-8 h-8" />,
    title: 'Warehouse Support',
    href: '#warehouse'
  }
];

export default function ServicesSection() {
  return (
    <section className="relative py-24 bg-teal-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[length:40px_40px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
            WHY CHOOSE US
          </span>
          <h2 className="text-4xl font-bold text-white mb-6">
            Why we are considered the<br />best in business
          </h2>
          <p className="text-teal-100 max-w-3xl mx-auto">
            Loraic Air freight service deliver the knowledge & opportunity to optimize every mile on every lane. 
            Get fullservice Truckload division provide more options to manage costs by combining technology intelligence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ServiceCard
                icon={<ServiceIcon>{service.icon}</ServiceIcon>}
                title={service.title}
                href={service.href}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}