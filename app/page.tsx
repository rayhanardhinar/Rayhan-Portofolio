import Header from "./sections/header";
import Hero from "./sections/hero";
import About from "./sections/about";
import Project from "./sections/project";
import Contact from "./sections/contact";
import GridBackground from "@/components/gridBackground";
import Footer from "./sections/footer";

export default function Home() {
  return (
    <div className="relative">
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
