import { motion } from "framer-motion";
import { Truck, Shield, Plane, Building2 } from "lucide-react";
import ServiceCard from "./ServiceCard";

const services = [
  {
    icon: Truck,
    title: "Xyz",
    href: "#land-freight",
  },
  {
    icon: Shield,
    title: "Xyz",
    href: "#insurance",
  },
  {
    icon: Plane,
    title: "Xyx",
    href: "#air-freight",
  },
  {
    icon: Building2,
    title: "Warehouse Services",
    href: "#warehouse",
  },
];

export default function ServicesSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url(' https://firebasestorage.googleapis.com/v0/b/fir-crud-beb70.appspot.com/o/bg3-h6.jpg?alt=media&token=d2b58599-5e50-4c2a-82ba-86e5cd7c5800')",
            backgroundSize: "cover",
            backgroundPosition: "center",
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
          NorthPole Gateway offers cutting-edge warehousing solutions that optimize storage and streamline inventory management, ensuring your goods are secure, organized, and ready for success.

          {/* if needs new paragraph add a new */}
          {/* NorthPole Gateway provides advanced warehousing solutions designed to streamline your inventory management and optimize storage efficiency. With state-of-the-art facilities and cutting-edge technology, we ensure your goods are secure, organized, and ready to meet your business needs, opening new horizons for operational excellence. */}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ServiceCard
                icon={<service.icon className="w-8 h-8 text-orange-500" />}
                title={service.title}
                href={service.href}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
