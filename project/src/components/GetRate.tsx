import React from "react";
import { Truck } from "lucide-react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export const GetRate: React.FC = () => (
  <div
    className="bg-[#115361] bg-opacity-80 py-3 px-9 text-white w-full"
    style={{
      backgroundImage:
        "url('https://firebasestorage.googleapis.com/v0/b/fir-crud-beb70.appspot.com/o/bg-ft.webp?alt=media&token=2fa160c1-2710-408d-849a-8dac4e59a643')",
      backgroundSize: "cover",
      backgroundPosition: "center"
    }}
  >
    <div className="flex flex-col md:flex items-center md:items-start gap-3 mb-5">
      <Truck className="w-12 h-12 text-orange-500" />
      <div>
        <h2 className="text-2xl font-bold text-center md:text-left">
          Get the Best Rates for Your Warehousing and Supply Chain Needs.
        </h2>
        <p className="mt-2 text-center md:text-left">
          24/7 customer support and expert advice. Achieve up to 70% savings on
          shipping with leading carriers – boost your efficiency.
        </p>
      </div>
    </div>

    <div className="flex justify-center md:justify-start ">
      <Link
        to="/contact"
        className="bg-orange-500 px-6 py-2 rounded-md font-semibold hover:bg-orange-700 transition-colors 
      md:px-6 md:py-4 flex items-center gap-2"
      >
        Get the Best Rate
        <FaArrowRight className="text-white" />
      </Link>
    </div>
  </div>
);
