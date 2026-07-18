import { useEffect, useState } from 'react';
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react';
import {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '@/components/ui/carousel';


// TODO: fill in `tech` for each project — left empty rather than guessed.
const projects = [
  {
    title: 'Stock Finance Hub',
    description: 'A fintech platform for long-term investors, built across web and mobile. Real-time graphs track actively listed companies against 30 years of candle data down to the 5-minute interval, streamed live over pub/sub and tuned for sub-millisecond latency. I built the investment dashboards and ran the whole thing on-premise.',
    tech: ['Pub/Sub', 'Real-time streaming'],
    stats: ['Sub-millisecond latency', '30 years of candle data', 'Web + mobile'],
    live: 'https://stockfinancehub.com',
  },
  {
    title: 'Pasar Technologies',
    description: 'An AI-first adtech platform delivered end to end: a web client plus cross-platform Android and iOS apps from a single Flutter codebase. Deployed to on-premise infrastructure through automated CI/CD pipelines.',
    tech: ['Flutter', 'CI/CD'],
    stats: ['Web + Android + iOS', 'On-premise deployment', 'CI/CD pipelines'],
    live: null,
  },
  {
    title: 'Genzy Basket',
    description: 'A grocery subscription service delivering daily essentials across RR Nagar, Bengaluru before 8 AM. I built the internal tooling that runs it: inventory management, admin dashboards, real-time order tracking, and cash flow reporting.',
    tech: [],
    stats: ['Inventory management', 'Real-time order tracking', 'Admin dashboards'],
    live: 'https://genzybasket.com',
  },
  {
    title: 'Vyomnexara',
    description: 'A corporate advisory and IT services company, where I developed software products for clients across a range of industries.',
    tech: [],
    stats: ['Commercial Project', 'Multi-industry clients'],
    live: null,
  },
  {
    title: 'Coco Hub',
    description: 'An e-commerce platform built for scale, covering product catalog management and order processing.',
    tech: [],
    stats: ['Commercial Project'],
    live: 'https://cocohub.in',
  },
  {
    title: 'Hampbox',
    description: 'A catalog storefront for a customized gifting business. Customers browse the range and open a WhatsApp conversation about any item through a deep link that pre-fills the message, turning product interest straight into a chat with the seller.',
    tech: [],
    stats: ['Commercial Project', 'Launching soon'],
    live: null,
  },
  {
    title: 'Mi Bootloader Unlock',
    description: 'A self-serve web service that handles instant Xiaomi bootloader unlocks for users in India.',
    tech: [],
    stats: ['Commercial Project'],
    live: 'https://mibootloaderunlock.com',
  },
  {
    title: 'Cloud Code',
    description:
      'An open-source remote development environment for coding from a phone, tablet, or any device, connecting back to your own server or homelab over a private Tailscale or Netbird mesh network. Ships a VS Code-style file tree and editor, an integrated AI assistant, Git management with push and pull, a projects panel, and SSH connection and device management.',
    tech: ['Tailscale', 'Netbird', 'SSH', 'Git'],
    stats: ['Open Source', 'Cross-device', 'Self-hosted'],
    // NOTE: repo is not public yet — this link 404s until it is published.
    github: 'https://github.com/harshith-km/cloud-code',
    live: null,
  },
  {
    title: 'GhostChat',
    description:
      'An open-source, end-to-end encrypted chat with no backend, no database, and no message history. Messages travel directly browser-to-browser over WebRTC data channels, wrapped in an AES-256-GCM layer whose key lives in the invite link\'s URL fragment — the part browsers never send to a server. Close the tab and the conversation is gone.',
    tech: ['React', 'Vite', 'WebRTC', 'PeerJS', 'Web Crypto API', 'Tailwind CSS'],
    stats: ['Open Source', 'End-to-end encrypted', 'Zero backend'],
    github: 'https://github.com/Encrypted-Private-chat/Web',
    live: 'https://encrypted-private-chat.github.io/Web/',
  },
  {
    title: 'InstaServer',
    description:
      'An open-source, one-command provisioning tool for fresh EC2 instances — 25 options across 21 modules, run straight from a curl pipe with nothing to clone. Handles hosting setup, SSH hardening and Fail2Ban, databases, Docker, SSL via Certbot, monitoring stacks, security auditing, and backups. Its snapshot mode captures a running server\'s packages, configs, databases, containers, cron jobs and certificates, then generates a ready-to-run reinstall script.',
    tech: ['Bash', 'AWS EC2', 'Nginx', 'Docker', 'PM2', 'Certbot', 'Linux'],
    stats: ['Open Source', '21 modules', 'One-command setup'],
    github: 'https://github.com/harshith-km/instaserver',
    live: 'https://harshith-km.github.io/instaserver/',
  },
];

// const ProjectsSection = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: "-100px" });

//   return (
//     <section id="projects" className="py-32" ref={ref}>
//       <div className="container mx-auto px-6">
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6 }}
//         >
//           <span className="section-label">
//             <span className="w-8 h-px bg-primary" />
//             Projects
//           </span>
//           <h2 className="section-title">
//             Things I've built.
//           </h2>
//         </motion.div>

//         <div className="space-y-12 mt-12">
//           {projects.map((project, index) => (
//             <motion.div
//               key={project.title}
//               initial={{ opacity: 0, y: 40 }}
//               animate={isInView ? { opacity: 1, y: 0 } : {}}
//               transition={{ duration: 0.6, delay: 0.1 * index }}
//               className="group relative border border-border bg-card/50 p-8 md:p-12 hover:border-primary/50 transition-all duration-500 card-hover"
//             >
//               <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
//                 <div className="flex-1">
//                   <div className="flex items-center gap-4 mb-4">
//                     <h3 className="text-2xl md:text-3xl font-bold text-foreground group-hover:text-primary transition-colors">
//                       {project.title}
//                     </h3>
//                     <ArrowUpRight 
//                       size={24} 
//                       className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" 
//                     />
//                   </div>
                  
//                   <p className="text-muted-foreground text-lg leading-relaxed mb-6 max-w-2xl">
//                     {project.description}
//                   </p>

//                   {/* Stats */}
//                   <div className="flex flex-wrap gap-6 mb-6">
//                     {project.stats.map((stat) => (
//                       <span key={stat} className="font-mono text-sm text-primary">
//                         {stat}
//                       </span>
//                     ))}
//                   </div>

//                   {/* Tech Stack */}
//                   <div className="flex flex-wrap gap-2">
//                     {project.tech.map((tech) => (
//                       <span
//                         key={tech}
//                         className="font-mono text-xs px-3 py-1.5 bg-secondary text-muted-foreground border border-border"
//                       >
//                         {tech}
//                       </span>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Links */}
//                 <div className="flex lg:flex-col gap-4">
//                   { project.github && (
//                   <a
//                     href={project.github}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="p-3 border border-border hover:border-primary hover:text-primary transition-all"
//                   >
//                     <Github size={20} />
//                   </a>
//                   )}
                  
//                   {project.live && (
//                     <a
//                       href={project.live}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="p-3 border border-border hover:border-primary hover:text-primary transition-all"
//                     >
//                       <ExternalLink size={20} />
//                     </a>
//                   )}
//                 </div>
//               </div>

//               {/* Decorative number */}
//               <span className="absolute -top-6 -right-4 text-[120px] font-bold text-border/30 select-none leading-none">
//                 0{index + 1}
//               </span>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProjectsSection;



// import { motion, useInView } from 'framer-motion';
// import { useRef } from 'react';
// import { Github, ExternalLink, ArrowUpRight } from 'lucide-react';

// const projects = [
//   // ... your projects array remains the same
// ];

const ProjectCard = ({ project, index }) => {
  return (
    <div
      className="group relative h-full border border-border bg-card/50 p-8 md:p-12 hover:border-primary/50 transition-all duration-500"
    >
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
        <div className="flex-1">
          <div className="flex items-center gap-4 mb-4">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            {/* If there's a live link, make the title/icon clickable */}
            {(project.live || project.github) && (
              <a href={project.live || project.github} target="_blank" rel="noreferrer">
                  <ArrowUpRight
                    size={24}
                    className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
                  />
              </a>
            )}
          </div>
          
          <p className="text-muted-foreground text-lg leading-relaxed mb-6 max-w-2xl">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-6 mb-6">
            {project.stats.map((stat) => (
              <span key={stat} className="font-mono text-sm text-primary font-medium">
                {stat}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="font-mono text-xs px-3 py-1.5 bg-secondary/50 text-muted-foreground border border-border rounded-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="flex lg:flex-col gap-4 relative z-10">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Source Code"
              className="p-3 border border-border hover:border-primary hover:text-primary transition-all bg-background"
            >
              <Github size={20} />
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Live Project"
              className="p-3 border border-border hover:border-primary hover:text-primary transition-all bg-background"
            >
              <ExternalLink size={20} />
            </a>
          )}
        </div>
      </div>

      {/* Decorative number - hidden from screen readers */}
      <span
        aria-hidden="true"
        className="absolute top-0 right-2 text-[120px] font-bold text-border/20 select-none leading-none pointer-events-none"
      >
        {String(index + 1).padStart(2, '0')}
      </span>
    </div>
  );
};

const AUTOPLAY_DELAY = 5000;

const ProjectsSection = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [selected, setSelected] = useState(0);
  const [paused, setPaused] = useState(false);

  // Keep the dots in sync with whichever slide Embla settles on.
  useEffect(() => {
    if (!api) return;

    const onSelect = () => setSelected(api.selectedScrollSnap());
    onSelect();
    api.on('select', onSelect);

    return () => {
      api.off('select', onSelect);
    };
  }, [api]);

  // Autoplay, driven off Embla's own API so we don't pull in the plugin.
  // Loops back to the start on the last slide, and holds while hovered or
  // when the tab is in the background.
  useEffect(() => {
    if (!api || paused) return;

    const timer = setInterval(() => {
      if (document.hidden) return;
      if (api.canScrollNext()) {
        api.scrollNext();
      } else {
        api.scrollTo(0);
      }
    }, AUTOPLAY_DELAY);

    return () => clearInterval(timer);
  }, [api, paused]);

  return (
    <section id="projects" className="py-32">
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <span className="flex items-center gap-4 text-primary font-mono text-sm mb-4">
            <span className="w-8 h-px bg-primary" />
            Projects
          </span>
          <h2 className="text-4xl md:text-5xl font-bold">Things I've built.</h2>
        </div>

        <Carousel
          setApi={setApi}
          opts={{ align: 'start', loop: true }}
          className="w-full"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={() => setPaused(false)}
        >
          <CarouselContent className="-ml-6">
            {projects.map((project, index) => (
              <CarouselItem key={project.title} className="pl-6 lg:basis-1/2">
                <ProjectCard project={project} index={index} />
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="hidden md:flex -left-4" />
          <CarouselNext className="hidden md:flex -right-4" />
        </Carousel>

        {/* Dots */}
        <div className="flex justify-center gap-3 mt-10">
          {projects.map((project, index) => (
            <button
              key={project.title}
              onClick={() => api?.scrollTo(index)}
              aria-label={`Go to ${project.title}`}
              aria-current={selected === index}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                selected === index
                  ? 'w-8 bg-primary'
                  : 'w-1.5 bg-border hover:bg-primary/50'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;