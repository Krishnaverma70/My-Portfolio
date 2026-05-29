"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    id: 2,
    title: "Video Editing Showcase",
    category: "Video Editing",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=1740&auto=format&fit=crop",
    link: "https://drive.google.com/drive/folders/1SwHXGIxoWu9hZfWfsGrbL1-wFZmoAG_i?usp=drive_link",
  },
  {
    id: 3,
    title: "Social Media Design",
    category: "Graphics Design",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=1742&auto=format&fit=crop",
    link: "https://drive.google.com/drive/folders/14u3BKaGHz5lpJ0rfICD48FIpTtMY87Ix?usp=drive_link",
  },
];

export default function Projects() {
  return (
    <section className="relative w-full bg-[#09090b] py-32 px-6 md:px-12 lg:px-24 border-t border-zinc-900 overflow-hidden">
      {/* Background radial light */}
      <div className="absolute top-1/2 left-full -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center md:text-left"
        >
          <h2 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight uppercase">
            Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">Work</span>
          </h2>
          <p className="mt-4 text-zinc-400 text-lg max-w-xl">
            A collection of digital experiences combining high-end design with creative storytelling.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative rounded-2xl overflow-hidden bg-zinc-900/30 border border-zinc-800/80 hover:border-amber-500/30 transition-all duration-350 flex flex-col shadow-2xl shadow-black/80"
            >
              {/* Image Container */}
              <div className="relative h-[300px] sm:h-[380px] w-full overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                  style={{ backgroundImage: `url(${project.image})` }}
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-500" />
              </div>

              {/* Content */}
              <div className="p-8 backdrop-blur-md bg-zinc-950/80 relative z-10 flex-grow flex flex-col justify-between border-t border-zinc-800/50">
                <div>
                  <p className="text-xs font-bold text-amber-400 tracking-widest uppercase mb-2">
                    {project.category}
                  </p>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-amber-350 transition-colors">
                    {project.title}
                  </h3>
                </div>
                
                <a 
                  href={project.link} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-semibold text-white hover:text-amber-400 transition-colors mt-6 w-max group/link"
                >
                  View Project <ArrowRight className="ml-2 w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
