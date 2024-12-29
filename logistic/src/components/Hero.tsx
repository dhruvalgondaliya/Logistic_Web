import React from 'react';

const Hero = () => {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-teal-50 to-teal-100">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Contact Us For A Seamless Inventory Transport Process
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Trust in our expertise to deliver your goods safely and efficiently. With years of experience and a commitment to excellence, we're your reliable partner in logistics.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-teal-600 text-white px-8 py-3 rounded-full hover:bg-teal-700 transition-all hover:shadow-lg">
              Get Started
            </button>
            <button className="border-2 border-teal-600 text-teal-600 px-8 py-3 rounded-full hover:bg-teal-50 transition-all">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;