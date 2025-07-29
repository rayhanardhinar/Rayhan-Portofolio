"use client";

import Header from "./sections/header";
import Hero from "./sections/hero";
import About from "./sections/about";
import Project from "./sections/project";
import Contact from "./sections/contact";
import GridBackground from "@/components/gridBackground";
import Footer from "./sections/footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";

export default function Home() {
  useEffect(() => {
    const initAos = async () => {
      await import("aos");
      AOS.init({
        duration: 1000,
        once: false,
        mirror: true,
        easing: "ease-in-out",
        anchorPlacement: "top-bottom",
      });
    };
    initAos();
  }, []);
  return (
    <div className="relative">
      <Toaster />
      <GridBackground />
      <Header />
      <Hero />
      <About />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}
