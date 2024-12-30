import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import TransportMode from './TransportMode';
import TestimonialCard from './TestimonialCard';

const transportModes = [
  {
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    alt: "Road Transport"
  },
  {
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    alt: "Air Freight"
  },
  {
    image: "https://images.unsplash.com/photo-1577494998872-b93a5a0c4428?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    alt: "Sea Freight"
  },
  {
    image: "https://images.unsplash.com/photo-1553413077-190dd305871c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    alt: "Rail Transport"
  }
];

const testimonials = [
  {
    quote: "I saved over 50% using LogiTrans over my previous provider. The customer support staff was very helpful. I will definitely be using LogiTrans for all my future shipments. Thank you!!!",
    author: "Rachel Ballinger",
    position: "CEO, Bizzbreak Inc.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
  },
  {
    quote: "Outstanding service and reliability. LogiTrans has transformed our supply chain efficiency.",
    author: "Michael Chen",
    position: "Operations Director, Global Tech",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 bg-teal-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:20px_20px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Transport Modes Grid */}
          <div className="grid grid-cols-2 gap-6">
            {transportModes.map((mode, index) => (
              <TransportMode key={index} {...mode} />
            ))}
          </div>

          {/* Testimonials */}
          <div>
            <div className="mb-8">
              <span className="bg-orange-400 text-white px-4 py-1 rounded-full text-sm font-semibold">
                TESTIMONIAL
              </span>
              <h2 className="text-3xl font-bold text-white mt-4 mb-2">
                What our clients say about our service
              </h2>
              <p className="text-teal-100">
                LogiTrans delivers the knowledge & opportunity to optimize every shipment
              </p>
            </div>

            <div className="relative">
              <AnimatePresence mode="wait">
                <TestimonialCard key={currentIndex} {...testimonials[currentIndex]} />
              </AnimatePresence>

              <div className="flex space-x-4 mt-6">
                <button
                  onClick={prev}
                  className="p-2 rounded-full bg-teal-800 hover:bg-teal-700 transition-colors"
                >
                  <ChevronLeft className="h-6 w-6 text-white" />
                </button>
                <button
                  onClick={next}
                  className="p-2 rounded-full bg-teal-800 hover:bg-teal-700 transition-colors"
                >
                  <ChevronRight className="h-6 w-6 text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}