import React from 'react';
import * as FaIcons from 'react-icons/fa';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/20 py-8 border-t border-secondary">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-darkText text-center md:text-left">
              &copy; {currentYear} <span className="text-primary">Harshith KM</span>. All Rights Reserved.
            </p>
          </div>
          
          <div className="flex gap-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-dark hover:text-primary transition-colors duration-300"
              aria-label="GitHub"
            >
              <FaIcons.FaGithub size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-dark hover:text-primary transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <FaIcons.FaLinkedin size={20} />
            </a>
            <a
              href="mailto:harshithkm2003@gmail.com"
              className="text-primary-dark hover:text-primary transition-colors duration-300"
              aria-label="Email"
            >
              <FaIcons.FaEnvelope size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 