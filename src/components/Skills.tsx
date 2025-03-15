import React from 'react';
import { motion } from 'framer-motion';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: ['Python', 'PHP', 'JavaScript', 'C'],
    },
    {
      title: 'Web/App Development',
      skills: ['HTML', 'CSS', 'JavaScript', 'MERN Stack', 'Flask', 'RESTful API'],
    },
    {
      title: 'Databases',
      skills: ['MySQL', 'MongoDB (Design & Modelling)'],
    },
    {
      title: 'Development Tools',
      skills: ['Git & GitHub', 'VS Code', 'PyCharm'],
    },
    {
      title: 'Areas of Interest',
      skills: ['Data Structures and Algorithms', 'Linux customization', 'AI and Machine Learning'],
    },
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
    <section id="skills" className="py-20 bg-secondary/20 relative">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-primary/5 rounded-full"></div>
        <div className="absolute top-1/2 right-0 w-64 h-64 bg-accent/5 rounded-full transform -translate-y-1/2"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Skills
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="card p-6 backdrop-blur-sm"
            >
              <h3 className="text-xl font-bold mb-4 gradient-text">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 