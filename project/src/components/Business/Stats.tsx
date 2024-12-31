import React from 'react';
import { motion } from 'framer-motion';
import { Users, Globe, Award, TrendingUp } from 'lucide-react';

const stats = [
  { icon: Users, label: 'Happy Clients', value: '2,500+' },
  { icon: Globe, label: 'Countries Served', value: '50+' },
  { icon: Award, label: 'Awards Won', value: '100+' },
  { icon: TrendingUp, label: 'Projects Completed', value: '5,000+' }
];

export default function Stats() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="text-center group"
        >
          <div className="inline-block p-4 rounded-full bg-teal-50 group-hover:bg-teal-100 transition-colors">
            <stat.icon className="h-8 w-8 text-teal-600" />
          </div>
          <h4 className="mt-4 text-2xl font-bold text-gray-900">{stat.value}</h4>
          <p className="text-gray-600">{stat.label}</p>
        </motion.div>
      ))}
    </div>
  );
}