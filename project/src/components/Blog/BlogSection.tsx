import BlogCard from './BlogCard';
import { blogPosts } from './constants';

export default function BlogSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
            LATEST NEWS
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mt-4 mb-4">
            Read All Our Logistics Blogs
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Loraic Air freight service deliver the knowledge & opportunity
            to optimize every mile on every lane. Get full-service
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <BlogCard key={index} {...post} />
          ))}
        </div>

        <div className="flex justify-center mt-12 space-x-2">
          {[1, 2, 3, 4].map((dot) => (
            <button
              key={dot}
              className={`w-3 h-3 rounded-full transition-colors ${
                dot === 1 ? 'bg-orange-500' : 'bg-gray-300 hover:bg-orange-300'
              }`}
              aria-label={`Go to page ${dot}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}