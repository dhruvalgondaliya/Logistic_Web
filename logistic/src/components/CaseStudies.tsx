import React, { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const cases = [
  {
    title: 'Rail Transportation for United Nations',
    image: 'https://images.unsplash.com/photo-1527949733110-b5f7e7773f87?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
  },
  {
    title: 'Mail Transportation for United Nations',
    image: 'https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
  },
  {
    title: 'Shipping Large Cargo from China',
    image: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
  }
];

const CaseStudies = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % cases.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + cases.length) % cases.length);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Best Cases by Loraic
        </h2>
        
        <div className="relative">
          <div className="overflow-hidden rounded-xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {cases.map((case_, index) => (
                <div key={index} className="w-full flex-shrink-0 relative group">
                  <img 
                    src={case_.image} 
                    alt={case_.title}
                    className="w-full h-[400px] object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end p-8">
                    <h3 className="text-white text-2xl font-semibold">{case_.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100"
          >
            <ArrowRight className="w-6 h-6" />
          </button>
          
          <div className="flex justify-center mt-4 space-x-2">
            {cases.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentSlide === index ? 'bg-teal-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CaseStudies;