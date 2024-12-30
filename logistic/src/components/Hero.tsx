import { Truck } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-teal-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 space-y-8 animate-fade-in">
            <h1 className="text-4xl lg:text-6xl font-bold">
              Contact Us For A Seamless Inventory Transport Process
            </h1>
            <p className="text-lg text-teal-100">
              We deliver excellence in logistics solutions with reliability and precision
            </p>
            <button className="bg-orange-500 hover:bg-orange-600 transition-colors px-8 py-3 rounded-full font-semibold">
              Get Started
            </button>
          </div>
          <div className="lg:w-1/2 mt-12 lg:mt-0">
            <div className="relative animate-float">
              <Truck size={48} className="text-orange-500 absolute -top-6 -left-6" />
              <img
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Logistics Hero"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}