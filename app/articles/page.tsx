import { getAllPosts } from "@/functions/getAllPosts";
import { Article } from "@/lib/types";
import Search from "../../components/Search";
import { calculateTagFrequency } from "@/functions/getAllTags";
import { MdHome } from "react-icons/md";

import { ArticleIcon, BrowseIcon } from "@/components/icons";
import DefaultHero from "@/components/Hero";
import { Metadata } from "next";
import { getAllProjects } from "@/functions/getAllProjects";
import NewHero from "@/components/newhero";
import { Breadcrumb } from "flowbite-react";

const title = "Thoughts & Web Development Articles";

export const metadata: Metadata = {
  title,
  openGraph: {
    title: `${title} | Musabbir Sagar`,
  },
};

const Articles = async () => {
  const publishedPosts: Article[] = await getAllPosts();
  const publishedProjects: Article[] = await getAllProjects();
  const tagFrequencyMap = await calculateTagFrequency(
    { publishedPosts },
    { publishedProjects }
  );

  return (
    <main className="space-y-5  m-auto min-h-screen">
      {/* <DefaultHero Icon={BrowseIcon} name="Articles" /> */}
      <NewHero
        Icon={BrowseIcon}
        iconSize="h-40 w-40"
        title1="Browse"
        title2=" Articles"
        subtitleStart="From the"
        highlight="Terminal"
        subtitleEnd="of a Developer"
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
                Articles
              </Breadcrumb.Item>
            </Breadcrumb>
          </div>
        }
      />
      <div className="max-w-screen-lg m-auto p-4 min-h-screen">
        <Search
          publishedPosts={publishedPosts}
          publishedProjects={publishedProjects}
          tagFrequencyMap={tagFrequencyMap}
        />
      </div>
    </main>
  );
};

export default Articles;
