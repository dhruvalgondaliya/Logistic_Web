const services = [
  {
    image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    title: "Air Freight",
    description: "Fast and reliable air transport solutions"
  },
  {
    image: "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    title: "Ocean Freight",
    description: "Global sea freight services"
  },
  {
    image: "https://images.unsplash.com/photo-1586528116493-ce9d0a78f084?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    title: "Road Transport",
    description: "Nationwide road logistics"
  }
];

export default function Services() {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Our Services</h2>
          <p className="mt-4 text-gray-600">Comprehensive logistics solutions</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <img 
                src={service.image} 
                alt={service.title}
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                <p className="text-gray-200">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}