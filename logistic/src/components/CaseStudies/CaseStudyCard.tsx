import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface CaseStudyProps {
  title: string;
  description: string;
  image: string;
  category: string;
}

export default function CaseStudyCard({ title, description, image, category }: CaseStudyProps) {
  return (
    <motion.div
      className="group relative overflow-hidden rounded-xl bg-white shadow-lg"
      whileHover={{ y: -10 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="aspect-w-16 aspect-h-9 relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>
      <div className="p-6">
        <span className="inline-block px-3 py-1 text-sm font-semibold text-teal-600 bg-teal-50 rounded-full mb-4">
          {category}
        </span>
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <button className="flex items-center text-teal-600 hover:text-teal-700 transition-colors">
          Read More <ArrowRight className="ml-2 h-4 w-4" />
        </button>
      </div>
    </motion.div>
  );
}