import  { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import CaseStudyCard from './CaseStudyCard';

const caseStudies = [
  {
    title: 'Global Supply Chain Optimization',
    description: 'How we helped a multinational retailer reduce shipping costs by 30%',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Supply Chain'
  },
  {
    title: 'Last-Mile Delivery Innovation',
    description: 'Implementing smart routing for improved delivery efficiency',
    image: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Delivery'
  },
  {
    title: 'Warehouse Automation Success',
    description: 'Modernizing warehouse operations with robotics and AI',
    image: 'https://images.unsplash.com/photo-1586528116493-ce9d0a78f084?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Automation'
  }
];

export default function CaseStudies() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % caseStudies.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
  };

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Success Stories
          </h2>
          <p className="text-gray-600">
            Discover how we've helped businesses transform their logistics operations
          </p>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              className="grid md:grid-cols-3 gap-8"
            >
              {[0, 1, 2].map((offset) => {
                const index = (currentIndex + offset) % caseStudies.length;
                return <CaseStudyCard key={index} {...caseStudies[index]} />;
              })}
            </motion.div>
          </AnimatePresence>

          <div className="absolute top-1/2 -left-4 -translate-y-1/2">
            <button
              onClick={prev}
              className="p-2 rounded-full bg-white shadow-lg hover:bg-gray-50 transition-colors"
            >
              <ChevronLeft className="h-6 w-6 text-gray-600" />
            </button>
          </div>

          <div className="absolute top-1/2 -right-4 -translate-y-1/2">
            <button
              onClick={next}
              className="p-2 rounded-full bg-white shadow-lg hover:bg-gray-50 transition-colors"
            >
              <ChevronRight className="h-6 w-6 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}