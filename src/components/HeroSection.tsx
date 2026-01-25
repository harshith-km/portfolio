import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden bg-background">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.03)_1px,transparent_1px)] bg-[size:45px_45px] pointer-events-none" />

      <div className="container mx-auto px-6 py-20 md:py-32 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          {/* Text Content */}
          <div className="flex-1 max-w-3xl order-2 lg:order-1 text-left">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="font-mono text-primary mb-6 flex items-center gap-2"
            >
              <span className="text-muted-foreground">$</span>
              <span>whoami</span>
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="w-2.5 h-5 bg-primary"
              />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 tracking-tight"
            >
              Harshith KM
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-2xl md:text-3xl text-muted-foreground mb-8 font-light"
            >
              Full-Stack{" "}
              <span className="text-foreground font-semibold">Developer</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg md:text-xl text-muted-foreground max-w-xl mb-12 leading-relaxed"
            >
              Building performant, scalable web applications. Currently focused
              on
              <span className="text-primary font-medium italic">
                {" "}
                React
              </span>{" "}
              and
              <span className="text-primary font-medium italic">
                {" "}
                Distributed Systems
              </span>
              .
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-4 mb-16"
            >
              <a
                href="#projects"
                className="group px-8 py-4 bg-primary text-black font-bold flex items-center gap-3 hover:bg-primary/80 transition-all rounded-sm"
              >
                View Projects
                <ArrowDown
                  size={20}
                  className="group-hover:translate-y-1 transition-transform"
                />
              </a>
              <a
                href="#contact"
                className="px-8 py-4 border border-border text-foreground hover:border-primary transition-all rounded-sm"
              >
                Get in Touch
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex items-center gap-6 text-muted-foreground"
            >
              <a
                href="https://github.com/harshith-km"
                target="_blank"
                className="hover:text-primary transition-colors"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/harshith-km/"
                target="_blank"
                className="hover:text-primary transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:harshithkm2003@gmail.com"
                className="hover:text-primary transition-colors"
              >
                <Mail size={24} />
              </a>
              <div className="h-px w-16 bg-border" />
              <span className="font-mono text-sm tracking-widest">
                BANGALORE // IN
              </span>
            </motion.div>
          </div>

          {/* Enhanced Profile Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative order-1 lg:order-2"
          >
            {/* Organic Float Animation wrapper */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[450px] lg:h-[450px]"
            >
              {/* Animated Decorative Frame */}
              <motion.div
                animate={{ x: [8, 12, 8], y: [8, 4, 8] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
                className="absolute inset-0 border-2 border-primary -z-10 translate-x-3 translate-y-3"
              />

              {/* Image Container with aspect ratio fix */}
              <div className="w-full h-full aspect-square overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 border border-border bg-muted group shadow-2xl">
                <img
                  src="profile-picture.jpg"
                  alt="Harshith KM"
                  className="w-full h-full object-cover object-center scale-110 group-hover:scale-100 transition-transform duration-1000"
                />
              </div>

              {/* Status Badge */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 }}
                className="absolute -bottom-6 -left-6 bg-background/90 backdrop-blur-md border border-border p-5 shadow-2xl hidden md:block"
              >
                <div className="flex items-center gap-3">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                  </span>
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-tighter text-muted-foreground">
                      Availability
                    </p>
                    <p className="text-sm font-bold">Open for Freelance</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

// // export default HeroSection;
// import { motion } from 'framer-motion';
// import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';
// import profileImg from '../assets/profile-picture.jpg';

// const HeroSection = () => {
//   return (
//     <section className="min-h-screen flex items-center relative overflow-hidden">
//       {/* Grid background */}
//       <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

//       <div className="container mx-auto px-6 py-20 md:py-32 relative z-10">
//         <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">

//           {/* Text Content */}
//           <div className="flex-1 max-w-4xl order-2 lg:order-1">
//             {/* Terminal intro */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5 }}
//               className="font-mono text-primary mb-6 flex items-center gap-2"
//             >
//               <span className="text-muted-foreground">$</span>
//               <span>whoami</span>
//               <span className="w-2 h-5 bg-primary animate-pulse" />
//             </motion.div>

//             <motion.h1
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: 0.1 }}
//               className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-4 tracking-tight"
//             >
//               Harshith KM
//             </motion.h1>

//             <motion.h2
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: 0.2 }}
//               className="text-2xl md:text-3xl lg:text-4xl text-muted-foreground mb-8"
//             >
//               Full-Stack Developer
//             </motion.h2>

//             <motion.p
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: 0.3 }}
//               className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-12 leading-relaxed"
//             >
//               I build performant web applications with clean code and modern technologies.
//               Currently crafting digital experiences with{' '}
//               <span className="text-primary font-medium">React</span>,{' '}
//               <span className="text-primary font-medium">Node.js</span>, and{' '}
//               <span className="text-primary font-medium">Python</span>.
//             </motion.p>

//             {/* CTA & Socials */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: 0.4 }}
//               className="flex flex-wrap gap-4 mb-16"
//             >
//               <a href="#projects" className="group inline-flex items-center gap-2 px-6 py-3 bg-primary text-black font-semibold hover:bg-primary/90 transition-all duration-300">
//                 <span>View Projects</span>
//                 <ArrowDown size={18} className="group-hover:translate-y-1 transition-transform" />
//               </a>
//               <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground hover:border-primary hover:text-primary transition-all duration-300">
//                 Get in Touch
//               </a>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.5, delay: 0.5 }}
//               className="flex items-center gap-6"
//             >
//               <a href="https://github.com/Harshith-KM" target="_blank" rel="noopener" className="text-muted-foreground hover:text-primary transition-colors"><Github size={22} /></a>
//               <a href="https://linkedin.com/in/harshithkm" target="_blank" rel="noopener" className="text-muted-foreground hover:text-primary transition-colors"><Linkedin size={22} /></a>
//               <a href="mailto:harshithkm2003@gmail.com" className="text-muted-foreground hover:text-primary transition-colors"><Mail size={22} /></a>
//               <span className="h-px w-12 bg-border" />
//               <span className="font-mono text-sm text-muted-foreground">Bangalore, IN</span>
//             </motion.div>
//           </div>

//           {/* Profile Image Section */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="relative order-1 lg:order-2 flex-shrink-0"
//           >
//             <div className="relative w-32 h-32 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px]">
//               {/* Decorative Frame Background */}
//               <div className="absolute inset-0 border-2 border-primary translate-x-2 translate-y-2 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300" />

//               {/* Image Container */}
//               <div className="w-full h-full overflow-hidden grayscale hover:grayscale-0 transition-all duration-500 border border-border bg-card">
//                 <img
//                   src="profile-picture.jpg"
//                   alt="Harshith KM - Full Stack Developer"
//                   className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
//                 />
//               </div>

//               {/* Glassmorphism Badge */}
//               <div className="absolute -bottom-4 -left-4 bg-background/80 backdrop-blur-md border border-border p-4 shadow-xl hidden md:block">
//                 <p className="font-mono text-xs text-primary mb-1">Status</p>
//                 <p className="text-sm font-bold">Open for Freelance</p>
//               </div>
//             </div>
//           </motion.div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;
