import { motion } from 'framer-motion';
import ProcessStep from './ProcessStep';

const steps = [
  {
    number: 1,
    title: "Step 1: Receive Packages",
    description: "Loraic Air freight service deliver to know ledge & opportunity to optimize Logisco Air freight service deliver to know ledge and opportunity to optimize.",
    image: "./src/image/ab3.webp",
  },
  {
    number: 2,
    title: "Step 2: Transport Packages",
    description: "Loraic Air freight service deliver to know ledge & opportunity to optimize Logisco Air freight service deliver to know ledge and opportunity to optimize.",
    image: "./src/image/ab4.webp",
  },
  {
    number: 3,
    title: "Step 3: Deliver Packages",
    description: "Loraic Air freight service deliver to know ledge & opportunity to optimize Logisco Air freight service deliver to know ledge and opportunity to optimize.",
    image: "./src/image/ab5.webp",
  }
];



export default function WorkProcessSection() {
  return (
    <section
      className="py-24 relative overflow-hidden bg-gradient-to-b from-white to-gray-50"
      style={{
        backgroundImage: "url('./src/image/bg_workprocess.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
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
          <span className="inline-block bg-orange-400 text-white px-6 py-2 rounded-full text-sm font-semibold mb-6">
            OUR WORK PROCESS
          </span>
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl text-lg py-2">
            We always follow the best
            <br />
            ways of logistics
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Loraic Air freight service deliver the knowledge & opportunity to optimize every
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
              <ProcessStep key={index} {...step} />
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
