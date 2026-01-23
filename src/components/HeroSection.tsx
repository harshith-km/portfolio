import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
      
      <div className="container mx-auto px-6 py-32 relative z-10">
        <div className="max-w-4xl">
          {/* Terminal intro */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-mono text-primary mb-6 flex items-center gap-2"
          >
            <span className="text-muted-foreground">$</span>
            <span>whoami</span>
            <span className="w-2 h-5 bg-primary animate-blink" />
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-4 tracking-tight"
          >
            Harshith KM
          </motion.h1>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl md:text-3xl lg:text-4xl text-muted-foreground mb-8"
          >
            Full-Stack Developer
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-12 leading-relaxed"
          >
            I build performant web applications with clean code and modern technologies. 
            Currently crafting digital experiences with{' '}
            <span className="text-primary">React</span>,{' '}
            <span className="text-primary">Node.js</span>, and{' '}
            <span className="text-primary">Python</span>.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap gap-4 mb-16"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 px-6 py-3 bg-primary text-background font-medium hover:bg-primary/90 transition-all duration-300"
            >
              <span>View Projects</span>
              <ArrowDown size={18} className="group-hover:translate-y-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground hover:border-primary hover:text-primary transition-all duration-300"
            >
              Get in Touch
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex items-center gap-6"
          >
            <a
              href="https://github.com/Harshith-KM"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <Github size={22} />
            </a>
            <a
              href="https://linkedin.com/in/harshithkm"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <Linkedin size={22} />
            </a>
            <a
              href="mailto:harshithkm2003@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <Mail size={22} />
            </a>
            <span className="h-px flex-1 max-w-[100px] bg-border" />
            <span className="font-mono text-sm text-muted-foreground">Bangalore, IN</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
