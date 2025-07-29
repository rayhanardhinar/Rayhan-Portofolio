"use client";
import { useEffect, useRef } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaVuejs,
  FaGitAlt,
  FaLaravel,
  FaPhp,
} from "react-icons/fa";
import { SiTailwindcss, SiTypescript, SiNextdotjs } from "react-icons/si";

const techStack = [
  { icon: FaHtml5, color: "#e34c26" },
  { icon: FaCss3Alt, color: "#264de4" },
  { icon: FaJs, color: "#f7df1e" },
  { icon: SiTypescript, color: "#3178c6" },
  { icon: FaReact, color: "#61dafb" },
  { icon: SiNextdotjs, color: "#ffffff" },
  { icon: SiTailwindcss, color: "#38bdf8" },
  { icon: FaGitAlt, color: "#f1502f" },
  { icon: FaVuejs, color: "#42b883" },
  { icon: FaLaravel, color: "#ff2d20" },
  { icon: FaPhp, color: "#777bb4" },
];

export default function ScrollTech() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scrollSpeed = 1;
    const interval = setInterval(() => {
      if (!scrollContainer) return;

      scrollContainer.scrollLeft += scrollSpeed;

      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
        scrollContainer.scrollLeft = 0;
      }
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full overflow-hidden">
      {/* Fade kiri */}
      <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-primary-dark via-primary-dark/50 to-transparent z-10 pointer-events-none" />
      {/* Fade kanan */}
      <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-primary-dark via-primary-dark/50 to-transparent z-10 pointer-events-none" />

      {/* Scroll area */}
      <div
        className="whitespace-nowrap animate-scroll flex w-max space-x-10"
        ref={scrollRef}
      >
        {[...techStack, ...techStack].map(({ icon: Icon, color }, idx) => (
          <div key={idx} className="text-4xl" style={{ color }}>
            <Icon />
          </div>
        ))}
      </div>
    </div>
  );
}
