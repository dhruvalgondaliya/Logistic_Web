import React from 'react';
import { Truck, Plane, Ship, Package, Star, Users, Clock, Globe } from 'lucide-react';
import Testimonial from './components/Testimonial';
import ServiceCard from './components/ServiceCard';
import BlogCard from './components/BlogCard';
import CaseStudyCard from './components/CaseStudyCard';
import StatsCard from './components/StatsCard';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-600 to-teal-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">Contact Us For A Seamless Inventory Transport Process</h1>
            <p className="text-xl mb-8">We're your trusted partner for all your logistics and transportation needs</p>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg transition-all">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          <StatsCard icon={Star} title="5 Star" description="Service Rating" />
          <StatsCard icon={Users} title="150+" description="Happy Clients" />
          <StatsCard icon={Clock} title="24/7" description="Support Available" />
          <StatsCard icon={Globe} title="Global" description="Coverage" />
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Transportation Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard 
              icon={Truck}
              title="Road Transport"
              description="Efficient road transportation solutions across the country"
            />
            <ServiceCard 
              icon={Plane}
              title="Air Freight"
              description="Fast and reliable air freight services worldwide"
            />
            <ServiceCard 
              icon={Ship}
              title="Sea Freight"
              description="Cost-effective sea freight for international shipping"
            />
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Best Cases by Loraic</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <CaseStudyCard 
              image="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              title="Global Supply Chain Solutions"
              category="Supply Chain"
            />
            <CaseStudyCard 
              image="https://images.unsplash.com/photo-1578575437130-527eed3abbec?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              title="Maritime Logistics Excellence"
              category="Sea Freight"
            />
            <CaseStudyCard 
              image="https://images.unsplash.com/photo-1573030889348-c6b0f8b15e40?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              title="Air Cargo Innovation"
              category="Air Freight"
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Testimonial 
              image="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
              name="John Smith"
              role="Logistics Manager"
              text="Outstanding service and professional team. They handled our complex shipping requirements with ease."
            />
            <Testimonial 
              image="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
              name="Sarah Johnson"
              role="Supply Chain Director"
              text="Reliable, efficient, and cost-effective solutions for all our transportation needs."
            />
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Read All Our Logistics Blogs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <BlogCard 
              image="https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              title="Future of Logistics"
              date="March 15, 2024"
              excerpt="Exploring the latest trends in logistics and transportation"
            />
            <BlogCard 
              image="https://images.unsplash.com/photo-1565017228608-039fb0359522?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              title="Sustainable Shipping"
              date="March 12, 2024"
              excerpt="How we're making shipping more environmentally friendly"
            />
            <BlogCard 
              image="https://images.unsplash.com/photo-1553413077-190dd305871c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              title="Supply Chain Innovation"
              date="March 10, 2024"
              excerpt="New technologies transforming the supply chain"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-teal-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Get Started?</h2>
          <p className="mb-8 text-xl">Contact us today for a free consultation</p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg transition-all">
            Get Started
          </button>
        </div>
      </section>
    </div>
  );
}

export default App;