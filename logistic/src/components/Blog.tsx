import React from 'react';

const blogs = [
  {
    title: 'Innovation in logistics',
    image: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    excerpt: 'Discover the latest technological advancements in logistics'
  },
  {
    title: 'Best packaging practices for goods',
    image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    excerpt: 'Learn about modern packaging solutions for safe transport'
  },
  {
    title: 'Biggest problems of air freight',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    excerpt: 'Understanding challenges in air freight transportation'
  }
];

const Blog = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Read All Our Logistics Blogs
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <div 
              key={index}
              className="group overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={blog.image} 
                  alt={blog.title}
                  className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{blog.title}</h3>
                <p className="text-gray-600">{blog.excerpt}</p>
                <button className="mt-4 text-teal-600 font-semibold hover:text-teal-700">
                  Read More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blog;