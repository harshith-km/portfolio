import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
// Import specific icons instead of using the wildcard import
import { Bars3Icon } from '@heroicons/react/24/outline';
import { XMarkIcon } from '@heroicons/react/24/outline';

const Navbar: React.FC = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleClick = () => setNav(!nav);
  const closeMenu = () => setNav(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', text: 'Home' },
    { id: 'about', text: 'About' },
    { id: 'skills', text: 'Skills' },
    { id: 'projects', text: 'Projects' },
    { id: 'education', text: 'Education' },
    { id: 'contact', text: 'Contact' },
  ];

  return (
    <nav className={`fixed w-full h-20 z-50 transition-all duration-300 ${scrolled ? 'glass-effect shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 h-full flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <h1 className="text-primary">Harshith<span className="gradient-text">.KM</span></h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8">
          {navLinks.map(({ id, text }) => (
            <li key={id} className="nav-link text-primary-dark">
              <Link
                to={id}
                smooth={true}
                duration={500}
                offset={-80}
                spy={true}
                activeClass="text-primary"
              >
                {text}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <div className="md:hidden cursor-pointer z-20" onClick={handleClick}>
          {nav ? (
            <XMarkIcon className="w-6 h-6 text-primary" />
          ) : (
            <Bars3Icon className="w-6 h-6 text-primary" />
          )}
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 left-0 w-full h-screen glass-effect flex flex-col justify-center items-center transition-all duration-300 z-10 ${
            nav ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
        >
          <ul className="text-center space-y-8">
            {navLinks.map(({ id, text }) => (
              <li key={id} className="text-2xl nav-link text-primary-dark">
                <Link
                  onClick={closeMenu}
                  to={id}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  spy={true}
                  activeClass="text-primary"
                >
                  {text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 