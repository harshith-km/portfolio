import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'Content Nest',
    description: 'A full-featured blog platform with real-time chat, social interactions, and rich text editing. Built for scalability with Flask backend and Socket.IO for live features.',
    tech: ['Python', 'Flask', 'SQLAlchemy', 'Socket.IO', 'Jinja2'],
    stats: ['30% ↑ user retention', '50+ active users', '20+ daily posts'],
    github: 'https://github.com/Harshith-KM',
    live: null,
  },
  {
    title: 'Water Wise',
    description: 'Smart water billing management system with predictive analytics, real-time billing, and payment processing. Features admin dashboard with consumption trend visualization.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
    stats: ['85% prediction accuracy', '200+ billing records', '50+ payments processed'],
    github: 'https://github.com/Harshith-KM',
    live: null,
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-32" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">
            <span className="w-8 h-px bg-primary" />
            Projects
          </span>
          <h2 className="section-title">
            Things I've built.
          </h2>
        </motion.div>

        <div className="space-y-12 mt-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="group relative border border-border bg-card/50 p-8 md:p-12 hover:border-primary/50 transition-all duration-500 card-hover"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <ArrowUpRight 
                      size={24} 
                      className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" 
                    />
                  </div>
                  
                  <p className="text-muted-foreground text-lg leading-relaxed mb-6 max-w-2xl">
                    {project.description}
                  </p>

                  {/* Stats */}
                  <div className="flex flex-wrap gap-6 mb-6">
                    {project.stats.map((stat) => (
                      <span key={stat} className="font-mono text-sm text-primary">
                        {stat}
                      </span>
                    ))}
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-xs px-3 py-1.5 bg-secondary text-muted-foreground border border-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex lg:flex-col gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 border border-border hover:border-primary hover:text-primary transition-all"
                  >
                    <Github size={20} />
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 border border-border hover:border-primary hover:text-primary transition-all"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>

              {/* Decorative number */}
              <span className="absolute -top-6 -right-4 text-[120px] font-bold text-border/30 select-none leading-none">
                0{index + 1}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
