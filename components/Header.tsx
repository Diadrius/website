
import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

const navLinks = [
  { path: '/', name: 'Home' },
  { path: '/over-lotte', name: 'Over Lotte' },
  { path: '/werkwijze-en-aanbod', name: 'Werkwijze & Aanbod' },
  { path: '/voor-wie', name: 'Voor wie?' },
  { path: '/tarieven', name: 'Tarieven' },
  { path: '/contact', name: 'Contact' },
  { path: '/kennismakingsgesprek', name: 'Plan je gratis kennismaking', isButton: true },
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const activeLinkStyle = {
    color: '#D4A25F',
    textDecoration: 'underline',
    textUnderlineOffset: '4px'
  };
  
  const closeMenu = () => setIsOpen(false);

  const buttonClasses = "inline-block bg-ocher hover:bg-ocher-dark text-white font-bold py-2 px-6 rounded-full shadow-lg transition-transform transform hover:scale-102 duration-300";

  return (
    <header className="bg-cream/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-lg md:text-xl font-serif font-semibold text-dark-green tracking-wide">
          <Link to="/" onClick={closeMenu}>Lotte Gasenbeek</Link>
          <span className="block text-xs font-sans text-text-light">Psychologische Coaching</span>
        </div>
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            link.isButton ? (
              <Link
                key={link.path}
                to={link.path}
                className={buttonClasses}
                onClick={closeMenu}
              >
                {link.name}
              </Link>
            ) : (
              <NavLink
                key={link.path}
                to={link.path}
                className="text-text-light hover:text-ocher transition-colors duration-300 font-medium"
                style={({ isActive }) => isActive ? activeLinkStyle : {}}
              >
                {link.name}
              </NavLink>
            )
          ))}
        </nav>
        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-dark-green focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="lg:hidden bg-cream shadow-xl absolute w-full left-0">
          <nav className="flex flex-col items-center space-y-6 py-8">
            {navLinks.map((link) => (
              link.isButton ? (
                <Link
                  key={link.path}
                  to={link.path}
                  className={buttonClasses}
                  onClick={closeMenu}
                >
                  {link.name}
                </Link>
              ) : (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={closeMenu}
                  className="text-text-light text-lg hover:text-ocher transition-colors duration-300 font-medium"
                  style={({ isActive }) => isActive ? activeLinkStyle : {}}
                >
                  {link.name}
                </NavLink>
              )
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
