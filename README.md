# Krishna Verma — Portfolio 🎨🎬

A premium, interactive, and highly optimized personal portfolio website designed to showcase creative design and video editing work. 

The website is built with a modern web stack and features a signature **Apple-style scroll-linked canvas animation** sequence.

---

## ✨ Features

- **Smooth Scroll-Linked Animation:** Renders a 211-frame canvas animation sequence dynamically linked to the user's scroll progress.
- **Vibrant Modern UI:** Sleek dark-mode aesthetics using glassmorphism, smooth gradients, and immersive micro-animations.
- **Dynamic 3D Hover Effects:** Hover-reactive, perspective-rotated floating cards showcasing expertise in tools like *Photoshop*, *Illustrator*, *After Effects*, *Premiere Pro*, and *CapCut*.
- **Comprehensive Sections:**
  - **Work Experience:** Overview of professional background including agency and freelance roles.
  - **Skills & Achievements:** Leadership highlights and key expertise.
  - **Selected Projects:** Direct links to video editing and design showcases.
  - **Contact:** An interactive contact section for collaborations.

---

## 🛠️ Technology Stack

- **Framework:** [Next.js](https://nextjs.org/) (React 18, App Router)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/) (Scroll & Transform hook integration)
- **Icons:** [Lucide React](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/)
- **Language:** TypeScript

---

## ⚡ Performance Optimization

This portfolio uses a canvas-rendered sequence of **211 frames**. To ensure the webpage loads in milliseconds:
- Original raw PNG assets (~1.72 GB total) were batch-compressed and converted to high-performance **WebP format** (~18 MB total).
- Resolution is optimized for 1080p viewport scaling.
- Asset rendering is managed via Canvas redraw hooks in React to eliminate browser layout thrashing and jitter.

---

## 🚀 Getting Started

To run this project locally, follow these steps:

### 1. Clone the repository
```bash
git clone https://github.com/Krishnaverma70/My-Portfolio.git
cd My-Portfolio
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run the development server
```bash
npm run dev
# or if PowerShell script execution is restricted:
npm.cmd run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
