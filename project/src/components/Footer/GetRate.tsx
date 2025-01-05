import React from "react";
import { Truck } from "lucide-react";

export const GetRate: React.FC = () => (
  <div
    className="bg-[#115361] bg-opacity-80 py-3 px-9 text-white w-full"
    style={{
      backgroundImage: "url('https://firebasestorage.googleapis.com/v0/b/fir-crud-beb70.appspot.com/o/bg-ft.webp?alt=media&token=2fa160c1-2710-408d-849a-8dac4e59a643')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
  >
    <Truck className="w-12 h-12 text-orange-500" />
    <div className="flex items-center gap-4 mb-3">
      <h2 className="text-2xl font-bold">
        Get best rate for your freight transport
      </h2>
    </div>
    <p className="mb-3">
      24/7 customer support and expert advice. Up to 70% savings on shipping
      costs with all major carriers
    </p>
    <button className="bg-orange-500 px-6 py-3 rounded-md font-semibold hover:bg-orange-700 transition-colors">
      Get the best rate
    </button>
  </div>
);
