import SectionHeading from "@/components/helpers/SectionHeading";
import { projects } from "@/data/data";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div className="py-16 bg-gray-100 dark:bg-gray-900">
      <SectionHeading
        firstHeading="Featured"
        lastHeading="Projects"
        subHeading="A selection of my recent work and side projects"
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 w-[80%] mx-auto">
        {projects.map((project, index) => {
          return <ProjectCard key={project.title} {...project} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
