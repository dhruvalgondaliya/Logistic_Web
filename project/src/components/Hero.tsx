import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Suspense, lazy } from "react";
import { SkeletonLoader } from "./Loader/SkeletonLoader";

// Lazy load the sections
const ServicesSection = lazy(() => import("./Services/ServicesSection"));
const AboutSection = lazy(() => import("./About/AboutSection"));
const Testimonials = lazy(() => import("./Testimonials/Testimonials"));
const WorkProcessSection = lazy(
  () => import("./WorkProces/WorkProcessSection")
);
const FAQSection = lazy(() => import("./FAQ/FAQSection"));
const Blog = lazy(() => import("./Blog"));
const PricingSection = lazy(() => import("./Pricing/PricingSection"));
const GetRate = lazy(() =>
  import("./GetRate").then((module) => ({ default: module.GetRate }))
);

export default function LoraicTransportation() {
  return (
    <>
      <div className="relative bg-gradient-to-r from-teal-50 to-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-90"
          style={{
            backgroundImage: `url('https://firebasestorage.googleapis.com/v0/b/fir-crud-beb70.appspot.com/o/Northpole%2Fhomesecond.jpg?alt=media&token=620bffc8-5742-486a-b140-b14820673c70')`,
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>

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
              className="relative opacity-80"
            >
              <img
                src="https://firebasestorage.googleapis.com/v0/b/fir-crud-beb70.appspot.com/o/Northpole%2Fhome3.jpg?alt=media&token=0635fe00-414a-4b90-bb14-00500d916927"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 1200px"
                alt="Cargo Ship"
                className="rounded-lg shadow-2xl w-full h-auto opacity-75"
                width="1200"
                height="800"
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

                <span className="inline-block bg-orange-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base font-semibold transition-all duration-300 group-hover:text-left group-hover:pl-10">
                  NorthPole Gateway
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

              <h1 className="text-3xl sm:text-4xl lg:text-4xl font-bold text-white leading-tight">
                Secure, Scalable, and Seamless <br /> Warehousing Solutions
              </h1>

              <p className="text-base sm:text-lg text-white ">
                Elevate your business with NorthPole Gateway's innovative
                management tools. Discover new horizons and unlock limitless
                possibilities with NorthPole Gateway.
              </p>

              <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
                <Link
                  to="/contact"
                  className="bg-teal-600 hover:bg-teal-700 hover:text-teal-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold flex items-center transition-colors"
                >
                  Contact NorthPole Gateway
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Lazy Loaded Sections with Skeleton Loader Fallback */}
      <Suspense fallback={<SkeletonLoader />}>
        <ServicesSection />
        <AboutSection />
        <Testimonials />
        <WorkProcessSection />
        <FAQSection />
        <Blog />
        <PricingSection />
        <GetRate />
      </Suspense>
    </>
  );
}
