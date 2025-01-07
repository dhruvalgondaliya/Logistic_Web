import { useState } from 'react';
import { motion } from "framer-motion";
import ProcessStep from './ProcessStep';

const steps = [
  {
    number: 1,
    title: "Step 1: Warehouse Storage",
    description:
      "At NorthPole Gateway, we begin by assessing your storage needs to create a customized solution. Our flexible, secure storage options and advanced technology optimize space, inventory management, and accessibility",
    image:
      "https://firebasestorage.googleapis.com/v0/b/fir-crud-beb70.appspot.com/o/WorkP1.webp?alt=media&token=12d49599-1144-4553-808a-aaa08df6e988"
  },
  {
    number: 2,
    title: "Step 2: Preparing Order",
    description:
      "Once storage is optimized, we move to the order preparation stage. At NorthPole Gateway, we ensure accurate picking, packing, and labeling of your products, using efficient processes and real-time tracking to guarantee timely and error-free order fulfillment.",
    image:
      "https://firebasestorage.googleapis.com/v0/b/fir-crud-beb70.appspot.com/o/WorkP2.webp?alt=media&token=c236ffc1-0398-4059-ae2c-b974143a6c95"
  },
  {
    number: 3,
    title: "Step 3: Ship the Order",
    description:
      "After preparing the order, we focus on timely and secure shipping. NorthPole Gateway ensures fast, reliable delivery through trusted logistics partners, tracking shipments every step of the way to ensure your products reach their destination on time.",
    image:
      "https://firebasestorage.googleapis.com/v0/b/fir-crud-beb70.appspot.com/o/WorkP3.webp?alt=media&token=52316103-fcc0-4675-9cae-05b0faed23f7"
  }
];

export default function WorkProcessSection() {
  const [imageLoading, setImageLoading] = useState<boolean[]>(new Array(steps.length).fill(true));

  const handleImageLoad = (index: number) => {
    const newLoadingState = [...imageLoading];
    newLoadingState[index] = false;
    setImageLoading(newLoadingState);
  };

  return (
    <section
      className="py-24 relative overflow-hidden bg-gradient-to-b from-white to-gray-50"
      style={{
        backgroundImage:
          "url('https://firebasestorage.googleapis.com/v0/b/fir-crud-beb70.appspot.com/o/bg_workprocess.jpg?alt=media&token=de050f80-b1b9-4430-bfa3-1eb64899add5')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      {/* Background Patterns */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 " />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block bg-orange-400 text-white px-6 py-2 rounded-full text-sm font-semibold mb-3">
            OUR WORK PROCESS
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 sm:text-4xl text-lg py-2 leading-tight sm:leading-snug md:leading-normal">
            Optimized Warehousing Solutions
            <br />
            for Efficient Storage
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            NorthPole Gateway offers expert warehousing services, providing the knowledge and tools to optimize storage and inventory management for your business.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connecting Lines */}
          <svg
            className="absolute top-1/2 left-0 w-full h-24 -translate-y-1/2 hidden lg:block"
            preserveAspectRatio="none"
          >
            <motion.path
              d="M0,32 C250,-32 750,96 1000,32"
              fill="none"
              stroke="url(#gradient)"
              strokeWidth="4"
              strokeDasharray="8 8"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5 }}
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#FF6B2C" />
                <stop offset="100%" stopColor="#0D9488" />
              </linearGradient>
            </defs>
          </svg>

          {/* Process Steps */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <ProcessStep
                key={index}
                number={step.number}
                title={step.title}
                description={step.description}
                image={step.image}
                onImageLoad={() => handleImageLoad(index)} // Pass onImageLoad to each ProcessStep
              />
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl" />
    </section>
  );
}
