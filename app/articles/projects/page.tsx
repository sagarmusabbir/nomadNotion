import { getAllProjects } from "@/functions/getAllProjects";
import { MdHome } from "react-icons/md";
import { Article } from "@/lib/types";
import ArticleList from "@/components/ArticleList";
import Container from "@/components/Container";
import DefaultHero from "@/components/Hero";
import { ArticleIcon, ProjectIcon } from "@/components/icons";
import cover from "@/public/article.svg";
import NewHero from "@/components/newhero";
import { Breadcrumb } from "flowbite-react";

export const metadata = {
  title: "Projects | Musabbir Sagar",
  description: "Projects by Musabbir Sagar",
};

export default async function ProjectsPage() {
  const projects: Article[] = await getAllProjects();

  return (
    // <Container>

    <main className="space-y-5 max-w-screen-xl m-auto min-h-screen">
      {/* <DefaultHero Icon={ProjectIcon} name="Projects" /> */}
      <NewHero
        Icon={ProjectIcon}
        iconSize="h-40 w-40"
        title="Recent Projects"
        subtitleStart="Some of My"
        highlight="Important"
        subtitleEnd="Projects"
        actionArea={
          <div className="flex w-fit items-center gap-5">
            <Breadcrumb>
              <Breadcrumb.Item
                theme={{
                  href: {
                    on: "flex items-center text-sm md:text-base xl:text-lg font-medium text-gray-700 hover:text-gray-900 ",
                    off: "flex items-center text-sm md:text-base xl:text-lg font-medium text-gray-500 dark:text-gray-400",
                  },

                  icon: "h-4 w-4 md:h-5 md:w-5 xl:h-6 xl:w-6",
                }}
                href="/"
                icon={MdHome}
              ></Breadcrumb.Item>
              <Breadcrumb.Item
                theme={{
                  href: {
                    on: "flex items-center text-sm md:text-base xl:text-lg font-medium text-gray-700 hover:text-gray-900 ",
                    off: "flex items-center text-sm md:text-base xl:text-lg font-medium text-gray-500 ",
                  },
                  chevron:
                    "mr-1  h-4 w-4 md:h-5 md:w-5 xl:h-6 xl:w-6 text-gray-400 group-first:hidden md:mr-2 ",
                }}
              >
                Projects
              </Breadcrumb.Item>
            </Breadcrumb>
          </div>
        }
      />
      <div className="max-w-5xl m-auto p-4 min-h-screen">
        <ArticleList articles={projects} />
      </div>
    </main>
    // </Container>
  );
}
