import { motion } from 'framer-motion';
import { Shield, Clock, Truck } from 'lucide-react';

const values = [
  {
    icon: Shield,
    title: 'Reliability',
    description: 'We deliver on our promises with consistency and precision.'
  },
  {
    icon: Clock,
    title: 'Efficiency',
    description: 'Optimized solutions that save time and reduce costs.'
  },
  {
    icon: Truck,
    title: 'Innovation',
    description: 'Leveraging technology for smarter logistics solutions.'
  }
];

export default function About() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Leading the Way in Global Logistics Solutions
            </h2>
            <p className="text-gray-600 mb-8">
              With over two decades of experience, we've built a reputation for excellence
              in logistics and supply chain management. Our commitment to innovation and
              customer satisfaction drives everything we do.
            </p>
            <div className="space-y-6">
              {values.map((value) => (
                <motion.div
                  key={value.title}
                  className="flex items-start space-x-4"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="p-2 bg-teal-100 rounded-lg">
                    <value.icon className="h-6 w-6 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
              alt="Logistics Operations"
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-transparent rounded-lg" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}