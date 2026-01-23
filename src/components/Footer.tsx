import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-mono text-sm text-muted-foreground">
            © {new Date().getFullYear()} Harshith KM
          </span>

          <div className="flex items-center gap-6">
            <a
              href="https://github.com/Harshith-KM"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github size={18} />
            </a>
            <a
              href="https://linkedin.com/in/harshithkm"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="mailto:harshithkm2003@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail size={18} />
            </a>
          </div>

          <span className="font-mono text-sm text-muted-foreground">
            Built with React & TypeScript
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
