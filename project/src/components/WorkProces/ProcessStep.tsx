import { motion } from 'framer-motion';

interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
  image: string;
}

export default function ProcessStep({ number, title, description, image }: ProcessStepProps) {
  return (
    <motion.div 
      className="relative pb-2"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.4 }}
    >
      <div className="relative rounded-2xl overflow-hidden shadow-xl">
        <img 
          src={image} 
          alt={title}
          className="w-full h-64 object-cover transform transition-transform duration-700 hover:scale-110"
        />
        <div className="absolute inset-0 " />
        
        {/* Number Badge */}
        <div className="absolute -left-3 -top-3 w-16 h-16 bg-orange-500 rounded-2xl rotate-12 flex items-center justify-center shadow-lg">
          <span className="text-2xl font-bold text-white -rotate-12">{number}</span>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-2xl font-bold text-teal-900 mb-4">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}