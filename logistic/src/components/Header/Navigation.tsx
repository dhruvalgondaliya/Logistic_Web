
const navItems = [
  { label: 'Home', href: '#' },
  { label: 'Services', href: '#services' },
  { label: 'Features', href: '#features' },
  { label: 'Contact', href: '#contact' },
];

export default function Navigation() {
  return (
    <nav className="hidden md:flex space-x-8">
      {navItems.map((item) => (
        <a
          key={item.label}
          href={item.href}
          className="text-gray-600 hover:text-orange-500 transition-colors"
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}