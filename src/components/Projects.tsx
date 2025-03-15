import React from 'react';
import { motion } from 'framer-motion';
import * as FaIcons from 'react-icons/fa';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Content Nest (Blog Application)',
      description: 'A blog application with features like rich text editor, social interactions (like, comment, follow/unfollow), and real-time chat.',
      technologies: ['Flask', 'Python', 'SQLAlchemy', 'Jinja2'],
      points: [
        'Built a scalable backend using Flask and SQLAlchemy, with real-time functionality powered by Socket.IO.',
        'Achieved a 30% increase in user retention during testing, supporting 50+ users and enabling 20+ daily blog posts.',
        'Enhanced user engagement by designing an intuitive UI/UX using Figma.',
      ],
      github: 'https://github.com',
      live: '',
    },
    {
      title: 'Water Wise (Water billing management system)',
      description: 'A water billing system with secure user authentication, real-time billing, and payment processing features.',
      technologies: ['MERN Stack', 'MongoDB', 'Express', 'React', 'Node.js'],
      points: [
        'Designed an admin panel for efficient management and visualized water consumption trends with an 85% prediction accuracy.',
        'Processed 50+ online payments and managed 200+ billing records, ensuring seamless user experience.',
        'Leveraged MongoDB, React, and Node.js for building a robust and user-friendly application.',
      ],
      github: 'https://github.com',
      live: '',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="projects" className="py-20 relative">
      {/* Background decoration */}
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-secondary/5 rounded-tl-full -z-10"></div>
      
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Projects
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-16"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="card overflow-hidden shadow-custom"
            >
              <div className="p-8">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold gradient-text mb-2">{project.title}</h3>
                  <p className="text-darkText mb-6">{project.description}</p>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-4 text-primary">Key Features:</h4>
                  <ul className="list-none space-y-3 text-darkText">
                    {project.points.map((point, pointIndex) => (
                      <li key={pointIndex} className="flex items-start">
                        <span className="text-primary mr-2">▹</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="skill-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 mt-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-filled flex items-center justify-center gap-2 py-2 px-4"
                      aria-label="GitHub Repository"
                    >
                      <FaIcons.FaGithub size={18} />
                      <span>View on GitHub</span>
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn flex items-center justify-center gap-2 py-2 px-4"
                      aria-label="Live Demo"
                    >
                      <FaIcons.FaExternalLinkAlt size={16} />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 