import { motion } from 'framer-motion';
import { Truck, Package } from 'lucide-react';

export default function Loader() {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-teal-900 to-teal-800 flex items-center justify-center z-50">
      <div className="relative">
        {/* Animated Truck */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ 
            x: [null, 100, -100],
            opacity: [null, 1, 1]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="text-orange-500 mb-8"
        >
          <Truck size={48} />
        </motion.div>

        {/* Loading Track */}
        <div className="w-48 h-2 bg-teal-700 rounded-full overflow-hidden">
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              ease: "linear"
            }}
            className="w-full h-full bg-orange-500"
          />
        </div>

        {/* Floating Packages */}
        <div className="absolute -top-16 left-0">
          <motion.div
            animate={{ y: [-10, 10] }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 1
            }}
            className="text-teal-300"
          >
            <Package size={24} />
          </motion.div>
        </div>
        <div className="absolute -top-8 right-0">
          <motion.div
            animate={{ y: [-8, 8] }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 1.2
            }}
            className="text-teal-300"
          >
            <Package size={20} />
          </motion.div>
        </div>

        {/* Loading Text */}
        <motion.p
          animate={{ opacity: [0.5, 1] }}
          transition={{
            repeat: Infinity,
            duration: 0.8,
            repeatType: "reverse"
          }}
          className="text-white text-center mt-6 font-medium "
        >
          Loading...
        </motion.p>
      </div>
    </div>
  );
}