import ServicesSection1 from "./ServicesSection1";
import { ChevronRight } from "lucide-react";

const ServicesHero: React.FC = () => {
  return (
    <>
      <section className="relative h-[300px] flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-800 opacity-80"></div>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80')",
            filter: "brightness(0.3)"
          }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Services
          </h1>
          <div className="flex items-center text-gray-300 text-sm">
            <a href="/" className="hover:text-white transition-colors">
              Home
            </a>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-orange-500">Services</span>
          </div>
        </div>
      </section>

      {/* second component */}
      <ServicesSection1 />
    </>
  );
};

export default ServicesHero;
