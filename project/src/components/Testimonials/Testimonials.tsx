import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import TransportMode from './TransportMode';
import TestimonialCard from './TestimonialCard';
import { transportModes, testimonials } from './constants';

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