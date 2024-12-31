import { motion } from 'framer-motion';
import Stats from './Stats';

export default function Business() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Driving Business Growth Through Logistics Excellence
          </h2>
          <p className="text-gray-600">
            Our innovative solutions and dedicated team help businesses optimize their supply chain
            and achieve sustainable growth.
          </p>
        </motion.div>
        <Stats />
      </div>
    </section>
  );
}