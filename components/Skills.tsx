"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Trophy } from "lucide-react";

export default function Skills() {
  return (
    <section className="relative w-full bg-[#121212] pb-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Skills & Achievements</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Skills Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-colors"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-blue-500/10 rounded-lg border border-blue-500/20">
                <CheckCircle2 className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-2xl font-semibold text-white">Core Expertise</h3>
            </div>
            <ul className="space-y-4">
              <li className="text-lg text-zinc-300 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                Video Editor
              </li>
              <li className="text-lg text-zinc-300 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                Graphics Designer
              </li>
            </ul>
          </motion.div>

          {/* Achievements Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-8 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-colors"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-yellow-500/10 rounded-lg border border-yellow-500/20">
                <Trophy className="w-6 h-6 text-yellow-400" />
              </div>
              <h3 className="text-2xl font-semibold text-white">Leadership & Awards</h3>
            </div>
            <ul className="space-y-4">
              <li className="text-lg text-zinc-300 flex items-start gap-3">
                <span className="w-2 h-2 mt-2.5 rounded-full bg-yellow-400 shrink-0"></span>
                <span><strong>Designing Head</strong> — Kronos 2026 ITM College Tech Fest</span>
              </li>
              <li className="text-lg text-zinc-300 flex items-start gap-3">
                <span className="w-2 h-2 mt-2.5 rounded-full bg-yellow-400 shrink-0"></span>
                <span><strong>Social Media Head</strong> — Kronos 2026 ITM College Tech Fest</span>
              </li>
              <li className="text-lg text-zinc-300 flex items-start gap-3">
                <span className="w-2 h-2 mt-2.5 rounded-full bg-yellow-400 shrink-0"></span>
                <span><strong>Event Leadership & Design</strong> — Conducted and managed designing for various college-level events, concerts, and more.</span>
              </li>
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
