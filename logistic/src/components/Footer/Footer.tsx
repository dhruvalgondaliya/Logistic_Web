import SocialLinks from './SocialLinks';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">About Us</h3>
            <p className="text-sm">
              Leading logistics solutions provider with a global network and commitment to excellence.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2">
              {['Services', 'About', 'Contact', 'Blog'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm hover:text-orange-500 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contact Info</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-orange-500" />
                <span className="text-sm">123 Logistics Ave, City, Country</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-orange-500" />
                <span className="text-sm">+1 234 567 890</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-orange-500" />
                <span className="text-sm">contact@logitrans.com</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Follow Us</h3>
            <SocialLinks />
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} LogiTrans. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}