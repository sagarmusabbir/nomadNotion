import { Project } from "../lib/types";

import ProjectCard from "./ProjectCard";

type Props = {
  projects: Project[];
};

export default function ProjectList({ projects }: Props) {
  return (
    <div className="grid gap-10 lg:gap-12 sm:grid-cols-2 justify-center">
      {projects &&
        projects.map((project) => (
          <ProjectCard project={project} key={project.id} />
        ))}
    </div>
  );
}
