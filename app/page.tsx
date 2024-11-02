import { getAllPosts } from "@/functions/getAllPosts";
import { Article } from "@/lib/types";

import { AboutIcon, Cover, Logo } from "@/components/icons";

import NewHero from "@/components/newhero";

// import ArticleList from "@/components/Feed";

import Link from "next/link";
import { MdChevronRight, MdForward } from "react-icons/md";
import { getAllProjects } from "@/functions/getAllProjects";
import Container from "@/components/Container";
import { getTagFilteredPosts } from "@/functions/articleFilteredPosts";
import ArticleList from "@/components/ArticleList";
const HomePage = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) => {
  const page = Number(searchParams.page) || 1;
  const publishedPosts: Article[] = await getAllPosts();
  const publishedProjects: Article[] = await getAllProjects();

  return (
    <main className="space-y-8 lg:space-y-12   m-auto min-h-screen">
      <NewHero Icon={Cover} />

      <div className="max-w-screen-lg m-auto  min-h-screen  px-4   ">
        <div className="flex items-center justify-between ">
          <h2 className="text-lg md:text-xl xl:text-2xl font-medium text-gray-600  ">
            Latest articles
          </h2>

          <Link href="/articles">
            <span className="font-medium text-gray-800 dark:text-slate-300 hover:text-gray-700 text-xs md:text-sm xl:text-base  cursor-pointer">
              More articles ➜
            </span>
          </Link>
        </div>
        <ArticleList articles={publishedPosts} />
      </div>
      <div className="max-w-screen-lg m-auto  min-h-screen  px-4 pb-4   ">
        <div className="flex items-center justify-between  ">
          <div className="text-lg md:text-xl xl:text-2xl font-medium text-gray-600 ">
            Latest Projects
          </div>
          <Link href="/articles/projects">
            <span className="font-medium text-gray-800 dark:text-slate-300 hover:text-gray-700 text-xs md:text-sm xl:text-base  cursor-pointer">
              More Projects ➜
            </span>
          </Link>
        </div>
        <ArticleList articles={publishedProjects} />
      </div>
    </main>
  );
};

export default HomePage;
function Catagory(arg0: Article[]) {
  throw new Error("Function not implemented.");
}
