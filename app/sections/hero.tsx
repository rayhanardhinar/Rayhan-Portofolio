"use client";
import { FaLaptop } from "react-icons/fa";
import { MdOutlineTouchApp } from "react-icons/md";

export default function HeroSection() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-4 px-4 py-28">
      <div className="container mx-auto">
        <div className="text-center md:text-left px-2 tracking-wide">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-secondary-light">
            Hello, I'm <br />
            <span className="text-primary-light"> Rayhan Ardhinar</span>
          </h1>
          <p className="font-light text-sm md:text-lg">
            <span className="text-primary-light font-semibold">
              Frontend Developer
            </span>{" "}
            with a passion about creating intuitive user interfaces and
            impactful web experiences. Open for collaboration, freelance work,
            or exciting projects.
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-4 mt-8">
          <button className="flex items-center gap-2 btn-secondary">
            <span>See my Projects</span>
            <FaLaptop />
          </button>
          <button className="flex items-center gap-2 btn-primary">
            <span>Contact Me</span>
            <MdOutlineTouchApp className="text-xl" />
          </button>
        </div>
      </div>
      <div className="container mx-auto">
        <div>Hello</div>
      </div>
    </div>
  );
}
