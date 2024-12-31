import { Mail, Phone, MapPin } from 'lucide-react';

const contactInfo = [
  {
    icon: Mail,
    label: 'E-MAIL US',
    value: 'Service@logiscocare.com'
  },
  {
    icon: Phone,
    label: 'SUPPORT 24/7',
    value: '+12334 5678 899'
  },
  {
    icon: MapPin,
    label: 'LOGISCO HEADQUARTER',
    value: '116th Ave, WA 98058-5055,USA'
  }
];

export default function FooterContact() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8 border-t border-teal-800">
      {contactInfo.map((item, index) => (
        <div key={item.label} className="flex items-center gap-4">
          <div className="p-3 rounded-full bg-teal-800/50">
            <item.icon className="h-6 w-6 text-orange-500" />
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