import { motion } from "framer-motion";
import FAQAccordion from "./FAQAccordion";
import h13Image from "../../image/h13.webp";

export default function FAQSection() {
  return (
    <section
      className="relative w-full py-15 overflow-hidden flex items-center justify-center"
      style={{
        backgroundImage: `url(${h13Image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>

      <div className="relative z-10 w-full mx-auto px-4 sm:px-6 lg:px-8 flex justify-center items-center min-h-screen">
        <div className="grid lg:grid-cols-2  items-start max-w-6xl w-full">
          {/* Text Section */}
          <motion.div>
            <div className="max-w-80 relative justify-center  bg-orange-500 text-white px-2 py-2 rounded-full text-sm text-center font-semibold mb-6">
              FREQUENTLY ASKED QUESTIONS
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 text-center lg:text-left ">
              Do you have
              <br />
              any questions?
              <br />
              Find answers here
            </h2>
            <p className="text-gray-200 text-lg mb-8 text-center lg:text-left">
              Some frequently asked questions about
              <br />
              NorthPole Gateway's cargo services
            </p>
          </motion.div>

          {/* FAQ Accordion */}
          <div className="mt-8 lg:mt-0">
            <FAQAccordion />
          </div>
        </div>
      </div>
    </section>
  );
}
