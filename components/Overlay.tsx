"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export default function Overlay() {
  const { scrollYProgress } = useScroll();
  
  // Smooth out the scroll progress to remove jitter
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Section 1: 0% to 20% scroll
  const opacity1 = useTransform(smoothProgress, [0, 0.1, 0.15], [1, 1, 0]);
  const y1 = useTransform(smoothProgress, [0, 0.2], [0, -100]);

  // Section 2: 25% to 50% scroll
  const opacity2 = useTransform(smoothProgress, [0.2, 0.3, 0.45, 0.5], [0, 1, 1, 0]);
  const x2 = useTransform(smoothProgress, [0.2, 0.5], [-50, 50]);

  // Section 3: 55% to 80% scroll
  const opacity3 = useTransform(smoothProgress, [0.55, 0.65, 0.8, 0.85], [0, 1, 1, 0]);
  const x3 = useTransform(smoothProgress, [0.55, 0.85], [50, -50]);

  return (
    <div className="absolute inset-0 pointer-events-none z-10 flex flex-col justify-center items-center h-full w-full">
      
      {/* Section 1 */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-full px-4">
        <motion.div style={{ opacity: opacity1, y: y1 }}>
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight drop-shadow-2xl">
            Krishna Verma
          </h1>
          <p className="mt-4 text-xl md:text-2xl text-zinc-300 font-light tracking-wide">
            Creative Designer & Video Editor.
          </p>
          
          {/* Floating 3D Tool Logos */}
          <div className="mt-10 flex flex-wrap justify-center gap-6 md:gap-8">
            {[
              { name: "Photoshop", src: "https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg", shadow: "shadow-blue-500/50" },
              { name: "Illustrator", src: "https://upload.wikimedia.org/wikipedia/commons/f/fb/Adobe_Illustrator_CC_icon.svg", shadow: "shadow-orange-500/50" },
              { name: "After Effects", src: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Adobe_After_Effects_CC_icon.svg", shadow: "shadow-indigo-500/50" },
              { name: "Premiere Pro", src: "https://upload.wikimedia.org/wikipedia/commons/4/40/Adobe_Premiere_Pro_CC_icon.svg", shadow: "shadow-purple-500/50" },
              { name: "CapCut", src: "https://www.google.com/s2/favicons?domain=capcut.com&sz=128", shadow: "shadow-zinc-500/50" }
            ].map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ y: 0 }}
                animate={{ y: [-8, 8, -8] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.2,
                }}
                className={`relative w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-[#1A1A1A] border border-zinc-800 p-3 flex items-center justify-center transform hover:scale-110 transition-transform duration-300 drop-shadow-2xl ${tool.shadow}`}
                style={{
                  transformStyle: "preserve-3d",
                  transform: "perspective(1000px) rotateX(10deg) rotateY(-10deg)"
                }}
                title={tool.name}
              >
                {/* 3D Depth Layer */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />
                <img src={tool.src} alt={tool.name} className="w-full h-full object-contain filter drop-shadow-md" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Section 2 */}
      <div className="absolute top-1/2 left-[10%] md:left-[20%] -translate-y-1/2">
        <motion.div style={{ opacity: opacity2, x: x2 }}>
          <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight drop-shadow-xl max-w-lg">
            I build <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
              digital experiences.
            </span>
          </h2>
        </motion.div>
      </div>

      {/* Section 3 */}
      <div className="absolute top-1/2 right-[10%] md:right-[20%] -translate-y-1/2 text-right">
        <motion.div style={{ opacity: opacity3, x: x3 }}>
          <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight drop-shadow-xl max-w-lg">
            Bridging <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-l from-purple-400 to-pink-400">
              design & engineering.
            </span>
          </h2>
        </motion.div>
      </div>

    </div>
  );
}
