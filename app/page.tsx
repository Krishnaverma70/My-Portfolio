import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="relative bg-[#09090b]">
      {/* Navigation Header */}
      <Navbar />

      {/* 500vh Container for the scroll-linked animation */}
      <div className="relative h-[500vh] w-full">
        {/* Sticky Container */}
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          {/* 
            We pass the total number of frames to ScrollyCanvas.
            We know there are 211 frames (000 to 210).
          */}
          <ScrollyCanvas frameCount={211} />
          
          {/* Overlay elements (Text fading in and out) */}
          <Overlay />
        </div>
      </div>
      
      {/* Work Experience Section */}
      <div id="experience">
        <Experience />
      </div>

      {/* Skills & Achievements Section */}
      <div id="skills">
        <Skills />
      </div>

      {/* Work Grid placed after the sequence finishes */}
      <div id="projects">
        <Projects />
      </div>

      {/* Contact Section */}
      <div id="contact">
        <Contact />
      </div>
    </main>
  );
}
