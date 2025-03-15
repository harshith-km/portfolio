import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
// Import icons as React components
import * as FaIcons from 'react-icons/fa';
import * as HiIcons from 'react-icons/hi';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      {/* Background gradient circles */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent/10 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-primary-light mb-4 font-medium"
          >
            Hi, my name is
          </motion.p>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-primary"
          >
            Harshith KM.
          </motion.h1>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-darkText mb-6"
          >
            I build <span className="gradient-text">things for the web</span>.
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-darkText text-lg md:text-xl max-w-2xl mb-8"
          >
            I'm a full-stack web developer specializing in building exceptional digital experiences. 
            Currently, I'm focused on building responsive web applications with modern technologies.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <Link to="projects" smooth={true} duration={500} offset={-80}>
              <button className="btn">View My Work</button>
            </Link>
            <Link to="contact" smooth={true} duration={500} offset={-80}>
              <button className="btn-filled">Contact Me</button>
            </Link>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex gap-6 mt-8"
          >
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:text-primary-light transition-colors duration-300"
              aria-label="GitHub"
            >
              <FaIcons.FaGithub size={24} />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:text-primary-light transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <FaIcons.FaLinkedin size={24} />
            </a>
            <a 
              href="mailto:harshithkm2003@gmail.com" 
              className="text-primary hover:text-primary-light transition-colors duration-300"
              aria-label="Email"
            >
              <HiIcons.HiOutlineMail size={24} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 