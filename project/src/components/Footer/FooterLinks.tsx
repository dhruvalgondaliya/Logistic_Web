const sections = {
  'Industry Served': [
    'Frozen Food', 'Automobile', 'Machineries',
    'Export Import', 'Cargo Freight', 'Warehousing',
  ],
  'Company Info': [
    'About Us', 'Our Expertise', 'Latest News',
    'Transporters', 'Terms & Condition', 'Case Studies',
  ],
  'Our Services': [
    'Less Than Truckload', 'Rail Freight Shipping',
    'Hot Shot Trucking', 'Less-than-Truckload',
    'Intermodal service', 'Container Freight',
  ],
};

export default function FooterLinks() {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 rounded-xl ">
      <div className="flex flex-col md:flex-row justify-between gap-8  ">
        {Object.entries(sections).map(([title, links]) => (
          <div key={title} className="flex-1">
            <h3 className="text-xl font-bold text-white mb-6">{title}</h3>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-teal-100 hover:text-orange-500 transition-colors flex items-center gap-2"
                  >
                    <span className="text-white hover:text-orange-500">→</span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-12 bg-white p-6 rounded-xl">
        <div className="flex flex-col md:flex-row items-start gap-4">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-orange-500 mb-2">
              Get the best rate for your freight transport
            </h3>
            <p className="text-gray-700 text-sm">
              24/7 customer support and expert advice. Up to 70% savings on
              shipping costs with all major carriers.
            </p>
          </div>
          <button className="bg-orange-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-orange-600 transition-colors whitespace-nowrap">
            Get the best rate ✓
          </button>
        </div>
      </div>
    </div>
  );
}
