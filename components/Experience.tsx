"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    id: 1,
    title: "Graphics Designing",
    duration: "3+ Years",
    description: "Creating high-end visual identities, marketing materials, and digital assets with a focus on modern aesthetics.",
  },
  {
    id: 2,
    title: "Video Editing",
    duration: "2+ Years",
    description: "Crafting engaging narratives through motion graphics, cinematic cuts, and seamless post-production workflows.",
  },
  {
    id: 3,
    title: "Graphics Designer Intern",
    duration: "Adryter Advertising",
    description: "Designed compelling marketing materials, ad creatives, and digital assets while collaborating with professional advertising teams.",
  },
];

export default function Experience() {
  return (
    <section className="relative w-full bg-[#09090b] py-32 px-6 md:px-12 lg:px-24 overflow-hidden">
      {/* Background Decorative Radial Glows */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center md:text-left"
        >
          <h2 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight uppercase">
            Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">Experience</span>
          </h2>
          <p className="mt-4 text-zinc-400 text-lg max-w-xl">
            A track record of delivering high-quality creative work across multiple disciplines.
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative border-l border-zinc-800 ml-4 md:ml-6 pl-8 md:pl-12 space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative group"
            >
              {/* Timeline Glowing Dot */}
              <div className="absolute -left-[41px] md:-left-[57px] top-1.5 w-6 h-6 rounded-full bg-zinc-950 border-2 border-zinc-800 group-hover:border-amber-500 flex items-center justify-center transition-colors duration-300">
                <div className="w-2 h-2 rounded-full bg-zinc-700 group-hover:bg-amber-400 transition-all duration-300 group-hover:scale-120" />
              </div>

              {/* Card Container */}
              <div className="p-8 rounded-2xl bg-zinc-900/40 backdrop-blur-sm border border-zinc-800/80 hover:border-amber-500/20 hover:bg-zinc-900/60 transition-all duration-350 shadow-2xl shadow-black/50">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-amber-400 transition-colors">
                    {exp.title}
                  </h3>
                  <span className="inline-block w-max px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-amber-400 bg-amber-400/5 border border-amber-400/10">
                    {exp.duration}
                  </span>
                </div>
                <p className="text-zinc-400 leading-relaxed font-light text-base md:text-lg">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
