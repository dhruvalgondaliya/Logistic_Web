// BlogCard Component
import { ArrowRight } from "lucide-react";

interface BlogCardProps {
  title: string;
  image: string;
  excerpt: string;
  date: string;
  readTime: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ title, image, excerpt, date, readTime }) => {
  return (
    <div className="group h-full bg-white rounded-xl shadow-md overflow-hidden">
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      <div className="p-6">
        <div className="flex items-center text-sm text-gray-500 mb-3">
          <span>{date}</span>
          <span className="mx-2">•</span>
          <span>{readTime}</span>
        </div>

        <h3 className="text-xl font-semibold text-gray-700 mb-2 group-hover:text-orange-500 transition-colors">
          {title}
        </h3>

        <p className="text-gray-600 mb-4">{excerpt}</p>

        <button className="inline-flex items-center text-orange-500 font-semibold group-hover:text-teal-700">
          Read More
          <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};

export default BlogCard;