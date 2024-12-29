import React from 'react';

const CallToAction = () => {
  return (
    <section className="py-16 bg-teal-600">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-8">
          We ensure safe transportation & delivery
        </h2>
        
        <button className="bg-orange-500 text-white px-8 py-3 rounded-full hover:bg-orange-600 transition-all hover:shadow-lg transform hover:-translate-y-1">
          Get Started Now
        </button>
      </div>
    </section>
  );
}

export default CallToAction;