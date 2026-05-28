"use client";

import { motion } from "framer-motion";
import { Mail, Instagram, Linkedin, MessageCircle } from "lucide-react";

export default function Contact() {
  return (
    <section className="relative w-full bg-[#0a0a0a] py-32 px-6 md:px-12 lg:px-24 border-t border-zinc-800">
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">Let's Work Together</h2>
          <p className="mt-6 text-zinc-400 text-lg max-w-2xl mx-auto">
            Ready to bring your vision to life? Reach out through any of the platforms below to start a conversation about your next project.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* WhatsApp */}
          <motion.a
            href="https://wa.me/919528831448"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group flex flex-col items-center p-8 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-emerald-500/50 hover:bg-emerald-500/10 transition-all duration-300"
          >
            <MessageCircle className="w-8 h-8 text-emerald-400 mb-4 group-hover:scale-110 transition-transform duration-300" />
            <h3 className="text-white font-medium mb-1">WhatsApp</h3>
            <p className="text-zinc-400 text-sm">9528831448</p>
          </motion.a>

          {/* Email */}
          <motion.a
            href="mailto:krishnaverma2458@gmail.com"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group flex flex-col items-center p-8 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-red-500/50 hover:bg-red-500/10 transition-all duration-300"
          >
            <Mail className="w-8 h-8 text-red-400 mb-4 group-hover:scale-110 transition-transform duration-300" />
            <h3 className="text-white font-medium mb-1">Email</h3>
            <p className="text-zinc-400 text-sm break-all">krishnaverma2458<br/>@gmail.com</p>
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
            className="group flex flex-col items-center p-8 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-pink-500/50 hover:bg-pink-500/10 transition-all duration-300"
          >
            <Instagram className="w-8 h-8 text-pink-400 mb-4 group-hover:scale-110 transition-transform duration-300" />
            <h3 className="text-white font-medium mb-1">Instagram</h3>
            <p className="text-zinc-400 text-sm">_krishna.verma</p>
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
            className="group flex flex-col items-center p-8 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-300"
          >
            <Linkedin className="w-8 h-8 text-blue-400 mb-4 group-hover:scale-110 transition-transform duration-300" />
            <h3 className="text-white font-medium mb-1">LinkedIn</h3>
            <p className="text-zinc-400 text-sm">Krishna Verma</p>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
