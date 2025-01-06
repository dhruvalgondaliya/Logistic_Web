import React from "react";
import { Truck } from "lucide-react";
import { FaArrowRight } from 'react-icons/fa';
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
    <Truck className="w-12 h-12 text-orange-500" />
    <div className="flex items-center gap-4 mb-3 md:mb-5">
      <h2 className="text-2xl font-bold text-center md:text-left">
        Get the Best Rates for Your Warehousing and Supply Chain Needs
      </h2>
    </div>

    <p className="mb-3 text-center md:text-left">
      24/7 customer support and expert advice. Achieve up to 70% savings on
      shipping with leading carriers – boost your efficiency.
    </p>

    <div className="flex justify-center md:justify-start ">
  <Link
    to="/contact"
    className="bg-orange-500 px-6 py-3 rounded-md font-semibold hover:bg-orange-700 transition-colors 
      md:px-8 md:py-4 flex items-center gap-2"
  >
    Get the Best Rate
    <FaArrowRight className="text-white" />
  </Link>
</div>
  </div>
);
