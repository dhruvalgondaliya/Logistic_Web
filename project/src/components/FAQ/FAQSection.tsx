import { motion } from 'framer-motion';
import FAQAccordion from './FAQAccordion';

export default function FAQSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute right-0 top-0 w-1/3 h-full">
          <div className="w-full h-full " />
        </div>
        <div className="absolute left-0 bottom-0">
          <svg width="200" height="200" viewBox="0 0 200 200" fill="none">
            <path
              d="M0 200L200 0M20 200L200 20M40 200L200 40"
              stroke="#FF6B2C"
              strokeWidth="0.5"
              strokeOpacity="0.2"
            />
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block bg-orange-500 text-white px-6 py-2 rounded-full text-sm font-semibold mb-6">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-teal-900 mb-6">
              Do you have<br />
              any question?<br />
              Find answer here
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Some frequently asked questions about<br />
              Loraic's cargo services
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <FAQAccordion />
          </motion.div>
        </div>
      </div>
    </section>
  );
}