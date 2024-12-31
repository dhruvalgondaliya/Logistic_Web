import { Globe } from 'lucide-react';

export default function FooterNewsletter() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-teal-900 p-8">
      <div className="flex items-center gap-4 mb-4 md:mb-0">
        <Globe className="h-8 w-8 text-orange-500" />
        <div>
          <h2 className="text-2xl font-bold text-white">Track Your freight</h2>
          <p className="text-teal-100">Track your Goods with Loraic trucking</p>
        </div>
      </div>
      <div className="flex w-full md:w-auto">
        <input
          type="email"
          placeholder="Email Address"
          className="w-full md:w-80 px-4 py-2 rounded-l-lg focus:outline-none"
        />
        <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-r-lg transition-colors whitespace-nowrap">
          Subscribe
        </button>
      </div>
    </div>
  );
}