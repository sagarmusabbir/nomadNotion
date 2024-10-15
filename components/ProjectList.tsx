import { Article, Project } from "@/lib/types";
import ArticleCard from "./ArticleCard";
import ProjectCard from "./ProjectCard";

type Props = {
  projects: Project[];
};

export default function ProjectList({ projects }: Props) {
  // console.log(articles)
  return (
    <div className="grid gap-10 lg:gap-12 sm:grid-cols-2">
      {projects.map((project) => (
        <ProjectCard project={project} key={project.id} />
      ))}
    </div>
  );
}
