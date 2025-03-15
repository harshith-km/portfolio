import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 relative">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-accent/5 rounded-bl-full -z-10"></div>
      
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="section-title"
        >
          About Me
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-primary-dark">
              Hello! I'm <span className="text-primary font-medium">Harshith KM</span>, a full-stack web developer based in Bangalore, India. I'm currently pursuing my Bachelor of Computer Applications (BCA) degree at Government First Grade College, Tumkur.
            </p>
            <p className="text-lg text-primary-dark">
              I specialize in building exceptional digital experiences with a strong foundation in <span className="text-primary">Python</span>, <span className="text-primary">Flask</span>, <span className="text-primary">PHP</span>, and <span className="text-primary">JavaScript</span>. I have experience in developing scalable, user-centric web applications with intuitive interfaces and robust backend systems.
            </p>
            <p className="text-lg text-primary-dark">
              My journey in web development has equipped me with skills in implementing real-time features and predictive analytics in projects. I'm passionate about creating solutions that are not only functional but also provide an excellent user experience.
            </p>
            <p className="text-lg text-primary-dark">
              I'm currently looking for opportunities to apply my technical skills and contribute to innovative solutions in a collaborative environment as a full-stack developer.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Profile Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-secondary shadow-xl">
                <img 
                  src={`${process.env.PUBLIC_URL}/profilephoto.png`} 
                  alt="Harshith KM" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/10 to-accent/10"></div>
              </div>
            </motion.div>

            {/* Personal Info Card */}
            <div className="card p-8">
              <h3 className="text-2xl font-bold mb-6 gradient-text">Personal Info</h3>
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row border-b border-secondary pb-3">
                  <h4 className="text-primary font-medium w-full sm:w-1/3 mb-1 sm:mb-0">Name</h4>
                  <p className="w-full sm:w-2/3 text-primary-dark">Harshith KM</p>
                </div>
                <div className="flex flex-col sm:flex-row border-b border-secondary pb-3">
                  <h4 className="text-primary font-medium w-full sm:w-1/3 mb-1 sm:mb-0">Location</h4>
                  <p className="w-full sm:w-2/3 text-primary-dark">Rajarajeswari Nagar, Bangalore</p>
                </div>
                <div className="flex flex-col sm:flex-row border-b border-secondary pb-3">
                  <h4 className="text-primary font-medium w-full sm:w-1/3 mb-1 sm:mb-0">Email</h4>
                  <p className="w-full sm:w-2/3 text-primary-dark break-words">harshithkm2003@gmail.com</p>
                </div>
                <div className="flex flex-col sm:flex-row border-b border-secondary pb-3">
                  <h4 className="text-primary font-medium w-full sm:w-1/3 mb-1 sm:mb-0">Phone</h4>
                  <p className="w-full sm:w-2/3 text-primary-dark">+91 77604 41296</p>
                </div>
                <div className="flex flex-col sm:flex-row border-b border-secondary pb-3">
                  <h4 className="text-primary font-medium w-full sm:w-1/3 mb-1 sm:mb-0">Education</h4>
                  <p className="w-full sm:w-2/3 text-primary-dark">Bachelor of Computer Applications (BCA)</p>
                </div>
                <div className="flex flex-col sm:flex-row">
                  <h4 className="text-primary font-medium w-full sm:w-1/3 mb-1 sm:mb-0">Interests</h4>
                  <p className="w-full sm:w-2/3 text-primary-dark">Data Structures and Algorithms, Linux customization, AI and Machine Learning</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 