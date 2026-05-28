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
    <section className="relative w-full bg-[#121212] py-32 px-6 md:px-12 lg:px-24 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Selected Work</h2>
          <p className="mt-4 text-zinc-400 text-lg max-w-xl">
            A collection of digital experiences combining high-end design with seamless engineering.
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
              className="group relative rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-colors duration-300 flex flex-col"
            >
              {/* Image Container */}
              <div className="relative h-[300px] sm:h-[400px] w-full overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${project.image})` }}
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
              </div>

              {/* Content */}
              <div className="p-8 backdrop-blur-md bg-zinc-900/90 relative z-10 flex-grow flex flex-col justify-between">
                <div>
                  <p className="text-sm font-medium text-emerald-400 tracking-wider uppercase mb-2">
                    {project.category}
                  </p>
                  <h3 className="text-2xl font-semibold text-white mb-4">
                    {project.title}
                  </h3>
                </div>
                
                <a 
                  href={project.link} 
                  className="inline-flex items-center text-sm font-medium text-white hover:text-emerald-400 transition-colors mt-6 w-max"
                >
                  View Project <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
