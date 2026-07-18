// import { motion } from "framer-motion";
// import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";

// const HeroSection = () => {
//   return (
//     <section className="min-h-screen flex items-center relative overflow-hidden bg-background">
//       {/* Subtle Grid Background */}
//       <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.03)_1px,transparent_1px)] bg-[size:45px_45px] pointer-events-none" />

//       <div className="container mx-auto px-6 py-20 md:py-32 relative z-10">
//         <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
//           {/* Text Content */}
//           <div className="flex-1 max-w-3xl order-2 lg:order-1 text-left">
//             <motion.div
//               initial={{ opacity: 0, x: -20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.5 }}
//               className="font-mono text-primary mb-6 flex items-center gap-2"
//             >
//               <span className="text-muted-foreground">$</span>
//               <span>whoami</span>
//               <motion.span
//                 animate={{ opacity: [1, 0] }}
//                 transition={{ duration: 0.8, repeat: Infinity }}
//                 className="w-2.5 h-5 bg-primary"
//               />
//             </motion.div>

//             <motion.h1
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: 0.1 }}
//               className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 tracking-tight"
//             >
//               Harshith KM
//             </motion.h1>

//             <motion.h2
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: 0.2 }}
//               className="text-2xl md:text-3xl text-muted-foreground mb-8 font-light"
//             >
//               Full-Stack{" "}
//               <span className="text-foreground font-semibold">Developer</span>
//             </motion.h2>

//             <motion.p
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: 0.3 }}
//               className="text-lg md:text-xl text-muted-foreground max-w-xl mb-12 leading-relaxed"
//             >
//               Building performant, scalable web applications. Currently focused
//               on
//               <span className="text-primary font-medium italic">
//                 {" "}
//                 React
//               </span>{" "}
//               and
//               <span className="text-primary font-medium italic">
//                 {" "}
//                 Distributed Systems
//               </span>
//               .
//             </motion.p>

//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: 0.4 }}
//               className="flex flex-wrap gap-4 mb-16"
//             >
//               <a
//                 href="#projects"
//                 className="group px-8 py-4 bg-primary text-black font-bold flex items-center gap-3 hover:bg-primary/80 transition-all rounded-sm"
//               >
//                 View Projects
//                 <ArrowDown
//                   size={20}
//                   className="group-hover:translate-y-1 transition-transform"
//                 />
//               </a>
//               <a
//                 href="#contact"
//                 className="px-8 py-4 border border-border text-foreground hover:border-primary transition-all rounded-sm"
//               >
//                 Get in Touch
//               </a>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.8, delay: 0.6 }}
//               className="flex items-center gap-6 text-muted-foreground"
//             >
//               <a href="#" className="hover:text-primary transition-colors">
//                 <Github size={24} />
//               </a>
//               <a href="#" className="hover:text-primary transition-colors">
//                 <Linkedin size={24} />
//               </a>
//               <a href="#" className="hover:text-primary transition-colors">
//                 <Mail size={24} />
//               </a>
//               <div className="h-px w-16 bg-border" />
//               <span className="font-mono text-sm tracking-widest">
//                 BANGALORE // IN
//               </span>
//             </motion.div>
//           </div>

//           {/* Enhanced Profile Image Section */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.7, ease: "easeOut" }}
//             className="relative order-1 lg:order-2"
//           >
//             {/* Organic Float Animation wrapper */}
//             <motion.div
//               animate={{ y: [0, -15, 0] }}
//               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
//               className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[450px] lg:h-[450px]"
//             >
//               {/* Animated Decorative Frame */}
//               <motion.div
//                 animate={{ x: [8, 12, 8], y: [8, 4, 8] }}
//                 transition={{
//                   duration: 4,
//                   repeat: Infinity,
//                   ease: "easeInOut",
//                   delay: 0.5,
//                 }}
//                 className="absolute inset-0 border-2 border-primary -z-10 translate-x-3 translate-y-3"
//               />

//               {/* Image Container with aspect ratio fix */}
//               <div className="w-full h-full aspect-square overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 border border-border bg-muted group shadow-2xl">
//                 <img
//                   src="profile-picture1.png"
//                   alt="Harshith KM"
//                   className="w-full h-full object-cover object-center scale-110 group-hover:scale-100 transition-transform duration-1000"
//                 />
//               </div>

//               {/* Status Badge */}
//               <motion.div
//                 initial={{ opacity: 0, x: 20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ delay: 1 }}
//                 className="absolute -bottom-6 -left-6 bg-background/90 backdrop-blur-md border border-border p-5 shadow-2xl hidden md:block"
//               >
//                 <div className="flex items-center gap-3">
//                   <span className="relative flex h-3 w-3">
//                     <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
//                     <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
//                   </span>
//                   <div>
//                     <p className="font-mono text-[10px] uppercase tracking-tighter text-muted-foreground">
//                       Availability
//                     </p>
//                     <p className="text-sm font-bold">Open for Freelance</p>
//                   </div>
//                 </div>
//               </motion.div>
//             </motion.div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;

import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  ArrowDown,
  Code2,
  Terminal,
  Cpu,
} from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden bg-[#0a0a0a] text-white">
      {/* 1. Dynamic Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Subtle Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.05)_1px,transparent_1px)] bg-[size:50px_50px]" />

        {/* Animated Glow Blobs */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/4 -right-20 w-96 h-96 bg-primary/20 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute bottom-1/4 -left-20 w-80 h-80 bg-blue-500/10 rounded-full blur-[100px]"
        />
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* 2. Text Content */}
          <div className="flex-1 max-w-2xl order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/5 text-primary font-mono text-xs mb-8"
            >
              <Terminal size={14} />
              <span>system.init("Harshith.exe")</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-6xl md:text-8xl font-black mb-6 tracking-tighter"
            >
              Building <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-green-400 to-emerald-500">
                Systems.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-gray-400 text-lg md:text-xl max-w-lg mb-10 leading-relaxed font-light"
            >
              Software architect building
              <span className="text-white font-medium">
                {" "}
                distributed systems{" "}
              </span>
              end to end — from{" "}
              <span className="text-white font-medium">
                web and mobile clients
              </span>{" "}
              to the{" "}
              <span className="text-white font-medium">
                infrastructure they run on
              </span>
              .
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <a
                href="#projects"
                className="relative group px-8 py-4 bg-primary text-black font-bold rounded-lg overflow-hidden transition-all"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Explore Work <ArrowDown size={18} />
                </span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </a>
              <a
                href="#contact"
                className="px-8 py-4 rounded-lg border border-white/10 hover:border-primary/50 hover:bg-white/5 transition-all"
              >
                Resume.pdf
              </a>
            </motion.div>

            {/* Socials */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-8"
            >
              {[
                { Icon: Github, href: "https://github.com/harshith-km", label: "GitHub" },
                {
                  Icon: Linkedin,
                  href: "https://www.linkedin.com/in/harshith-km/",
                  label: "LinkedIn",
                },
                { Icon: Mail, href: "mailto:harshithkm2003@gmail.com", label: "Email" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                  aria-label={label}
                  className="text-gray-500 hover:text-primary transition-colors"
                >
                  <Icon size={22} />
                </a>
              ))}
              <div className="h-px w-12 bg-white/10" />
              <p className="text-[10px] font-mono tracking-widest text-gray-600 uppercase">
                Available for hire
              </p>
            </motion.div>
          </div>

          {/* 3. The "Visual" Section - optimized for Backgroundless PNG */}
          <div className="flex-1 relative order-1 lg:order-2 flex justify-center items-center">
            {/* Background Glow behind person */}
            <div className="absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-primary/20 rounded-full blur-[100px] -z-10" />

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative"
            >
              {/* Floating Tech Badges around the image */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-4 -right-4 z-20 bg-[#1a1a1a] border border-white/10 p-3 rounded-2xl shadow-2xl"
              >
                <Code2 className="text-primary" size={24} />
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute top-1/2 -left-8 z-20 bg-[#1a1a1a] border border-white/10 p-3 rounded-2xl shadow-2xl"
              >
                <Cpu className="text-blue-400" size={24} />
              </motion.div>

              {/* Main Image Container */}
              <div className="relative w-72 h-72 md:w-[450px] md:h-[500px] pointer-events-none select-none">
                <img
                  src="profile-picture1.png"
                  alt="Harshith KM"
                  className="w-full h-full object-contain relative z-10 filter drop-shadow-[0_20px_50px_rgba(34,197,94,0.3)]"
                />

                {/* Decorative Circle Behind Image */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[120%] h-[70%] bg-gradient-to-t from-primary/10 to-transparent rounded-full -z-10" />
              </div>

              {/* Status Indicator */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 }}
                className="absolute bottom-10 -right-10 bg-white/5 backdrop-blur-xl border border-white/10 p-4 rounded-2xl shadow-2xl z-20"
              >
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                  <span className="text-xs font-mono text-gray-300">
                    Currently:{" "}
                    <span className="text-white">Designing Systems</span>
                  </span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
