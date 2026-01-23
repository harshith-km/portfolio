import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const codeLines = [
    { num: 1, content: <span className="code-keyword">const</span>, rest: <> <span className="code-variable">developer</span> = {'{'}</> },
    { num: 2, content: <span className="ml-4">name:</span>, rest: <span className="code-string">"Harshith KM"</span>, comma: true },
    { num: 3, content: <span className="ml-4">location:</span>, rest: <span className="code-string">"Bangalore, India"</span>, comma: true },
    { num: 4, content: <span className="ml-4">education:</span>, rest: <span className="code-string">"BCA - Computer Applications"</span>, comma: true },
    { num: 5, content: <span className="ml-4">focus:</span>, rest: <span className="code-string">"Full-Stack Development"</span>, comma: true },
    { num: 6, content: <span className="ml-4">available:</span>, rest: <span className="text-primary">true</span> },
    { num: 7, content: '};' },
  ];

  return (
    <section id="about" className="py-32" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">
            <span className="w-8 h-px bg-primary" />
            About
          </span>
          <h2 className="section-title">
            Building digital<br />experiences.
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a developer who loves turning complex problems into simple, 
              beautiful solutions. With a strong foundation in both frontend and 
              backend technologies, I build applications that are fast, accessible, 
              and user-friendly.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My journey started with curiosity about how things work on the web. 
              Today, I specialize in crafting full-stack applications using modern 
              frameworks and best practices.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              When I'm not coding, you'll find me exploring Linux systems, 
              diving into data structures, or experimenting with AI/ML concepts.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="terminal-window"
          >
            <div className="terminal-header">
              <div className="terminal-dot bg-red-500" />
              <div className="terminal-dot bg-yellow-500" />
              <div className="terminal-dot bg-green-500" />
              <span className="ml-4 font-mono text-xs text-muted-foreground">about.js</span>
            </div>
            <div className="terminal-body space-y-1">
              {codeLines.map((line, i) => (
                <motion.div
                  key={line.num}
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="code-line"
                >
                  <span className="line-number">{line.num}</span>
                  <span>
                    {line.content} {line.rest}{line.comma && ','}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
