import { motion } from "framer-motion";
import { Package, Truck } from "lucide-react";
import AboutFeature from "./AboutFeature";
import AboutStats from "./AboutStats";


import h1_6 from "../../image/h1-6.webp";

export default function AboutSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
              ABOUT NORTHPOLE GATEWAY
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-teal-900 mb-8 ps-3">
              NorthPole Gateway Transportation
              <br />
              Introducing The most <br />
              Modern way of Transportation
            </h2>

            <div className="space-y-8 mb-12">
              <AboutFeature
                icon={<Package className="w-8 h-8" />}
                title="Cost Optimization"
                description="Knowledge & Data To Optimize Cost"
              />
              <AboutFeature
                icon={<Truck className="w-8 h-8" />}
                title="Expert Truckload"
                description="Get Full-Service From Truckload Section"
              />
            </div>
            <p className="text-gray-600 mb-12 pl-2">
              NorthPole Gateway Air freight service deliver the knowledge & opportunity to
              optimize every mile on every lane. Get full-service Truckload
              division provide more options to manage global Logistics for you.
            </p>
            <AboutStats />
          </motion.div>

          <motion.div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative">
                  <img src='https://firebasestorage.googleapis.com/v0/b/fir-crud-beb70.appspot.com/o/h5-8.jpg?alt=media&token=6060a879-7c82-4d52-b58d-b7466736147e' alt="Air Transport" className="rounded-2xl" />
                  <div className="absolute top-4 right-4 bg-orange-500 text-white p-4 rounded-xl">
                    <div className="text-4xl font-bold">01</div>
                    <div className="text-sm">
                      Years of
                      <br />
                      Experience
                    </div>
                  </div>
                </div>
                <img src='https://firebasestorage.googleapis.com/v0/b/fir-crud-beb70.appspot.com/o/h5-9.png?alt=media&token=fa482bf1-e34e-45f3-8db3-22b953898306' className="rounded-2xl" />
              </div>
              <div className="mt-8">
                <img
                  src='https://firebasestorage.googleapis.com/v0/b/fir-crud-beb70.appspot.com/o/h1-6.webp?alt=media&token=0c9a954d-8d07-4a2f-9ec5-80144f1fa62e'
                  alt="Team"
                  className="rounded-2xl h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
