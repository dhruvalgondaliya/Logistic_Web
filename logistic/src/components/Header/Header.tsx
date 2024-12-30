import Logo from './Logo';
import Navigation from './Navigation';
import MobileMenu from './MobileMenu';

export default function Header() {
  return (
    <header className="sticky top-0 bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Logo />
          <Navigation />
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}