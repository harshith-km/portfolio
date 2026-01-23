import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, ArrowRight, Copy, Check } from 'lucide-react';

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [copied, setCopied] = useState(false);
  const email = 'harshithkm2003@gmail.com';

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-32" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <span className="section-label justify-center">
            <span className="w-8 h-px bg-primary" />
            Contact
          </span>
          
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Let's work together.
          </h2>
          
          <p className="text-xl text-muted-foreground mb-12 max-w-xl mx-auto">
            I'm currently looking for new opportunities. Whether you have a project 
            in mind or just want to chat, my inbox is always open.
          </p>

          {/* Email display */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-4 mb-12"
          >
            <button
              onClick={copyEmail}
              className="group flex items-center gap-4 px-6 py-4 bg-card border border-border hover:border-primary transition-all duration-300"
            >
              <Mail size={20} className="text-primary" />
              <span className="font-mono text-lg">{email}</span>
              {copied ? (
                <Check size={18} className="text-primary" />
              ) : (
                <Copy size={18} className="text-muted-foreground group-hover:text-primary transition-colors" />
              )}
            </button>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <a
              href={`mailto:${email}`}
              className="group inline-flex items-center gap-3 px-8 py-4 bg-primary text-background font-medium text-lg hover:bg-primary/90 transition-all duration-300"
            >
              <span>Say Hello</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          {/* Quick contact info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-8 mt-16 pt-12 border-t border-border"
          >
            <div>
              <div className="font-mono text-xs text-muted-foreground mb-1">Phone</div>
              <a href="tel:+917760441296" className="text-foreground hover:text-primary transition-colors">
                +91 77604 41296
              </a>
            </div>
            <div>
              <div className="font-mono text-xs text-muted-foreground mb-1">Location</div>
              <span className="text-foreground">Bangalore, India</span>
            </div>
            <div>
              <div className="font-mono text-xs text-muted-foreground mb-1">Status</div>
              <span className="text-primary flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Available for hire
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
