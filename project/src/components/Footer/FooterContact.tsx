import { Mail, Phone, MapPin } from 'lucide-react';

const contactInfo = [
  {
    icon: Mail,
    label: 'E-MAIL US',
    value: 'Service@logiscocare.com',
    hoverEffect: 'hover:bg-orange-500/20 hover:cursor-pointer',
  },
  {
    icon: Phone,
    label: 'SUPPORT 24/7',
    value: '+12334 5678 899',
    hoverEffect: 'hover:bg-orange-500/20 hover:cursor-pointer',
  },
  {
    icon: MapPin,
    label: 'LOGISCO HEADQUARTER',
    value: '116th Ave, WA 98058-5055, USA',
    hoverEffect: '',
  },
];

export default function FooterContact() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8 border-t border-teal-800">
      {contactInfo.map((item, _) => (
        <div
          key={item.label}
          className={`flex items-center gap-4 p-4 rounded-lg transition-all duration-300 `}
        >
          <div className="relative p-3 rounded-full bg-teal-800/50 overflow-hidden">
            <div className="absolute inset-0 animate-wave bg-gradient-to-r from-orange-500/50 to-transparent"></div>
            <item.icon
              className={`h-6 w-6 text-orange-500 ${
                item.label === 'SUPPORT 24/7' ? 'phone-icon' : ''
              }`}
            />
          </div>
          <div>
            <p className="text-orange-500 text-sm font-semibold">{item.label}</p>
            <p className="text-white">{item.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
