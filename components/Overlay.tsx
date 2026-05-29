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

  // Section 1: 0% to 15% scroll
  const opacity1 = useTransform(smoothProgress, [0, 0.1, 0.15], [1, 1, 0]);
  const y1 = useTransform(smoothProgress, [0, 0.15], [0, -50]);

  // Section 2: 20% to 50% scroll
  const opacity2 = useTransform(smoothProgress, [0.2, 0.3, 0.45, 0.5], [0, 1, 1, 0]);
  const y2 = useTransform(smoothProgress, [0.2, 0.3, 0.45, 0.5], [30, 0, 0, -30]);

  // Section 3: 55% to 85% scroll
  const opacity3 = useTransform(smoothProgress, [0.55, 0.65, 0.8, 0.85], [0, 1, 1, 0]);
  const y3 = useTransform(smoothProgress, [0.55, 0.65, 0.8, 0.85], [30, 0, 0, -30]);

  return (
    <div className="absolute inset-0 pointer-events-none z-10 flex flex-col justify-center items-center h-full w-full">
      
      {/* Section 1 */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-full px-4">
        <motion.div style={{ opacity: opacity1, y: y1 }}>
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-black text-white tracking-tighter uppercase drop-shadow-2xl">
            Krishna Verma
          </h1>
          <p className="mt-4 text-base sm:text-xl md:text-2xl text-zinc-400 font-light tracking-widest uppercase">
            Creative Designer & Video Editor
          </p>
          
          {/* Floating 3D Tool Logos */}
          <div className="mt-8 sm:mt-12 flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 max-w-2xl mx-auto">
            {[
              { name: "Photoshop", src: "https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg", shadow: "shadow-amber-500/20 hover:border-amber-500/40" },
              { name: "Illustrator", src: "https://upload.wikimedia.org/wikipedia/commons/f/fb/Adobe_Illustrator_CC_icon.svg", shadow: "shadow-orange-500/20 hover:border-orange-500/40" },
              { name: "After Effects", src: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Adobe_After_Effects_CC_icon.svg", shadow: "shadow-yellow-500/20 hover:border-yellow-500/40" },
              { name: "Premiere Pro", src: "https://upload.wikimedia.org/wikipedia/commons/4/40/Adobe_Premiere_Pro_CC_icon.svg", shadow: "shadow-amber-600/20 hover:border-amber-600/40" },
              { name: "CapCut", src: "https://www.google.com/s2/favicons?domain=capcut.com&sz=128", shadow: "shadow-zinc-500/20 hover:border-zinc-500/40" }
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
                className={`relative w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-xl sm:rounded-2xl bg-zinc-900/80 backdrop-blur-md border border-zinc-800 p-2.5 sm:p-4 flex items-center justify-center transform hover:scale-115 transition-all duration-300 drop-shadow-2xl ${tool.shadow}`}
                style={{
                  transformStyle: "preserve-3d",
                  transform: "perspective(1000px) rotateX(10deg) rotateY(-10deg)"
                }}
                title={tool.name}
              >
                {/* 3D Depth Layer */}
                <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
                <img src={tool.src} alt={tool.name} className="w-full h-full object-contain filter drop-shadow-md" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Section 2 */}
      <div className="absolute top-1/2 left-0 right-0 md:left-[20%] md:right-auto px-6 -translate-y-1/2 text-center md:text-left">
        <motion.div style={{ opacity: opacity2, y: y2 }}>
          <h2 className="text-3xl sm:text-5xl md:text-7xl font-bold text-white leading-none tracking-tight drop-shadow-xl max-w-lg mx-auto md:mx-0">
            I build <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-yellow-500">
              digital experiences.
            </span>
          </h2>
        </motion.div>
      </div>

      {/* Section 3 */}
      <div className="absolute top-1/2 left-0 right-0 md:right-[20%] md:left-auto px-6 -translate-y-1/2 text-center md:text-right">
        <motion.div style={{ opacity: opacity3, y: y3 }}>
          <h2 className="text-3xl sm:text-5xl md:text-7xl font-bold text-white leading-none tracking-tight drop-shadow-xl max-w-lg mx-auto md:mr-0 md:ml-auto">
            Bridging <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-l from-yellow-400 via-amber-400 to-orange-600">
              design & engineering.
            </span>
          </h2>
        </motion.div>
      </div>

    </div>
  );
}
