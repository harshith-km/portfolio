import React from 'react';
import { motion } from 'framer-motion';
import * as FaIcons from 'react-icons/fa';

const Education: React.FC = () => {
  const education = [
    {
      degree: 'Bachelor of Computer Applications',
      institution: 'Government First Grade College',
      location: 'Tumkur, Karnataka',
      period: 'Oct 2021 – Aug 2024',
      grade: 'CGPA: 7.9/10',
    },
    {
      degree: 'PCMCs – Computer Science',
      institution: 'Shri Siddaganga PU College',
      location: 'Tumkur, Karnataka',
      period: 'Jun 2019 – Apr 2021',
      grade: 'CGPA: 8.0/10',
    },
  ];

  const certifications = [
    'Python',
    'MERN Stack',
    'Git',
    'ReactJS',
    'DSA Basics',
  ];

  const initiatives = [
    'Delivered seminars and conducted practical sessions to support batchmates in building their projects, focusing on advanced programming concepts and fostering collaboration.',
    'Provided debugging support for batchmates\' projects and lab programs, resolving coding issues and ensuring functionality across various programming languages.',
    'Conducted live practical web development sessions, teaching concepts of front-end and back-end development to peers and juniors.',
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="education" className="py-20 bg-secondary/20 relative">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-accent/5 rounded-full"></div>
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-primary/5 rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Education & Certifications
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Education */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-8">
              <div className="p-3 rounded-full bg-white mr-3 border border-primary/20">
                <FaIcons.FaGraduationCap className="text-primary text-2xl" />
              </div>
              <h3 className="text-2xl font-bold gradient-text">Education</h3>
            </div>

            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="card p-6"
                >
                  <div className="flex justify-between flex-wrap mb-3">
                    <h4 className="text-xl font-bold text-primary">{edu.degree}</h4>
                    <span className="text-darkText bg-secondary px-3 py-1 rounded-full text-sm">{edu.period}</span>
                  </div>
                  <p className="text-primary-dark mb-1">{edu.institution}</p>
                  <p className="text-darkText mb-3">{edu.location}</p>
                  <p className="text-primary font-medium bg-secondary inline-block px-3 py-1 rounded-md">{edu.grade}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications and Initiatives */}
          <div className="space-y-12">
            {/* Certifications */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-8">
                <div className="p-3 rounded-full bg-white mr-3 border border-primary/20">
                  <FaIcons.FaCertificate className="text-primary text-2xl" />
                </div>
                <h3 className="text-2xl font-bold gradient-text">Certifications</h3>
              </div>

              <motion.div
                variants={itemVariants}
                className="card p-6"
              >
                <p className="text-darkText mb-4">Certifications & Course Work (from SimpliLearn Skill-up) Aug – Sep 2024</p>
                <div className="flex flex-wrap gap-2">
                  {certifications.map((cert, index) => (
                    <span key={index} className="skill-tag">
                      {cert}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Key Initiatives */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-8">
                <div className="p-3 rounded-full bg-white mr-3 border border-primary/20">
                  <svg className="text-primary w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838l-2.328.996.002 1.069c0 .358.186.687.465.874l4.817 3.209a1 1 0 001.124 0l4.817-3.21a1.001 1.001 0 00.464-.873l.002-1.07-2.328-.995a1 1 0 11.788-1.838l4-1.714a1.001 1.001 0 00.356.257l2.644-1.131a1 1 0 000-1.84l-7-3z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold gradient-text">Key Initiatives</h3>
              </div>

              <motion.div
                variants={itemVariants}
                className="card p-6"
              >
                <ul className="space-y-4">
                  {initiatives.map((initiative, index) => (
                    <li key={index} className="text-darkText flex items-start">
                      <span className="text-primary mr-2">▹</span>
                      <span>{initiative}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education; 