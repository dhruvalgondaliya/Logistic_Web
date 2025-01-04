import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { CaseStudyCard } from "./CaseStudyCard";

const caseStudies = [
  {
    id: 1,
    title: "Relief Transportation For United Nations",
    category: "SEA",
    image:
      "https://firebasestorage.googleapis.com/v0/b/fir-crud-beb70.appspot.com/o/pr1.png?alt=media&token=fbb0dfff-9110-4996-9e1a-68def35523ce"
  },
  {
    id: 2,
    title: "Shipping Large Container From China",
    category: "SEA",
    image:
      "https://firebasestorage.googleapis.com/v0/b/fir-crud-beb70.appspot.com/o/pr2.png?alt=media&token=9f7194cc-0ca6-4f93-87c0-ef599c348174"
  },
  {
    id: 3,
    title: "200 Matric Ton Grain Freight For Mexico",
    category: "SEA",
    image: "https://firebasestorage.googleapis.com/v0/b/fir-crud-beb70.appspot.com/o/pr4.png?alt=media&token=8c29d22e-b20b-4a7a-9c02-cfa7d7124526"
  },
  {
    id: 4,
    title: "Expedited Air Freight for Pharmaceuticals",
    category: "AIR",
    image: "https://firebasestorage.googleapis.com/v0/b/fir-crud-beb70.appspot.com/o/pr5.png?alt=media&token=ae7e4346-6ef8-45c6-8659-0a53ac58423b"
  },
  {
    id: 5,
    title: "Luxury Vehicle Shipping Across Europe",
    category: "LAND",
    image: "https://firebasestorage.googleapis.com/v0/b/fir-crud-beb70.appspot.com/o/pr2.png?alt=media&token=9f7194cc-0ca6-4f93-87c0-ef599c348174"
  },
  {
    id: 6,
    title: "Luxury Vehicle Shipping Across Europe",
    category: "LAND",
    image: "https://firebasestorage.googleapis.com/v0/b/fir-crud-beb70.appspot.com/o/pr1.png?alt=media&token=fbb0dfff-9110-4996-9e1a-68def35523ce"
  }
];

export function CaseStudiesSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [];
  for (let i = 0; i < caseStudies.length; i += 3) {
    slides.push(caseStudies.slice(i, i + 3));
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const handlePrev = () => {
    setActiveIndex((current) =>
      current === 0 ? slides.length - 1 : current - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((current) => (current + 1) % slides.length);
  };

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-12">
        <div>
          <div className="inline-block px-4 py-2 bg-orange-500 rounded-full mb-4">
            <span className="text-white font-medium text-sm">
              OUR CASE STUDIES
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            Best Cases by Loraic
          </h2>
        </div>
        <div className="flex gap-2">
          <button
            onClick={handlePrev}
            className="p-2 rounded-full bg-orange-500 text-white hover:bg-orange-600 transition-colors"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={handleNext}
            className="p-2 rounded-full bg-orange-500 text-white hover:bg-orange-600 transition-colors"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {slide.map((study) => (
                <CaseStudyCard
                  key={study.id}
                  image={study.image}
                  title={study.title}
                  category={study.category}
                />
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-8">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-3 h-3 rounded-full mx-1 transition-all duration-300 ${
              activeIndex === index ? "bg-orange-500 scale-125" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
