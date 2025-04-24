import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: 'Home', path: '/', active: false },
    { name: 'About us', path: '/about', active: false },
    { name: 'Portfolio', path: '/portfolio', active: true },
    { name: 'News', path: '/news', active: false },
  ];

  return (
    <nav className="bg-blue-800 text-white py-4 px-6 md:px-10">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="font-bold text-2xl tracking-wider">LOGO</div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.path}
              className={`relative px-1 py-2 hover:text-gray-200 transition-colors ${
                link.active ? 'font-medium' : ''
              }`}
            >
              {link.name}
              {link.active && (
                <span className="absolute bottom-0 left-0 w-full h-1 bg-orange-400 rounded-t-sm"></span>
              )}
            </a>
          ))}
        </div>

        {/* Contact Button */}
        <div className="hidden md:block">
          <a
            href="/contact"
            className="bg-orange-400 hover:bg-orange-500 text-white px-6 py-2 rounded-md transition-colors"
          >
            Contact us
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isMenuOpen ? (
              <X size={24} className="text-white" />
            ) : (
              <Menu size={24} className="text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 flex flex-col space-y-4 py-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.path}
              className={`block py-2 px-4 ${
                link.active ? 'bg-blue-700 font-medium' : ''
              }`}
            >
              {link.name}
              {link.active && (
                <span className="ml-2 inline-block w-2 h-2 bg-orange-400 rounded-full"></span>
              )}
            </a>
          ))}
          <a
            href="/contact"
            className="bg-orange-400 hover:bg-orange-500 text-white py-2 px-4 mx-4 text-center rounded-md transition-colors"
          >
            Contact us
          </a>
        </div>
      )}
    </nav>
  );
}
