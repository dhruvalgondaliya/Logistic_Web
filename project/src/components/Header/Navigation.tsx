import { Link, useLocation } from 'react-router-dom';

interface NavigationProps {
  className?: string;
  isMobile?: boolean;
  isNavMenuOpen?: boolean;
  setIsNavMenuOpen?: (value: boolean) => void;
}

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/aboutUS' },
  { label: 'Pricing', to: '/pricing' }
];

export default function Navigation({ 
  className = "", 
  isMobile = false,
  isNavMenuOpen,
  setIsNavMenuOpen 
}: NavigationProps) {
  const location = useLocation();

  return (
    <nav className={className}>
      {navItems.map((item) => (
        <div key={item.label} className={isMobile ? "w-full " : ""}>
          <Link
            to={item.to}
            className={`
              flex items-center justify-between
              ${isMobile 
                ? 'px-6 py-3 w-full text-gray-700 hover:bg-gray-50' 
                : 'mx-4 text-gray-700 hover:text-orange-500 transition-colors'
              }
              ${location.pathname === item.to ? 'text-orange-500 font-bold' : ''}
            `}
            onClick={() => {
              if (isMobile && setIsNavMenuOpen) {
                setIsNavMenuOpen(!isNavMenuOpen);
              }
            }}
          >
            <span>{item.label}</span>
          </Link>
        </div>
      ))}
    </nav>
  );
}
