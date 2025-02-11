import { useState, useEffect } from "react";
import BlogCard from "./BlogCard";

const blogs = [
  {
    title: "Innovations in last-mile delivery operations",
    image:
      "https://northpolewarehouse.s3.ca-central-1.amazonaws.com/IMage/post6.jpg",
    excerpt:
      "Discover how AI and automation are revolutionizing the logistics industry",
    date: "Mar 15, 2024",
    readTime: "5 min read"
  },
  {
    title: "Sustainable Packaging Solutions",
    image:
      "https://northpolewarehouse.s3.ca-central-1.amazonaws.com/IMage/post5.jpg",
    excerpt: "Eco-friendly packaging trends shaping the future of shipping",
    date: "Mar 12, 2024",
    readTime: "4 min read"
  },
  {
    title: "Global Air Freight Challenges",
    image:
      "https://northpolewarehouse.s3.ca-central-1.amazonaws.com/IMage/post4.jpg",
    excerpt: "Navigating the complexities of international air transportation",
    date: "Mar 10, 2024",
    readTime: "6 min read"
  },
  {
    title: "New Giant trucks are game changers in logistics",
    image:
      "https://northpolewarehouse.s3.ca-central-1.amazonaws.com/IMage/post7.jpg",
    excerpt:
      "Exploring the impact of advanced trucking technology on logistics",
    date: "Mar 10, 2024",
    readTime: "6 min read"
  }
];

const BlogSlider = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(getItemsPerPage());

  function getItemsPerPage() {
    if (window.innerWidth < 640) return 1;
    if (window.innerWidth < 1024) return 2;
    return 3;
  }

  const totalPages = Math.ceil(blogs.length / itemsPerPage);

  useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(getItemsPerPage());
      setCurrentPage(0); 
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const autoSlide = setInterval(() => {
      setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
    }, 7000); 

    return () => clearInterval(autoSlide);
  }, [totalPages]);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="m-auto bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold w-max">
            LATEST NEWS
          </h2>
          <h1 className="text-3xl font-bold lg:text-4xl text-gray-900 pt-3 sm:text-2xl">
            Read All Our Logistics Blogs
          </h1>
          <p className="text-lg text-gray-500 mt-2 max-w-3xl mx-auto pt-2">
            NorthPole Gateway's Warehousing Solutions: Unlock Expertise and
            Maximize Efficiency in Inventory Management and Storage. Experience
            Full-Service Support to Optimize Your Warehousing Operations.
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
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full flex-shrink-0"
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
        <div className="flex justify-center mt-8 space-x-4">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index)}
              className={`w-3 h-3 lg:w-4 lg:h-4 rounded-full transition-colors ${
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
