import { motion } from "framer-motion";
import { Truck, Shield, Plane, Building2 } from "lucide-react";
import ServiceCard from "./ServiceCard";

const services = [
  {
    icon: Truck,
    title: "Strategic Location Advantage",
    description:
      "Strategically located at key distribution points, offering seamless connectivity and reduced transportation costs for your supply chain.",
    href: "#land-freight"
  },
  {
    icon: Shield,
    title: "Tech-Powered Inventory Excellence",
    description:
      "Real-time inventory tracking and automated management systems ensure 99.9% accuracy and instant visibility of your goods.",
    href: "#insurance"
  },
  {
    icon: Plane,
    title: "Flexible Scaling Solutions",
    description:
      "From startups to enterprises, our scalable storage solutions grow with your business.",
    href: "#air-freight"
  },
  {
    icon: Building2,
    title: "End-to-End Security",
    description:
      "24/7 surveillance, controlled access, and advanced monitoring systems protect your valuable inventory around the clock.",
    href: "#warehouse"
  }
];

export default function ServicesSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url('https://firebasestorage.googleapis.com/v0/b/fir-crud-beb70.appspot.com/o/bg3-h6.jpg?alt=media&token=d2b58599-5e50-4c2a-82ba-86e5cd7c5800')",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
            WHY CHOOSE US
          </span>
          <h2 className="text-4xl font-bold text-white mb-6">
            Why we are considered the
            <br />
            best in business
          </h2>
          <p className="text-teal-100 max-w-3xl mx-auto">
            NorthPole Gateway offers cutting-edge warehousing solutions that
            optimize storage and streamline inventory management, ensuring your
            goods are secure, organized, and ready for success.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={<service.icon className="w-8 h-8 text-orange-500" />}
              title={service.title}
              description={service.description}
              href={service.href}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
