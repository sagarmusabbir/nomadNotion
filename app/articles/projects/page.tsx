import { getAllProjects } from "@/functions/getAllProjects";
import { Article } from "@/lib/types";
import ArticleList from "@/components/ArticleList";
import Container from "@/components/Container";
import DefaultHero from "@/components/Hero";
import { ArticleIcon, ProjectIcon } from "@/components/icons";
import cover from "@/public/article.svg";

export const metadata = {
  title: "Projects | Musabbir Sagar",
  description: "Projects by Musabbir Sagar",
};

export default async function ProjectsPage() {
  const projects: Article[] = await getAllProjects();

  return (
    // <Container>

    <main className="space-y-5 max-w-screen-xl m-auto min-h-screen">
      <DefaultHero Icon={ProjectIcon} name="Projects" />
      <div className="max-w-5xl m-auto p-4 min-h-screen">
        <ArticleList articles={projects} />
      </div>
    </main>
    // </Container>
  );
}
