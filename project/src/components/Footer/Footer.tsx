import FooterNewsletter from './FooterNewsletter';
import FooterLinks from './FooterLinks';
import FooterContact from './FooterContact';

export default function Footer() {
  return (
    <footer className="bg-teal-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FooterNewsletter />
        <div className="bg-orange-500 p-6 rounded-xl mb-12">
          <div className="flex flex-col md:flex-row items-start gap-4">
            <div className="flex-1">
              <h3 className="text-xl font-bold text-white mb-2">Get best rate for your freight transport</h3>
              <p className="text-white/90 text-sm">24/7 customer support and expert advice. Up to 70% savings on shipping costs with all major carriers</p>
            </div>
            <button className="bg-white text-orange-500 px-6 py-2 rounded-lg font-semibold hover:bg-orange-50 transition-colors whitespace-nowrap">
              Get the best rate ✓
            </button>
          </div>
        </div>
        <FooterLinks />
        <FooterContact />
        <div className="flex flex-col md:flex-row justify-between items-center py-6 border-t border-teal-800 text-sm">
          <p className="text-teal-100">© 2024 Loraic transportation & logistics / All rights reserved</p>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <a href="#" className="text-teal-100 hover:text-orange-500 transition-colors">Privacy</a>
            <span className="text-teal-700">|</span>
            <a href="#" className="text-teal-100 hover:text-orange-500 transition-colors">Terms & Conditions</a>
            <span className="text-teal-700">|</span>
            <a href="#" className="text-teal-100 hover:text-orange-500 transition-colors">Site map</a>
            <span className="text-teal-700">|</span>
            <a href="#" className="text-teal-100 hover:text-orange-500 transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}