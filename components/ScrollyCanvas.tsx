"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, useMotionValueEvent, useSpring } from "framer-motion";

interface ScrollyCanvasProps {
  frameCount: number;
}

export default function ScrollyCanvas({ frameCount }: ScrollyCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const { scrollYProgress } = useScroll();
  
  // Smooth out the scroll progress to remove jitter
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const currentIndex = useTransform(smoothProgress, [0, 1], [0, frameCount - 1]);

  // Preload images
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;

    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      // Adjust path based on how files are named: frame_000_delay-0.071s.png
      const frameNum = i.toString().padStart(3, "0");
      img.src = `/sequence/frame_${frameNum}_delay-0.071s.webp`;
      
      img.onload = () => {
        loadedCount++;
        // Optionally, could show a loading state until loadedCount === frameCount
      };
      
      loadedImages.push(img);
    }
    
    setImages(loadedImages);
  }, [frameCount]);

  // Render function to draw onto canvas
  const renderFrame = (index: number) => {
    if (!images[index] || !canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = images[index];

    // Responsive Canvas dimensions (object-fit: cover logic)
    const cw = canvas.width;
    const ch = canvas.height;
    const iw = img.width;
    const ih = img.height;

    const scale = Math.max(cw / iw, ch / ih);
    const drawWidth = iw * scale;
    const drawHeight = ih * scale;
    const offsetX = (cw - drawWidth) / 2;
    const offsetY = (ch - drawHeight) / 2;

    ctx.clearRect(0, 0, cw, ch);
    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
  };

  // Draw the first frame once images load
  useEffect(() => {
    if (images.length > 0) {
      renderFrame(0);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [images]);

  // Update canvas when scroll index changes
  useMotionValueEvent(currentIndex, "change", (latest) => {
    renderFrame(Math.round(latest));
  });

  // Handle Resize
  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
        renderFrame(Math.round(currentIndex.get()));
      }
    };
    
    handleResize(); // Initial setup
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [images]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none"
    />
  );
}
