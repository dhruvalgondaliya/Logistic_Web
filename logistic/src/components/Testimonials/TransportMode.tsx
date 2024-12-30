import { motion } from 'framer-motion';

interface TransportModeProps {
  image: string;
  alt: string;
}

export default function TransportMode({ image, alt }: TransportModeProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="relative rounded-full overflow-hidden border-4 border-orange-400 aspect-square"
    >
      <img
        src={image}
        alt={alt}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
    </motion.div>
  );
}