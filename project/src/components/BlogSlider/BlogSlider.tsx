import { useState } from "react";
import BlogCard from "./BlogCard";

const blogs = [
  {
    title: "Innovations in last-mile delivery operations",
    image: "https://firebasestorage.googleapis.com/v0/b/fir-crud-beb70.appspot.com/o/post6.jpg?alt=media&token=1eb0508b-be41-47a3-904e-5478daadc22f",
    excerpt:
      "Discover how AI and automation are revolutionizing the logistics industry",
    date: "Mar 15, 2024",
    readTime: "5 min read"
  },
  {
    title: "Sustainable Packaging Solutions",
    image: "https://firebasestorage.googleapis.com/v0/b/fir-crud-beb70.appspot.com/o/post5.jpg?alt=media&token=9ba4a4a9-8ee5-4752-8104-f52312809401",
    excerpt: "Eco-friendly packaging trends shaping the future of shipping",
    date: "Mar 12, 2024",
    readTime: "4 min read"
  },
  {
    title: "Global Air Freight Challenges",
    image: "https://firebasestorage.googleapis.com/v0/b/fir-crud-beb70.appspot.com/o/post4.jpg?alt=media&token=0fbb1144-b88c-4750-be80-ee89d1a8d49d",
    excerpt: "Navigating the complexities of international air transportation",
    date: "Mar 10, 2024",
    readTime: "6 min read"
  },
  {
    title: "New Giant trucks are game changers in logistics",
    image: "https://firebasestorage.googleapis.com/v0/b/fir-crud-beb70.appspot.com/o/post7.jpg?alt=media&token=ae3c96b3-23b3-4bf5-9256-1f9c285d6bdd",
    excerpt: "Navigating the complexities of international air transportation",
    date: "Mar 10, 2024",
    readTime: "6 min read"
  },
  {
    title: "Sustainable Packaging Solutions",
    image: "https://firebasestorage.googleapis.com/v0/b/fir-crud-beb70.appspot.com/o/post5.jpg?alt=media&token=9ba4a4a9-8ee5-4752-8104-f52312809401",
    excerpt: "Eco-friendly packaging trends shaping the future of shipping",
    date: "Mar 12, 2024",
    readTime: "4 min read"
  },
  {
    title: "Innovations in last-mile delivery operations",
    image: "https://firebasestorage.googleapis.com/v0/b/fir-crud-beb70.appspot.com/o/post6.jpg?alt=media&token=1eb0508b-be41-47a3-904e-5478daadc22f",
    excerpt:
      "Discover how AI and automation are revolutionizing the logistics industry",
    date: "Mar 15, 2024",
    readTime: "5 min read"
  }
];

const BlogSlider = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(blogs.length / itemsPerPage);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Title and Subtitle */}
        <div className="text-center mb-12">
          <h1 className="m-auto bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold w-max">
            LATEST NEWS
          </h1>
          <p className="text-3xl font-bold text-gray-900 pt-3 sm:text-2xl ">
            Read All Our Logistics Blogs
          </p>
          <p className="text-lg text-gray-500 mt-2 max-w-3xl mx-auto pt-2">
          NorthPole Gateway's Warehousing Solutions: Unlock Expertise and Maximize Efficiency in Inventory Management and Storage. Experience Full-Service Support to Optimize Your Warehousing Operations.
          </p>
        </div>

        {/* Blog Slider */}
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentPage * 100}%)` }}
          >
            {Array.from({ length: totalPages }).map((_, pageIndex) => (
              <div
                key={pageIndex}
                className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full flex-shrink-0"
              >
                {blogs
                  .slice(
                    pageIndex * itemsPerPage,
                    pageIndex * itemsPerPage + itemsPerPage
                  )
                  .map((blog, index) => (
                    <BlogCard key={index} {...blog} />
                  ))}
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Dots */}
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
