import { getAllPosts } from "@/functions/getAllPosts";
import { Article } from "@/lib/types";
import { postsPerPage } from "@/site";
import Feed from "@/components/Feed";
import HeroSection from "../components/HeroSection";
import axios, { AxiosResponse } from "axios";
import { sendSlackMessage } from "@/functions/sendSlackMessage";
import DefaultHero from "@/components/Hero";
import { Cover } from "@/components/icons";
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
    <main className="space-y-7 ">
      <NewHero Icon={Cover} />
      <div className="space-y-7 max-w-5xl m-auto px-4 pb-8 ">
        {/* <div className="space-y-7 bg-slate-50 max-w-5xl m-auto p-4 min-h-screen "> */}
        {/* <Feed articles={publishedPosts} /> */}
        <section>
          <div className="flex items-center justify-between my-8">
            <div className="text-3xl font-bold text-gray-700 dark:text-slate-300">
              Latest articles
            </div>
            <Link href="/articles">
              <span className="font-semibold text-gray-700 dark:text-slate-300 hover:text-gray-800  cursor-pointer">
                More articles ➜
              </span>
            </Link>
          </div>
          <ArticleList articles={publishedPosts} />
        </section>
        <section>
          <div className="flex items-center justify-between my-8">
            <div className="text-3xl font-bold text-gray-700 dark:text-slate-300">
              Latest Projects
            </div>
            <Link href="/articles/projects">
              <span className="font-semibold text-gray-700 dark:text-slate-300 hover:text-gray-800  cursor-pointer">
                More Projects ➜
              </span>
            </Link>
          </div>
          <ArticleList articles={publishedProjects} />
        </section>

        {/* <div className="space-y-7 ">
            <h2 className="max-w-xl text-2xl  leading-none tracking-tight  md:text-3xl xl:text-4xl text-gray-600 ">
              Recent Articles
            </h2>
            <ArticleList articles={publishedPosts} />
            <Link href="/articles">
              <h4 className="text-sm leading-none tracking-tight  md:text-base xl:text-lg text-gray-700 hover:text-gray-800  cursor-pointer mt-6 font-semibold">
                {" "}
                More articles <MdChevronRight className="inline" />{" "}
              </h4>
            </Link>
          </div> */}
        {/* <div className="space-y-7">
            <h2 className="max-w-xl text-2xl  leading-none tracking-tight  md:text-3xl xl:text-4xl text-gray-600">
              Recent Projects
            </h2>
            <ArticleList articles={publishedProjects} />
            <Link href="/articles/projects">
              <h4 className="text-sm leading-none tracking-tight  md:text-base xl:text-lg text-gray-700 hover:text-gray-800  cursor-pointer mt-6 font-semibold">
                {" "}
                More projects <MdChevronRight className="inline" />{" "}
              </h4>
            </Link>
          </div> */}
        {/* </div> */}
      </div>
    </main>
  );
};

export default HomePage;
function Catagory(arg0: Article[]) {
  throw new Error("Function not implemented.");
}
