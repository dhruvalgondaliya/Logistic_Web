import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  href: string;
}

export default function ServiceCard({ icon, title, href }: ServiceCardProps) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="group relative p-8 rounded-xl transition-transform duration-300 overflow-hidden border-r-2 border-l-2 hover:border-0"
    >
      {/* Default Background (Solid Color) */}
      <div
        className="absolute inset-0 transition-opacity duration-300"
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      {/* Hover Background (Image) */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          backgroundImage: `url('./src/image/bg-icb.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 h-56">
        <div className="mb-6 pt-6">
          {/* Icon changes color on card hover */}
          <div className="inline-block group-hover:text-orange-400 transition-colors duration-300">
            {icon}
          </div>
        </div>
        <h3 className="text-xl font-bold text-white mb-4 group-hover:text-orange-400">
          {title}
        </h3>

        {/* Arrow Right with "Read More" */}
        {/* <div className="flex items-center space-x-2 group-hover:text-orange-400 transition-colors duration-300">
          <a
            href={href}
            className="inline-flex items-center text-white bg-orange-400 p-2 rounded-full group-hover:bg-orange-500 transition-all duration-300"
          >
            <ArrowRight className="h-5 w-5" />
          </a>
          <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Read More
          </span>
        </div> */}
      </div>
    </motion.div>
  );
}
