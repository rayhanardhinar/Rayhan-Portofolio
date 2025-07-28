"use client";

import { useEffect } from "react";

export default function Header() {
  const navItems = [
    { name: "Home", id: "hero" },
    { name: "About", id: "about" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(({ id }) => document.getElementById(id));
      const navLinks = navItems.map(({ id }) =>
        document.querySelector(`a[href="#${id}"]`)
      );

      sections.forEach((section, i) => {
        const navLink = navLinks[i];

        if (section && navLink) {
          const rect = section.getBoundingClientRect();
          const isActive =
            rect.top <= window.innerHeight / 2 &&
            rect.bottom >= window.innerHeight / 2;

          navLink.classList.toggle("active", isActive);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // jalankan sekali di awal agar aktif langsung

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex justify-center items-center fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <nav className="flex gap-1 border border-white/20 rounded-full px-1.5 py-1 bg-white/10 backdrop-blur">
        {navItems.map(({ name, id }) => (
          <a
            key={id}
            href={`#${id}`}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection(id);
            }}
            className="nav-item"
          >
            {name}
          </a>
        ))}
      </nav>
    </div>
  );
}
