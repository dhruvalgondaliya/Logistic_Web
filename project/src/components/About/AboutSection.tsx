import React from 'react';
import { motion } from 'framer-motion';
import { Package, Truck } from 'lucide-react';
import AboutFeature from './AboutFeature';
import AboutStats from './AboutStats';

export default function AboutSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-teal-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
              ABOUT LORAIC
            </span>
            
            <h2 className="text-4xl font-bold text-teal-900 mb-8">
              Loraic Transportation<br />
              Introducing The most Modern<br />
              way of Transportation
            </h2>

            <div className="space-y-8 mb-12">
              <AboutFeature
                icon={<Package className="w-8 h-8" />}
                title="Cost Optimization"
                description="Knowledge & Data To Optimize Cost"
              />
              <AboutFeature
                icon={<Truck className="w-8 h-8" />}
                title="Expert Truckload"
                description="Get Full-Service From Truckload Section"
              />
            </div>

            <p className="text-gray-600 mb-12">
              Loraic Air freight service deliver the knowledge & opportunity to optimize every mile 
              on every lane. Get full-service Truckload division provide more options to manage 
              global Logistics for you.
            </p>

            <AboutStats />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                    alt="Air Transport"
                    className="rounded-2xl"
                  />
                  <div className="absolute top-4 right-4 bg-orange-500 text-white p-4 rounded-xl">
                    <div className="text-4xl font-bold">20</div>
                    <div className="text-sm">Years of<br />Experience</div>
                  </div>
                </div>
                <img
                  src="https://images.unsplash.com/photo-1577494998872-b93a5a0c4428?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Container Transport"
                  className="rounded-2xl"
                />
              </div>
              <div className="mt-8">
                <img
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Team"
                  className="rounded-2xl h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}