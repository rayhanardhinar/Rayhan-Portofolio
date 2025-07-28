"use client";
import { useEffect, useRef } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaVuejs,
  FaNode,
  FaGitAlt,
  FaLaravel,
  FaPhp,
} from "react-icons/fa";
import { SiTailwindcss, SiTypescript, SiNextdotjs } from "react-icons/si";

const techStack = [
  FaHtml5,
  FaCss3Alt,
  FaJs,
  SiTypescript,
  FaReact,
  SiNextdotjs,
  SiTailwindcss,
  FaNode,
  FaGitAlt,
  FaVuejs,
  FaLaravel,
  FaPhp,
];

export default function ScrollTech() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollAmount = 0;
    const scrollSpeed = 1;

    const scroll = () => {
      if (!scrollContainer) return;

      scrollAmount += scrollSpeed;
      if (scrollAmount >= scrollContainer.scrollWidth / 2) {
        scrollAmount = 0;
      }

      scrollContainer.scrollLeft = scrollAmount;
      requestAnimationFrame(scroll);
    };

    const animationId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <div className="relative w-full overflow-hidden">
      {/* Fade kiri */}
      <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-primary-dark via-primary-dark/50 to-transparent z-10 pointer-events-none" />
      {/* Fade kanan */}
      <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-primary-dark via-primary-dark/50 to-transparent z-10 pointer-events-none" />

      <div className="whitespace-nowrap animate-scroll text-4xl text-primary flex w-max space-x-10">
        {[...techStack, ...techStack].map((Icon, idx) => (
          <div key={idx} className="inline-block">
            <Icon />
          </div>
        ))}
      </div>
    </div>
  );
}
