import { Clock, Shield, Globe, Truck } from 'lucide-react';

const features = [
  {
    icon: <Clock className="w-8 h-8" />,
    title: "24/7 Support",
    description: "Round-the-clock customer service"
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Secure Transport",
    description: "Your cargo's safety is our priority"
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Global Network",
    description: "Worldwide logistics solutions"
  },
  {
    icon: <Truck className="w-8 h-8" />,
    title: "Modern Fleet",
    description: "State-of-the-art vehicles"
  }
];

export default function Features() {
  return (
    <div className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Why choose us?</h2>
          <p className="mt-4 text-gray-600">Experience excellence in logistics</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1"
            >
              <div className="text-teal-600 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}