import { ChevronRight } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaAward } from "react-icons/fa";

export default function AboutHero() {
  const [content, setContent] = useState("Our Mission");

  const renderContent = () => {
    switch (content) {
      case "Our Mission":
        return "At NorthPole Gateway, our mission is to empower your business with exceptional third-party logistics (3PL) and warehousing solutions. We streamline operations, optimize supply chains, and deliver outstanding customer experiences. Our services include efficient inventory management, secure storage, and timely order fulfillment, helping businesses reduce costs and scale seamlessly. With a focus on efficiency, scalability, and sustainability, we are committed to driving your success and enhancing your logistics operations. Our key principles include: Efficiency, Scalability, Customer-Centricity, Sustainability, Innovation.";
      case "Our Vision":
        return "At NorthPole Gateway, our vision is to be a transformative force in the NorthPole Gateway (Third-Party Logistics) industry. We envision a future where businesses of all sizes can thrive by leveraging our innovative solutions and expertise. Our vision is to redefine logistics by offering cutting-edge solutions that streamline operations, improve efficiency, and drive growth for our clients. We are committed to shaping the future of logistics with a focus on continuous improvement and delivering exceptional value.Key Elements of Our Vision: Innovation, Collaboration, Global Reach, Sustainability, Customer-Centricity.";
      case "Our Value":
        return "At NorthPole Gateway, we are guided by a set of core values that shape our company culture and drive our commitment to excellence. These values form the foundation of our organization and guide our interactions with customers, partners, and team members. Our values are the cornerstone of our business, ensuring that we consistently deliver outstanding service and build strong, lasting relationships.Key Features of Our Values: Integrity, Excellence, Collaboration, Accountability, Innovation, Sustainability.";
      default:
        return "";
    }
    
  };

  return (
    <>
      <div className="relative  h-[200px] sm:h-[200px] lg:h-[300px] bg-gradient-to-r from-gray-900 to-gray-800 overflow-hidden font-poppins">
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
      <div className="py-20 bg-white font-poppins">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block text-orange-500 font-medium text-lg mb-4">
                About Us
              </span>
              <h2 className="text-xl md:text-3xl lg:text-4xl font-bold mb-6 leading-tight">
              Choose <span className="text-orange-500">NorthPole Gateway </span> As <br /> Your Trusted Logistics Partner
              </h2>
              <p className="text-gray-800 text-lg mb-8 leading-relaxed">
              Unlock Your Competitive Advantage with NorthPole Gateway's Premier Logistics Solutions
              Experience a world of seamless operations, optimized efficiency, and comprehensive supply chain management tailored specifically to your business needs. Our expert third-party logistics (3PL) services are designed to streamline your processes, reduce costs, and drive growth. Whether you're looking for reliable warehousing, inventory management, or end-to-end logistics solutions, NorthPole Gateway is your trusted partner in success.
              </p>

              <div className="flex space-x-6 mb-8">
                <button
                  className={`text-gray-700 hover:text-orange-500 pb-2 text-lg ${
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
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative overflow-hidden   aspect-square rounded-xl">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/fir-crud-beb70.appspot.com/o/service-details-01.jpg?alt=media&token=d0d02953-05c4-4b3c-a0c6-3b8e80d45cb9"
                  alt="Warehouse"
                  className="w-full h-full object-cover "
                />
                <div className="absolute bottom-12 left-12 bg-white p-6 rounded-xl shadow-lg max-w-[80%] z-10 border-b-4 border-orange-500">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 flex items-center justify-center">
                      <FaAward className="text-orange-500 text-3xl" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg">
                        Best NorthPole Gateway Company
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
