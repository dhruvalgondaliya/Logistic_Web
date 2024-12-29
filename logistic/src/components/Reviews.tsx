import React, { useState, useEffect } from 'react';
import { Star } from 'lucide-react';

const reviews = [
  {
    name: 'John Smith',
    role: 'Supply Chain Manager',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    text: 'Exceptional service! The team at Loraic went above and beyond to ensure our shipments arrived safely and on time.',
    rating: 5
  },
  {
    name: 'Sarah Johnson',
    role: 'Operations Director',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    text: 'Professional, reliable, and efficient. Their logistics solutions have significantly improved our supply chain.',
    rating: 5
  },
  {
    name: 'Michael Chen',
    role: 'Logistics Coordinator',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    text: 'Outstanding customer service and attention to detail. Highly recommended for all logistics needs.',
    rating: 5
  }
];

const Reviews = () => {
  const [currentReview, setCurrentReview] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!isPaused) {
      const timer = setInterval(() => {
        setCurrentReview((prev) => (prev + 1) % reviews.length);
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [isPaused]);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          What our clients say about our service
        </h2>
        
        <div 
          className="max-w-3xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="relative">
            <div 
              className="flex transition-transform duration-500 ease-in-out overflow-hidden"
              style={{ transform: `translateX(-${currentReview * 100}%)` }}
            >
              {reviews.map((review, index) => (
                <div 
                  key={index}
                  className="w-full flex-shrink-0 p-8 bg-white rounded-xl shadow-lg border-2 border-teal-100"
                >
                  <div className="flex items-center mb-6">
                    <img 
                      src={review.image} 
                      alt={review.name}
                      className="w-16 h-16 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{review.name}</h3>
                      <p className="text-gray-600">{review.role}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-4">{review.text}</p>
                  
                  <div className="flex space-x-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center mt-6 space-x-2">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentReview(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentReview === index ? 'bg-teal-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Reviews;