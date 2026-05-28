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
    <section className="relative w-full bg-[#121212] py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Work Experience</h2>
          <p className="mt-4 text-zinc-400 text-lg max-w-xl">
            A track record of delivering high-quality creative work across multiple disciplines.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative rounded-2xl p-8 bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-colors duration-300"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-semibold text-white">
                  {exp.title}
                </h3>
                <span className="inline-block px-3 py-1 rounded-full text-sm font-medium text-emerald-400 bg-emerald-400/10 border border-emerald-400/20">
                  {exp.duration}
                </span>
              </div>
              <p className="text-zinc-400 leading-relaxed">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
