import React, { useState, useEffect } from "react";
import { ServiceCard } from "./ServiceCard";

const services = [
  {
    title: "Wholesale FBA Prep",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/fir-crud-beb70.appspot.com/o/FBA1.webp?alt=media&token=843e2c4d-727c-41c5-9558-bb68aa6f662b",
    details: [
      "Warehouse & FBA Prep Services streamline product preparation for Amazon FBA. We manage receiving, labeling, packaging, and shipping, ensuring fast processing and compliance with Amazon’s guidelines for efficient scaling."
    ]
  },
  {
    title: "Private Labeling",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/fir-crud-beb70.appspot.com/o/ServicesPri.jpg?alt=media&token=1c529443-99c8-4b71-846a-82bbeee3e44d",
    details: [
      "Private labeling allows businesses to sell products made by another company under their own brand, saving on manufacturing costs and offering customization in packaging and design. Common in industries like food, cosmetics, and apparel, it helps businesses expand their product range without production overhead, while strengthening brand identity and appealing to their target market."
    ]
  },
  {
    title: "Online Arbitrage",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/fir-crud-beb70.appspot.com/o/OnlineSer.webp?alt=media&token=7e35191f-2bd4-452d-b743-74ce4e5b3e91",
    details: [
      "Online arbitrage involves purchasing products from online stores at lower prices and reselling them for a profit on platforms like Amazon or eBay. This model capitalizes on price differences across e-commerce websites, allowing entrepreneurs to earn by flipping products. It requires research into market trends, pricing strategies, and inventory management but offers a low-cost entry into e-commerce with minimal investment."
    ]
  },
  {
    title: "Retail Arbitrage",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/fir-crud-beb70.appspot.com/o/RetailSer.webp?alt=media&token=646ee23c-8f02-4b0f-828b-3b4fd2a8ee5b",
    details: [
      "Retail arbitrage involves buying discounted products from retail stores and reselling them for profit on platforms like Amazon or eBay. It’s a low-cost, scalable business model that relies on effective sourcing, market research, and pricing strategies."
    ]
  },
  {
    title: "Fulfillment By Merchant (FBM)",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/fir-crud-beb70.appspot.com/o/FBM2.webp?alt=media&token=a6626866-0bd6-43af-ad8f-ee68d205bdfd",
    details: [
      "Fulfillment By Merchant (FBM) lets sellers manage storage, packaging, and shipping directly to customers, offering control over logistics and cost savings. Ideal for unique or low-turnover products, FBM requires efficient inventory management, reliable shipping, and excellent customer service to ensure success and meet marketplace standards."
    ]
  },
  {
    title: "Fulfillment Services & Shipping",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/fir-crud-beb70.appspot.com/o/Service3.webp?alt=media&token=30f16e25-97bf-4062-a281-e5cfeaaae681",
    details: [
      "Fulfillment services handle the storage, packaging, and shipping of products, ensuring fast and reliable delivery to customers. These services streamline logistics for e-commerce businesses, allowing them to focus on growth while meeting customer expectations. Efficient shipping options, including same-day or international delivery, enhance customer satisfaction and boost sales."
    ]
  }
];

const ServicesSection1: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate data loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="max-w-7xl mx-auto py-10">
      <div className="text-center mb-12">
        <h2 className="text-base text-orange-500 font-semibold tracking-wide uppercase">
          OUR SERVICES
        </h2>
        <p className="mt-2 text-3xl leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl">
          We Provide The Necessary
          <br />
          Services To You
        </p>
      </div>

      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array(6)
            .fill(null)
            .map((_, index) => (
              <div
                key={index}
                className="h-48 bg-gray-200 animate-pulse rounded-lg"
              ></div>
            ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              imageUrl={service.imageUrl}
              details={service.details}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ServicesSection1;
