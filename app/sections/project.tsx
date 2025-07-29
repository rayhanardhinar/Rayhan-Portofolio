import ProjectCardImage from "@/components/projectCard";
import { projectList } from "../data/project-data";
import ScrollTech from "@/components/scrollTech";

export default function Project() {
  return (
    <div
      className="flex flex-col items-center justify-center gap-4 pb-20 max-w-7xl mx-auto px-8 scroll-mt-20 min-h-screen"
      id="projects"
    >
      <h2
        className="text-3xl md:text-5xl font-bold text-secondary-light text-center z-20"
        data-aos="zoom-in-up"
        data-aos-delay="0"
      >
        See how I turn <span className="text-primary-light">Ideas</span> into a{" "}
        <span className="text-primary-light">Real Digital Products</span>
      </h2>
      <div
        className="container md:max-w-5xl py-12"
        data-aos="zoom-in-up"
        data-aos-delay="200"
      >
        <ScrollTech />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projectList.map((project) => (
          <ProjectCardImage
            key={project.id}
            title={project.title}
            image={project.image}
            description={project.description}
            tech={project.tech}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
}
