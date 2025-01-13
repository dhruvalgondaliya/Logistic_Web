import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import TransportMode from "./TransportMode";
import TestimonialCard from "./TestimonialCard";

const transportModes = [
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/fir-crud-beb70.appspot.com/o/Testimonial.jpg?alt=media&token=8313824e-471b-4ba9-add4-7085137c3d12",
    alt: "testimonials image "
  }
];

const testimonials = [
  {
    quote:
      "I saved over 50% using  over my previous provider. The customer support staff was very helpful. I will definitely be using  for all my future shipments. Thank you!!!",
    author: "Rachel Ballinger",
    position: "CEO, Bizzbreak Inc.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
  },
  {
    quote:
      "Outstanding service and reliability.  has transformed our supply chain efficiency.",
    author: "Michael Chen",
    position: "Operations Director, Global Tech",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section
      className="py-24 relative overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://firebasestorage.googleapis.com/v0/b/fir-crud-beb70.appspot.com/o/bg-h6.jpg?alt=media&token=94136f7f-13dd-40e3-a836-757827503293')"
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Transport Modes Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {transportModes.map((mode, index) => (
              <div key={index} className="w-full max-w-full mx-auto">
                <TransportMode {...mode} />
              </div>
            ))}
          </div>

          {/* Testimonials */}
          <div>
            <div className="mb-8">
              <span className="bg-orange-400 text-white px-4 py-1 rounded-full text-sm font-semibold">
                TESTIMONIAL
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mt-4 mb-2">
                What our clients say about our service
              </h2>
              <p className="text-teal-100">
                 delivers the knowledge & opportunity to optimize every shipment
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
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="h-6 w-6 text-white" />
                </button>
                <button
                  onClick={next}
                  className="p-2 rounded-full bg-teal-800 hover:bg-teal-700 transition-colors"
                  aria-label="Next testimonial"
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
