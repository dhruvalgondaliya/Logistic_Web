// import { motion } from "framer-motion";
// import PricingBadge from "./PricingBadge";
// import PricingCard from "./PricingCard";

// const plans = [
//   {
//     title: "FBA I PREP Charges",
//     price: "0.50",
//     features: [
//       "NorthPole Gateway, we believe in transparency and providing our clients with the best value for their investment. Our pricing structure is designed to offer competitive rates while delivering exceptional 3PL services."
//     ]
//   },
//   {
//     title: "Supplies (Poly Bag I Box I Wrapping)",
//     price: "1.50",

//     features: [
//       "NorthPole Gateway, we believe in transparency and providing our clients with the best value for their investment. Our pricing structure is designed to offer competitive rates while delivering exceptional 3PL services."
//     ],
//     isPopular: true
//   },
//   {
//     title: "Bundling Poly Bags / Boxes I Wrapping",
//     price: "0.50",
//     features: [
//       "NorthPole Gateway, we believe in transparency and providing our clients with the best value for their investment. Our pricing structure is designed to offer competitive rates while delivering exceptional 3PL services."
//     ]
//   }
// ];

// export default function PricingSection() {
//   return (
//     <>
//       <section className="relative py-20 overflow-hidden">
//         {/* Gradient Background */}
//         <div className="absolute inset-0 bg-[linear-gradient(rgba(0,48,65,0.95),rgba(0,48,65,0.95))]">
//           <div className="absolute inset-0 bg-[url('https://firebasestorage.googleapis.com/v0/b/fir-crud-beb70.appspot.com/o/price_bg.jpg?alt=media&token=73266b58-970b-47fc-940f-be52b5be9310')] opacity-20 bg-cover bg-center " />
//         </div>

//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
//           <div className="text-center mb-16">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               className="mb-6"
//             >
//               <PricingBadge text="PRICING PLANS" />
//             </motion.div>

//             <motion.h2
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               className="text-2xl md:text-3xl font-bold text-white mb-6"
//             >
//               Select the Ideal Plan to Streamline Your Warehousing <br />
//               and Storage Solutions
//               {/* Your Logistics Needs */}
//             </motion.h2>

//             <motion.p
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               className="text-teal-100 max-w-4xl mx-auto text-base sm:text-lg md:text-xl lg:text-1xl"

//             >
//               Transform Your Supply Chain with Our End-to-End Warehousing
//               Solutions, Offering Tailored <br /> Plans for Small, Medium, and Large
//               Enterprises to Drive Growth and Efficiency
//             </motion.p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
//             {plans.map((plan, index) => (
//               <motion.div
//                 key={plan.title}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ delay: index * 0.1 }}
//               >
//                 <PricingCard {...plan} />
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

import { motion } from "framer-motion";
import PricingBadge from "./PricingBadge";
import PricingCard from "./PricingCard";

const plans = [
  {
    title: "FBA I PREP Charges",
    price: "0.50",
    features: [
      "NorthPole Gateway, we believe in transparency and providing our clients with the best value for their investment. Our pricing structure is designed to offer competitive rates while delivering exceptional 3PL services."
    ]
  },
  {
    title: "Supplies (Poly Bag I Box I Wrapping)",
    price: "1.50",
    features: [
      "NorthPole Gateway, we believe in transparency and providing our clients with the best value for their investment. Our pricing structure is designed to offer competitive rates while delivering exceptional 3PL services."
    ],
    isPopular: true
  },
  {
    title: "Bundling Poly Bags / Boxes I Wrapping",
    price: "0.50",
    features: [
      "NorthPole Gateway, we believe in transparency and providing our clients with the best value for their investment. Our pricing structure is designed to offer competitive rates while delivering exceptional 3PL services."
    ]
  }
];

export default function PricingSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-900 via-teal-800 to-teal-900">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20" />
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
  );
}
