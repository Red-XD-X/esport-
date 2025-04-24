import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when navigating to a new page
  const handleNavClick = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About us', path: '/about' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'News', path: '/news' },
  ];

  return (
    <nav className="bg-indigo-900 py-4 px-6 md:px-16">
      <div className="flex items-center justify-between">
        <div className="font-bold text-2xl tracking-wider text-white">SWIFT</div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => {
            // Check if current path matches this nav link
            const isActive = location.pathname === link.path || 
                            (location.pathname === '' && link.path === '/');
            
            return (
              <Link
                key={link.name}
                to={link.path}
                onClick={handleNavClick}
                className={`relative px-1 py-2 transition-colors ${
                  isActive ? 'text-orange-500 font-medium' : 'text-white hover:text-gray-200'
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-orange-500 rounded-t-sm"></span>
                )}
              </Link>
            );
          })}
        </div>

        {/* Contact Button - Desktop */}
        <div className="hidden md:block">
          <Link
            to="/contact"
            onClick={handleNavClick}
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md transition-colors"
          >
            Contact us
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none text-white">
            {isMenuOpen ? (
              <i className="mdi mdi-close text-2xl"></i>
            ) : (
              <i className="mdi mdi-menu text-2xl"></i>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 flex flex-col space-y-4 py-4">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path || 
                            (location.pathname === '' && link.path === '/');
                            
            return (
              <Link
                key={link.name}
                to={link.path}
                onClick={handleNavClick}
                className={`block py-2 px-4 ${
                  isActive ? 'bg-indigo-800 text-orange-500 font-medium' : 'text-white'
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="ml-2 inline-block w-2 h-2 bg-orange-500 rounded-full"></span>
                )}
              </Link>
            );
          })}
          <Link
            to="/contact"
            onClick={handleNavClick}
            className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 mx-4 text-center rounded-md transition-colors"
          >
            Contact us
          </Link>
        </div>
      )}
    </nav>
  );
}