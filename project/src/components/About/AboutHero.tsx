import { ChevronRight } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import AboutImg from "../../image/AboutUsImg.webp";

export default function AboutHero() {
  const [content, setContent] = useState("Our Value");

  const renderContent = () => {
    switch (content) {
      case "Our Mission":
        return "At Zeetech3PL, our mission is to empower your success by providing exceptional 3PL (Third-Party Logistics) solutions that drive your business forward. We are dedicated to supporting your growth, streamlining your operations, and delivering outstanding customer experiences. Our mission encompasses the following key principles";
      case "Our Vision":
        return "Zeetech3PL, our vision is to be a transformative force in the 3PL (Third-Party Logistics) industry. We envision a future where businesses of all sizes can thrive by leveraging our innovative solutions and expertise. Our vision encompasses the following key elements:";
      case "Our Value":
        return "At Zeetech3PL, we are guided by a set of core values that shape our company culture and drive our commitment to excellence. These values form the foundation of our organization and guide our interactions with customers, partners, and team members";
      default:
        return "";
    }
  };

  return (
    <>
      <div className="relative h-[300px] bg-gradient-to-r from-gray-900 to-gray-800 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
            alt="About Us"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About Us
          </h1>
          <div className="flex items-center text-gray-300 text-sm">
            <a href="/" className="hover:text-white transition-colors">
              Home
            </a>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-orange-500">About Us</span>
          </div>
        </div>
      </div>

      {/* second section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block text-orange-500 font-medium text-lg mb-4">
                About us
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                Choose <span className="text-orange-500">The Best</span>
                <br />
                3PL Service Company
              </h2>
              <p className="text-gray-800 text-lg mb-8 leading-relaxed">
                "Unlock the Competitive Edge with Our Exceptional 3PL <br />{" "}
                Services – Discover a World of Streamlined Operations,
                <br /> Optimal Efficiency, and End-to-End Supply Chain Solutions{" "}
                <br /> Tailored to Your Unique Business Needs!"
              </p>

              <div className="flex space-x-6 mb-8 ">
                <button
                  className={`text-gray-700 hover:text-orange-500  pb-2 text-lg ${
                    content === "Our Mission" &&
                    "text-orange-500 border-b-2 border-orange-500"
                  }`}
                  onClick={() => setContent("Our Mission")}
                >
                  Our Mission
                </button>
                <button
                  className={`text-gray-700 hover:text-orange-500 transition-colors pb-2 text-lg ${
                    content === "Our Vision" &&
                    "text-orange-500 border-b-2 border-orange-500"
                  }`}
                  onClick={() => setContent("Our Vision")}
                >
                  Our Vision
                </button>
                <button
                  className={`text-gray-700 hover:text-orange-500 transition-colors pb-2 text-lg ${
                    content === "Our Value" &&
                    "text-orange-500 border-b-2 border-orange-500"
                  }`}
                  onClick={() => setContent("Our Value")}
                >
                  Our Value
                </button>
              </div>

              <p className="text-gray-600 text-base mb-8">{renderContent()}</p>

              <button className="bg-orange-500 text-white text-base px-8 py-3 rounded-full hover:bg-orange-600 transition-colors inline-flex items-center group">
                Check details about our company
                <span className="ml-2 group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-full overflow-hidden bg-blue-600 aspect-square">
                <img
                  src={AboutImg}
                  alt="Warehouse"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-12 left-12  bg-white p-6 rounded-xl shadow-lg max-w-[80%] z-10">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 text-xl font-bold">2</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg">
                        Best 3PL Company
                      </h3>
                      <p className="text-sm text-gray-600">
                        We deliver our services to the very best work, whether
                        as an external provider.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
