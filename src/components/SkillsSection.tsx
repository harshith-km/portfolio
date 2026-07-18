import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skills = {
  Languages: ["TypeScript", "JavaScript", "Python", "Dart", "Bash", "PHP", "C"],
  Frontend: ["React", "Next.js", "Tailwind CSS", "HTML/CSS", "Figma"],
  Mobile: ["Flutter", "Android", "iOS"],
  Backend: [
    "Node.js",
    "Express",
    "Fastify",
    "Flask",
    "REST APIs",
    "WebSockets",
    "Pub/Sub",
  ],
  Databases: ["PostgreSQL", "MongoDB", "MySQL", "SQLite", "Redis (cache)"],
  Architecture: [
    "Microservices",
    "Distributed systems",
    "System design (HLD/LLD)",
    "Real-time streaming",
    "Performance optimization",
  ],
  "DevOps & Infrastructure": [
    "Docker",
    "AWS (EC2, S3, CloudWatch)",
    "CI/CD pipelines",
    "On-premise deployment",
    "Nginx",
    "Caddy",
    "Prometheus / Grafana",
    "Linux",
  ],
  "Self-Hosting & Networking": [
    "Homelab administration",
    "Tailscale",
    "Netbird",
    "Mesh VPN",
    "Network security",
    "Immich / Seafile / Navidrome",
  ],
  "AI Integration": ["Claude", "OpenAI", "Gemini", "Groq"],
  Tools: ["Git", "GitHub", "VS Code"],
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
          <h2 className="section-title">Tech I work with.</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10 mt-12">
          {Object.entries(skills).map(([category, items], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.05 * index }}
              className="group"
            >
              <h3 className="font-mono text-primary text-sm mb-4 flex items-center gap-2">
                <span className="text-muted-foreground">//</span>
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="font-mono text-xs px-3 py-1.5 bg-secondary/50 text-muted-foreground border border-border rounded-sm hover:border-primary/50 hover:text-primary transition-colors"
                  >
                    {skill}
                  </span>
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
            { num: "10+", label: "Projects Shipped" },
            { num: "4", label: "Organizations" },
            { num: "3+", label: "Years Building" },
            { num: "3", label: "Open Source Tools" },
          ].map((stat, i) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                {stat.num}
              </div>
              <div className="font-mono text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
