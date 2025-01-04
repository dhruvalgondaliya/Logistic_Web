import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import ServicesSection from "./Services/ServicesSection";
import AboutSection from "./About/AboutSection";
import Testimonials from "./Testimonials/Testimonials";
import WorkProcessSection from "./WorkProces/WorkProcessSection";
import FAQSection from "./FAQ/FAQSection";
import Blog from "./Blog";
import { CaseStudiesSlider } from "./CaseStudy/CaseStudiesSlider";
import PricingSection from "./Pricing/PricingSection";

export default function LoraicTransportation() {
  return (
    <>
      <div className="relative   bg-gradient-to-r from-teal-50 to-white overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-90"
          style={{
            backgroundImage: `url('https://firebasestorage.googleapis.com/v0/b/fir-crud-beb70.appspot.com/o/bg4-h6.jpg?alt=media&token=87d9488d-b4e7-4679-b7df-8258fd793fa8')`
          }}
        ></div>

        {/* Background Decorative Circles */}
        <div className="absolute right-0 bottom-0 w-64 h-64 transform translate-x-1/2 translate-y-1/2 animate-pulse">
          <div className="absolute inset-0 bg-teal-500/10 rounded-tl-full"></div>
        </div>
        <div className="absolute left-0 top-0 w-64 h-64 transform -translate-x-1/2 -translate-y-1/2 animate-pulse">
          <div className="absolute inset-0 bg-orange-500/10 rounded-br-full"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-32">
          <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img
                src="https://firebasestorage.googleapis.com/v0/b/fir-crud-beb70.appspot.com/o/h2-12.webp?alt=media&token=b7b68995-48a7-4f15-a959-bb77c5f66557"
                alt="Cargo Ship"
                className="rounded-2xl shadow-2xl w-full"
              />

              {/* Decorative Animated Circles */}
              <div className="absolute -right-8 -bottom-8 w-40 sm:w-48 h-40 sm:h-48 animate-spin-slow">
                <div className="absolute right-0 bottom-0 w-24 sm:w-32 h-24 sm:h-32 border-4 border-orange-500 rounded-tr-3xl"></div>
                <div className="absolute left-0 top-0 w-24 sm:w-32 h-24 sm:h-32 border-4 border-teal-500 rounded-bl-3xl"></div>
              </div>
            </motion.div>

            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6 sm:space-y-8"
            >
              <span className="relative inline-flex items-center group">
                {/* Upper Left Circle */}
                <span
                  className="absolute top-3 left-0 bg-white w-3 h-3 rounded-full"
                  style={{
                    animation: "wave 1.5s infinite ease-in-out",
                    boxShadow: "0 0 10px rgba(20, 184, 166, 0.5)"
                  }}
                ></span>

                {/* Text */}
                <span className="inline-block bg-orange-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base font-semibold transition-all duration-300 group-hover:text-left group-hover:pl-10">
                  Loraic Transportation Inc
                </span>

                {/* Upper Right Circle */}
                <span
                  className="absolute top-3 right-0 bg-white w-3 h-3 rounded-full"
                  style={{
                    animation: "wave 1.5s infinite ease-in-out",
                    boxShadow: "0 0 10px rgba(255, 165, 0, 0.5)"
                  }}
                ></span>
              </span>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-teal-900 leading-tight">
                Contact Us For A Seamless Inventory Transport Process
              </h1>

              <p className="text-base sm:text-lg text-gray-600">
                Take your business to the next level with Loraic new business
                management tools. Loraic will open a new horizon for us.
              </p>

              <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
                <button className="bg-teal-600 hover:bg-teal-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold flex items-center transition-colors">
                  Contact Loraic
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>

                <div className="flex items-center space-x-4 bg-white px-4 sm:px-6 py-3 rounded-lg shadow-lg">
                  <div className="p-2 bg-orange-100 rounded-full">
                    <ArrowRight className="h-6 w-6 text-orange-500" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">
                      Shaping the Future of
                    </p>
                    <p className="font-semibold text-gray-900">
                      Logistics transport
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Service Section */}
      <ServicesSection />

      {/* About Section */}
      <AboutSection />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Work Process Section */}
      <WorkProcessSection />

      {/* FAQ Section */}
      <FAQSection />

      {/* Blog Section */}
      <Blog />

      {/* Case Studies Slider */}
      <CaseStudiesSlider />

      <PricingSection />
    </>
  );
}
