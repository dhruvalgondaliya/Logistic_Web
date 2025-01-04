import { motion } from "framer-motion";
import { Truck, Shield, Plane, Building2 } from "lucide-react";
import ServiceCard from "./ServiceCard";

const services = [
  {
    icon: Truck,
    title: "Land Freight Transportation",
    href: "#land-freight",
  },
  {
    icon: Shield,
    title: "Logistics Insurance",
    href: "#insurance",
  },
  {
    icon: Plane,
    title: "Air Freight Transportation",
    href: "#air-freight",
  },
  {
    icon: Building2,
    title: "Warehouse Support",
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
            backgroundImage: "url('https://firebasestorage.googleapis.com/v0/b/fir-crud-beb70.appspot.com/o/bg2-ft.webp?alt=media&token=642027db-1f14-423b-97ba-26790d03bdbd')",
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
            Loraic Air freight service delivers the knowledge & opportunity to
            optimize every mile on every lane. Get full-service Truckload
            division provides more options to manage costs by combining
            technology intelligence.
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
