import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { value: '5 star', label: 'Ranked Company' },
  { value: '150+', label: 'Successful Logistics' }
];

export default function AboutStats() {
  return (
    <div className="grid grid-cols-2 gap-8">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2 }}
        >
          <div className="text-4xl font-bold text-teal-900 mb-2">{stat.value}</div>
          <div className="text-gray-600">{stat.label}</div>
        </motion.div>
      ))}
    </div>
  );
}