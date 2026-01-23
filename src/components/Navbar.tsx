import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/80 backdrop-blur-md border-b border-border' : ''
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#" className="font-mono text-xl font-bold text-primary">
            ~/harshith
          </a>

          <div className="hidden md:flex items-center gap-8">
            {['about', 'skills', 'projects', 'contact'].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="font-mono text-sm text-muted-foreground hover:text-primary transition-colors link-underline"
              >
                .{item}()
              </a>
            ))}
          </div>

          <a
            href="mailto:harshithkm2003@gmail.com"
            className="font-mono text-sm px-4 py-2 border border-primary text-primary hover:bg-primary hover:text-background transition-all duration-300"
          >
            contact()
          </a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
