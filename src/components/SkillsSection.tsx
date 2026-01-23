import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const skills = {
  'Languages': ['Python', 'JavaScript', 'TypeScript', 'PHP', 'C'],
  'Frontend': ['React', 'HTML/CSS', 'Tailwind', 'Figma'],
  'Backend': ['Node.js', 'Express', 'Flask', 'REST APIs'],
  'Database': ['MongoDB', 'MySQL', 'SQLAlchemy'],
  'Tools': ['Git', 'GitHub', 'VS Code', 'Linux'],
};

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-32 bg-card/50" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">
            <span className="w-8 h-px bg-primary" />
            Skills
          </span>
          <h2 className="section-title">
            Tech I work with.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {Object.entries(skills).map(([category, items], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="group"
            >
              <h3 className="font-mono text-primary text-sm mb-4 flex items-center gap-2">
                <span className="text-muted-foreground">//</span>
                {category}
              </h3>
              <div className="space-y-3">
                {items.map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center gap-3 text-foreground group/item"
                  >
                    <span className="w-1.5 h-1.5 bg-primary rounded-full opacity-50 group-hover/item:opacity-100 transition-opacity" />
                    <span className="group-hover/item:text-primary transition-colors">{skill}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Experience stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-12 border-t border-border"
        >
          {[
            { num: '2+', label: 'Projects Built' },
            { num: '50+', label: 'Users Served' },
            { num: '3+', label: 'Years Learning' },
            { num: '∞', label: 'Lines of Code' },
          ].map((stat, i) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.num}</div>
              <div className="font-mono text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
