import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  href: string;
}

export default function ServiceCard({ icon, title, href }: ServiceCardProps) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="group relative p-8 bg-teal-900/10 hover:bg-teal-900 rounded-xl transition-colors duration-300"
    >
      <div className="mb-6">
        <div className="inline-block">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-bold text-white mb-4 group-hover:text-orange-400">
        {title}
      </h3>
      <a 
        href={href}
        className="inline-flex items-center text-orange-400 group-hover:text-white"
      >
        <ArrowRight className="h-5 w-5" />
      </a>
    </motion.div>
  );
}