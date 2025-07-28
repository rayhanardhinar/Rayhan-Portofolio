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
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const navLink = document.querySelector(
            `a[href="#${entry.target.id}"]`
          );
          if (navLink) {
            if (entry.isIntersecting) {
              navLink.classList.add("active");
            } else {
              navLink.classList.remove("active");
            }
          }
        });
      },
      {
        root: null,
        rootMargin: "-40% 0px -40% 0px",
        threshold: 0,
      }
    );

    navItems.forEach(({ id }) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const yOffset = -80;
    const section = document.getElementById(id);

    if (section) {
      const y =
        section.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
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
