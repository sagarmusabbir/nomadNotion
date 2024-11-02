import { getAllPosts } from "@/functions/getAllPosts";
import { Article } from "@/lib/types";
import { postsPerPage } from "@/site";
import Feed from "@/components/Feed";
import HeroSection from "../components/HeroSection";
import axios, { AxiosResponse } from "axios";
import { sendSlackMessage } from "@/functions/sendSlackMessage";
import DefaultHero from "@/components/Hero";
import { AboutIcon, Cover, Logo } from "@/components/icons";
import Search from "@/components/Search";
import { calculateTagFrequency } from "@/functions/getAllTags";

import NewHero from "@/components/newhero";
import { filterArticles } from "./utils/filterArticles";
import ArticleList from "@/components/Feed";
import { types } from "util";
import { isTypedArray } from "util/types";
import Link from "next/link";
import { MdChevronRight, MdForward } from "react-icons/md";
import { getAllProjects } from "@/functions/getAllProjects";
import Container from "@/components/Container";
import { getTagFilteredPosts } from "@/functions/articleFilteredPosts";
const HomePage = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) => {
  const page = Number(searchParams.page) || 1;
  const publishedPosts: Article[] = await getAllPosts();
  const publishedProjects: Article[] = await getAllProjects();

  return (
    <main className="space-y-5  m-auto min-h-screen">
      <NewHero Icon={Cover} />
      {/* <DefaultHero Icon={Cover} name="About" /> */}
      <div
        // className="max-w-screen-lg m-auto  min-h-screen px-4 py-8 lg:py-16 space-y-5"
        className="max-w-screen-lg m-auto  min-h-screen  px-4 pb-4  "
      >
        <div className="flex items-center justify-between py-5">
          <h2 className="text-lg md:text-xl xl:text-2xl font-medium text-gray-600  ">
            Latest articles
          </h2>

          <Link href="/articles">
            <span className="font-medium text-gray-700 dark:text-slate-300 hover:text-gray-800 text-xs md:text-sm xl:text-base  cursor-pointer">
              More articles ➜
            </span>
          </Link>
        </div>
        <ArticleList articles={publishedPosts} />
        <div className="flex items-center justify-between mb-5 mt-10">
          <div className="text-xl md:text-2xl xl:text-3xl font-medium text-gray-600">
            Latest Projects
          </div>
          <Link href="/articles/projects">
            <span className="font-medium text-gray-700 dark:text-slate-300 hover:text-gray-800  cursor-pointer">
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
