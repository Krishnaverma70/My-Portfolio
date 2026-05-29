"use client";

import { motion } from "framer-motion";
import { Mail, Instagram, Linkedin, MessageCircle } from "lucide-react";

export default function Contact() {
  return (
    <section className="relative w-full bg-[#09090b] py-32 px-6 md:px-12 lg:px-24 border-t border-zinc-900 overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-full left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight uppercase">
            Let's Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">Together</span>
          </h2>
          <p className="mt-6 text-zinc-400 text-lg max-w-2xl mx-auto font-light">
            Ready to bring your vision to life? Reach out through any of the platforms below to start a conversation about your next project.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* WhatsApp */}
          <motion.a
            href="https://wa.me/919528831448"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group flex flex-col items-center p-8 rounded-2xl bg-zinc-900/40 backdrop-blur-sm border border-zinc-800/80 hover:border-amber-500/30 hover:bg-amber-500/5 hover:shadow-[0_0_30px_rgba(245,158,11,0.05)] transition-all duration-350 shadow-xl"
          >
            <div className="p-4 bg-zinc-950 rounded-full border border-zinc-800 group-hover:border-amber-500/30 mb-4 transition-all duration-300">
              <MessageCircle className="w-8 h-8 text-amber-400 group-hover:scale-110 transition-transform duration-300" />
            </div>
            <h3 className="text-white font-semibold text-lg mb-1">WhatsApp</h3>
            <p className="text-zinc-400 text-sm font-light">9528831448</p>
          </motion.a>

          {/* Email */}
          <motion.a
            href="mailto:krishnaverma2458@gmail.com"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group flex flex-col items-center p-8 rounded-2xl bg-zinc-900/40 backdrop-blur-sm border border-zinc-800/80 hover:border-orange-500/30 hover:bg-orange-500/5 hover:shadow-[0_0_30px_rgba(249,115,22,0.05)] transition-all duration-350 shadow-xl"
          >
            <div className="p-4 bg-zinc-950 rounded-full border border-zinc-800 group-hover:border-orange-500/30 mb-4 transition-all duration-300">
              <Mail className="w-8 h-8 text-orange-400 group-hover:scale-110 transition-transform duration-300" />
            </div>
            <h3 className="text-white font-semibold text-lg mb-1">Email</h3>
            <p className="text-zinc-400 text-sm font-light break-all">krishnaverma2458<br/>@gmail.com</p>
          </motion.a>

          {/* Instagram */}
          <motion.a
            href="https://instagram.com/_krishna.verma"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="group flex flex-col items-center p-8 rounded-2xl bg-zinc-900/40 backdrop-blur-sm border border-zinc-800/80 hover:border-yellow-500/30 hover:bg-yellow-500/5 hover:shadow-[0_0_30px_rgba(234,179,8,0.05)] transition-all duration-350 shadow-xl"
          >
            <div className="p-4 bg-zinc-950 rounded-full border border-zinc-800 group-hover:border-yellow-500/30 mb-4 transition-all duration-300">
              <Instagram className="w-8 h-8 text-yellow-400 group-hover:scale-110 transition-transform duration-300" />
            </div>
            <h3 className="text-white font-semibold text-lg mb-1">Instagram</h3>
            <p className="text-zinc-400 text-sm font-light">_krishna.verma</p>
          </motion.a>

          {/* LinkedIn */}
          <motion.a
            href="https://www.linkedin.com/in/krishna-verma-0868a525a"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="group flex flex-col items-center p-8 rounded-2xl bg-zinc-900/40 backdrop-blur-sm border border-zinc-800/80 hover:border-amber-600/30 hover:bg-amber-600/5 hover:shadow-[0_0_30px_rgba(217,119,6,0.05)] transition-all duration-350 shadow-xl"
          >
            <div className="p-4 bg-zinc-950 rounded-full border border-zinc-800 group-hover:border-amber-600/30 mb-4 transition-all duration-300">
              <Linkedin className="w-8 h-8 text-amber-500 group-hover:scale-110 transition-transform duration-300" />
            </div>
            <h3 className="text-white font-semibold text-lg mb-1">LinkedIn</h3>
            <p className="text-zinc-400 text-sm font-light">Krishna Verma</p>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
