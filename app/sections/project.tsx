import CardImage from "@/components/cardImage";
import { projectList } from "../data/project-data";

export default function Project() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 pb-20 max-w-7xl mx-auto px-8">
      <h2 className="text-3xl font-bold mb-4 text-secondary-light">
        My Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projectList.map((project) => (
          <CardImage
            key={project.id}
            title={project.title}
            image={project.image}
            description={project.description}
          />
        ))}
      </div>
    </div>
  );
}
