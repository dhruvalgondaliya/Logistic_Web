import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Suspense, lazy } from "react";
import { SkeletonLoader } from "./Loader/SkeletonLoader";
import { Helmet } from "react-helmet";

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
      <Helmet>
        <title>NorthPole Gateway - Transportation Solutions</title>
      </Helmet>

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

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-32">
          <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Right Image Section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative opacity-80"
            >
              <img
                src="https://firebasestorage.googleapis.com/v0/b/fir-crud-beb70.appspot.com/o/Northpole%2Fhome3.jpg?alt=media&token=0635fe00-414a-4b90-bb14-00500d916927"
                alt="Cargo Ship"
                className="rounded-lg shadow-2xl w-full h-auto opacity-75"
              />

              {/* Decorative Animated Circles */}
              <div className="absolute -right-8 -bottom-8 w-40 sm:w-48 h-40 sm:h-48 animate-spin-slow">
                <div className="absolute right-0 bottom-0 w-24 sm:w-32 h-24 sm:h-32 border-4 border-orange-500 rounded-tr-3xl"></div>
                <div className="absolute left-0 top-0 w-24 sm:w-32 h-24 sm:h-32 border-4 border-teal-500 rounded-bl-3xl"></div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6 sm:space-y-8"
            >
              <span className="relative inline-flex items-center group">
                <span className="inline-block bg-orange-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base font-semibold transition-all duration-300">
                  NorthPole Gateway
                </span>
              </span>

              <h1 className="text-2xl sm:text-4xl lg:text-4xl font-bold text-white leading-tight">
                Secure, Scalable, and <br />
                Seamless Warehousing Solutions
              </h1>

              <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-white leading-tight">
                Elevate Your Business with Innovative Management Tools Discover
                new horizons and unlock limitless possibilities with NorthPole
                Gateway.
              </h2>

              <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
                <Link
                  to="/contactus"
                  className="bg-orange-500 hover:bg-orange-400 hover:text-teal text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold flex items-center transition-colors"
                >
                  Contact Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Lazy Loaded Sections with Component-Wise Skeleton Loader */}
      <Suspense fallback={<SkeletonLoader />}>
        <ServicesSection />
      </Suspense>
      <Suspense fallback={<SkeletonLoader />}>
        <AboutSection />
      </Suspense>
      <Suspense fallback={<SkeletonLoader />}>
        <Testimonials />
      </Suspense>
      <Suspense fallback={<SkeletonLoader />}>
        <WorkProcessSection />
      </Suspense>
      <Suspense fallback={<SkeletonLoader />}>
        <FAQSection />
      </Suspense>
      <Suspense fallback={<SkeletonLoader />}>
        <Blog />
      </Suspense>
      <Suspense fallback={<SkeletonLoader />}>
        <PricingSection />
      </Suspense>
      <Suspense fallback={<SkeletonLoader />}>
        <GetRate />
      </Suspense>
    </>
  );
}
