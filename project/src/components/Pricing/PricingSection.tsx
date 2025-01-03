import { motion } from "framer-motion";
import PricingBadge from "./PricingBadge";
import PricingCard from "./PricingCard";


const plans = [
  {
    title: "FBA I PREP Charges",
    price: "0.50",
    features: [
      "At Zeetech3PL, we believe in transparency and providing our clients with the best value for their investment. Our pricing structure is designed to offer competitive rates while delivering exceptional 3PL services."
    ]
  },
  {
    title: "Supplies (Poly Bag I Box I Wrapping)",
    price: "1.50",

    features: [
      "At Zeetech3PL, we believe in transparency and providing our clients with the best value for their investment. Our pricing structure is designed to offer competitive rates while delivering exceptional 3PL services."
    ],
    isPopular: true
  },
  {
    title: "Bundling Poly Bags / Boxes I Wrapping",
    price: "0.50",
    features: [
      "At Zeetech3PL, we believe in transparency and providing our clients with the best value for their investment. Our pricing structure is designed to offer competitive rates while delivering exceptional 3PL services."
    ]
  }
];

export default function PricingSection() {
  return (
    <>
      

      <section className="relative py-20 overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-teal-900 via-teal-800 to-teal-900">
          <div className="absolute inset-0 bg-[url('./src/image/pricing1.jpg')] opacity-20 bg-cover bg-center bg-fixed" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="mb-6"
            >
              <PricingBadge text="PRICING PLANS" />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold text-white mb-6"
            >
              Choose the Perfect Plan for
              <br />
              Your Logistics Needs
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-teal-100 max-w-3xl mx-auto"
            >
              Streamline your supply chain with our comprehensive logistics
              solutions. From small businesses to enterprise operations, we have
              the right plan to scale your success.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <PricingCard {...plan} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
