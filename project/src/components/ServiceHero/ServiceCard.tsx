import { useState } from "react";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  title: string;
  imageUrl: string;
  details: string[];
}

export function ServiceCard({ title, imageUrl, details }: ServiceCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="relative w-[340px] h-[400px] lg:w-full sm:w-full perspective-1000 ">
      <div
        className={`relative w-full h-full transition-transform duration-500 ml-6 sm:ml-0  lg:ml-0 transform-style-preserve-3d ${
          isFlipped ? "rotate-y-180" : ""
        }`}
      >
        {/* Front of card */}
        <div className="absolute w-full h-full backface-hidden ">
          <div className="relativew w-[310px] h-[400px] lg:w-full  rounded-xl overflow-hidden shadow-lg bg-white">
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-72 object-cover"
            />
            <div className="p-6">
              <h3 className="text-lg lg:text-xl font-semibold mb-2">{title}</h3>
              <button
                onClick={() => setIsFlipped(true)}
                className="inline-flex items-center text-orange-500 hover:text-orange-600 transition-colors"
              >
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Back of card */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180">
          <div className="w-[310px] h-[415px] lg:w-full lg:h-full rounded-xl overflow-hidden shadow-lg bg-white p-5">
            <h3 className="text-xl font-semibold mb-4 text-orange-500 text-start">Services Details</h3>
            <ul className="space-y-3 overflow-y-auto h-64">
              {details.map((detail, index) => (
                <li
                  key={index}
                  className="flex items-start lg:text-lg sm:text-sm"
                >
                  <span className="inline-block w-2 h-2 mt-2 mr-2 bg-orange-500 rounded-full" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
            <button
              onClick={() => setIsFlipped(false)}
              className="absolute bottom-6 left-6 inline-flex items-center text-orange-500 hover:text-orange-600 transition-colors"
            >
              Go Back
              <ArrowRight className="ml-2 h-4 w-4 rotate-180" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
