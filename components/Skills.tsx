"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Trophy } from "lucide-react";

export default function Skills() {
  return (
    <section className="relative w-full bg-[#09090b] pb-32 px-6 md:px-12 lg:px-24 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center md:text-left"
        >
          <h2 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight uppercase">
            Skills & <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">Achievements</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Skills Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 rounded-2xl bg-zinc-900/40 backdrop-blur-sm border border-zinc-800/80 hover:border-amber-500/30 hover:bg-zinc-900/60 transition-all duration-350 shadow-2xl shadow-black/50"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-amber-500/10 rounded-xl border border-amber-500/20">
                <CheckCircle2 className="w-6 h-6 text-amber-400" />
              </div>
              <h3 className="text-2xl font-bold text-white">Core Expertise</h3>
            </div>
            <ul className="space-y-4">
              <li className="text-lg text-zinc-300 flex items-center gap-4 group">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400 group-hover:scale-125 transition-transform duration-300"></span>
                <span className="font-light">Video Editor</span>
              </li>
              <li className="text-lg text-zinc-300 flex items-center gap-4 group">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400 group-hover:scale-125 transition-transform duration-300"></span>
                <span className="font-light">Graphics Designer</span>
              </li>
            </ul>
          </motion.div>

          {/* Achievements Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-8 rounded-2xl bg-zinc-900/40 backdrop-blur-sm border border-zinc-800/80 hover:border-amber-500/30 hover:bg-zinc-900/60 transition-all duration-350 shadow-2xl shadow-black/50"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-orange-500/10 rounded-xl border border-orange-500/20">
                <Trophy className="w-6 h-6 text-orange-400" />
              </div>
              <h3 className="text-2xl font-bold text-white">Leadership & Awards</h3>
            </div>
            <ul className="space-y-5">
              <li className="text-lg text-zinc-300 flex items-start gap-4 group">
                <span className="w-2 h-2 mt-2.5 rounded-full bg-orange-400 shrink-0 group-hover:scale-125 transition-transform duration-300"></span>
                <span className="font-light leading-relaxed">
                  <strong className="text-white font-medium">Designing Head</strong> — Kronos 2026 ITM College Tech Fest
                </span>
              </li>
              <li className="text-lg text-zinc-300 flex items-start gap-4 group">
                <span className="w-2 h-2 mt-2.5 rounded-full bg-orange-400 shrink-0 group-hover:scale-125 transition-transform duration-300"></span>
                <span className="font-light leading-relaxed">
                  <strong className="text-white font-medium">Social Media Head</strong> — Kronos 2026 ITM College Tech Fest
                </span>
              </li>
              <li className="text-lg text-zinc-300 flex items-start gap-4 group">
                <span className="w-2 h-2 mt-2.5 rounded-full bg-orange-400 shrink-0 group-hover:scale-125 transition-transform duration-300"></span>
                <span className="font-light leading-relaxed">
                  <strong className="text-white font-medium">Event Leadership & Design</strong> — Conducted and managed designing for various college-level events, concerts, and more.
                </span>
              </li>
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
