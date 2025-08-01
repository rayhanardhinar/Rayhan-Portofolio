"use client";
import { FaLaptop } from "react-icons/fa";
import { MdOutlineTouchApp } from "react-icons/md";

export default function Hero() {
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  return (
    <div
      className="flex flex-col md:flex-row items-center justify-center gap-4 py-36 md:py-40 lg:py-54 max-w-7xl mx-auto px-4 md:px-8 min-h-screen"
      id="hero"
    >
      <div className="absolute border border-secondary-light rounded-full w-40 h-40 bg-primary-light shadow-2xl blur-[120px] z-0"></div>
      <div className="z-10">
        <div className="text-center md:text-left px-2 tracking-wide">
          <h1
            className="text-4xl md:text-5xl font-bold mb-4 text-secondary-light"
            data-aos="fade-up"
            data-aos-delay="0"
          >
            Hello, I'm <br />
            <span className="text-primary-light"> Rayhan Ardhinar</span>
          </h1>
          <p
            className="font-light/50 text-secondary-light text-sm md:text-lg"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            A{" "}
            <span className="text-primary-light font-semibold">
              Web Developer
            </span>{" "}
            dedicated to creating intuitive interfaces and delivering engaging,
            user-centered web experiences. Open to collaborations, freelance
            engagements, and innovative projects.
          </p>
        </div>
        <div
          className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-4 mt-8"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <button
            className="flex items-center gap-2 btn-secondary"
            onClick={() => handleScrollTo("projects")}
          >
            <span>See my Projects</span>
            <FaLaptop />
          </button>

          <button
            className="flex items-center gap-2 btn-primary"
            onClick={() => handleScrollTo("contact")}
          >
            <span>Contact Me</span>
            <MdOutlineTouchApp className="text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
}
