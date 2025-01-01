import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import BlogCard from "./BlogCard";

const blogs = [
  {
    title: "Innovations in last-mile delivery operations",
    image: "./src/image/post6.jpg",
    excerpt: "Discover how AI and automation are revolutionizing the logistics industry",
    date: "Mar 15, 2024",
    readTime: "5 min read",
  },
  {
    title: "Sustainable Packaging Solutions",
    image: "./src/image/post5.jpg",
    excerpt: "Eco-friendly packaging trends shaping the future of shipping",
    date: "Mar 12, 2024",
    readTime: "4 min read",
  },
  {
    title: "Global Air Freight Challenges",
    image: "./src/image/post4.jpg",
    excerpt: "Navigating the complexities of international air transportation",
    date: "Mar 10, 2024",
    readTime: "6 min read",
  },
  {
    title: "Global Air Freight Challenges",
    image: "./src/image/post6.jpg",
    excerpt: "Navigating the complexities of international air transportation",
    date: "Mar 10, 2024",
    readTime: "6 min read",
  },
];

const BlogSlider = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3; // Always 3 cards per slide
  const totalPages = Math.ceil(blogs.length / itemsPerPage);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">
            Latest Insights from Our Blog
          </h2>
          <div className="flex space-x-2">
            <button
              onClick={prevPage}
              className="p-2 rounded-full bg-white shadow-md hover:bg-orange-500 transition-colors"
              aria-label="Previous page"
            >
              <ArrowLeft className="w-6 h-6 text-gray-600" />
            </button>
            <button
              onClick={nextPage}
              className="p-2 rounded-full bg-white shadow-md hover:bg-orange-500 transition-colors"
              aria-label="Next page"
            >
              <ArrowRight className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>

        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentPage * 100}%)` }}
          >
            {Array.from({ length: totalPages }).map((_, pageIndex) => (
              <div key={pageIndex} className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full flex-shrink-0">
                {blogs
                  .slice(pageIndex * itemsPerPage, pageIndex * itemsPerPage + itemsPerPage)
                  .map((blog, index) => (
                    <BlogCard key={index} {...blog} />
                  ))}
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index)}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${
                currentPage === index ? "bg-orange-500" : "bg-gray-300"
              }`}
              aria-label={`Go to page ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSlider;
