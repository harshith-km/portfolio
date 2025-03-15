import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
// Import specific icons instead of using the wildcard import
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { AiOutlineHome, AiOutlineUser, AiOutlineCode } from 'react-icons/ai';
import { BiCodeAlt } from 'react-icons/bi';
import { IoSchoolOutline } from 'react-icons/io5';
import { MdEmail } from 'react-icons/md';
import { motion, AnimatePresence } from 'framer-motion';

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

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (nav) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [nav]);

  const navLinks = [
    { id: 'home', text: 'Home', icon: <AiOutlineHome size={20} /> },
    { id: 'about', text: 'About', icon: <AiOutlineUser size={20} /> },
    { id: 'skills', text: 'Skills', icon: <AiOutlineCode size={20} /> },
    { id: 'projects', text: 'Projects', icon: <BiCodeAlt size={20} /> },
    { id: 'education', text: 'Education', icon: <IoSchoolOutline size={20} /> },
    { id: 'contact', text: 'Contact', icon: <MdEmail size={20} /> },
  ];

  return (
    <nav className={`fixed w-full h-16 sm:h-20 z-50 transition-all duration-300 ${scrolled ? 'glass-effect shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 h-full flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl sm:text-2xl font-bold">
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
        <div 
          className="md:hidden cursor-pointer z-20 w-10 h-10 flex items-center justify-center rounded-full bg-white/80 shadow-md" 
          onClick={handleClick}
        >
          {nav ? (
            <XMarkIcon className="w-6 h-6 text-primary" />
          ) : (
            <Bars3Icon className="w-6 h-6 text-primary" />
          )}
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {nav && (
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed top-0 right-0 w-3/4 h-screen bg-white shadow-2xl flex flex-col z-10"
            >
              <div className="h-16 sm:h-20 border-b border-secondary flex items-center justify-between px-6">
                <span className="text-lg font-medium text-primary">Menu</span>
                <button 
                  onClick={closeMenu}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-secondary/50"
                >
                  <XMarkIcon className="w-6 h-6 text-primary" />
                </button>
              </div>
              
              <div className="flex-1 overflow-y-auto py-6">
                <ul className="px-6 space-y-4">
                  {navLinks.map(({ id, text, icon }, index) => (
                    <motion.li 
                      key={id} 
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + index * 0.1 }}
                      className="border-b border-secondary/50 pb-3"
                    >
                      <Link
                        onClick={closeMenu}
                        to={id}
                        smooth={true}
                        duration={500}
                        offset={-80}
                        spy={true}
                        activeClass="text-primary"
                        className="flex items-center gap-3 text-primary-dark hover:text-primary transition-colors duration-300"
                      >
                        <span className="text-primary">{icon}</span>
                        <span>{text}</span>
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </div>
              
              <div className="p-6 border-t border-secondary bg-secondary/10">
                <div className="text-sm text-primary-dark">
                  <p className="font-medium mb-3">Connect with me</p>
                  <div className="flex gap-4 mt-2">
                    <a 
                      href="https://github.com" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-md text-primary hover:text-primary-light transition-colors duration-300"
                      aria-label="GitHub"
                    >
                      <FaGithub size={20} />
                    </a>
                    <a 
                      href="https://linkedin.com" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-md text-primary hover:text-primary-light transition-colors duration-300"
                      aria-label="LinkedIn"
                    >
                      <FaLinkedin size={20} />
                    </a>
                    <a 
                      href="mailto:harshithkm2003@gmail.com" 
                      className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-md text-primary hover:text-primary-light transition-colors duration-300"
                      aria-label="Email"
                    >
                      <FaEnvelope size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Overlay */}
        <AnimatePresence>
          {nav && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/50 z-0 md:hidden"
              onClick={closeMenu}
            />
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar; 