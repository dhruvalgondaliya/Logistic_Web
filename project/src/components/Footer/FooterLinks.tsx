
const sections = {
  'Industry Served': [
    'Frozen Food', 'Automobile', 'Machineries', 
    'Export Import', 'Cargo Freight', 'Warehousing'
  ],
  'Company Info': [
    'About Us', 'Our Expertise', 'Latest News',
    'Transporters', 'Terms & Condition', 'Case Studies'
  ],
  'Our Services': [
    'Less Than Truckload', 'Rail Freight Shipping',
    'Hot Shot Trucking', 'Less-than-Truckload',
    'Intermodal service', 'Container Freight'
  ]
};

export default function FooterLinks() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12">
      {Object.entries(sections).map(([title, links]) => (
        <div key={title}>
          <h3 className="text-xl font-bold text-white mb-6">{title}</h3>
          <ul className="space-y-3">
            {links.map((link) => (
              <li key={link}>
                <a href="#" className="text-teal-100 hover:text-orange-500 transition-colors flex items-center gap-2">
                  <span className="text-orange-500">→</span>
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}