import { motion } from 'framer-motion';

interface TransportModeProps {
  image: string;
  alt: string;
}

export default function TransportMode({ image, alt }: TransportModeProps) {
  return (
    <motion.div
      className="relative h-0 pb-[100%] md:w-96 md:h-96 "
    >
      <img
        src={image}
        alt={alt}
        className="absolute inset-0 w-full h-full object-cover rounded-xl mx-auto"
      />
    </motion.div>
  );
}
