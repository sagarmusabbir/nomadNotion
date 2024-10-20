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

const HomePage = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) => {
  const page = Number(searchParams.page) || 1;
  const publishedPosts: Article[] = await getAllPosts();
  const publishedProjects: Article[] = await getAllPosts();

  return (
    <main className="space-y-7 py-4">
      <NewHero
        Icon={Cover}
        name="Musabbirs Terminal"
        source="/coverhome.webp"
      />
      <div className="space-y-7 max-w-7xl m-auto min-h-screen">
        <div className="space-y-7 bg-slate-50 max-w-5xl m-auto p-4 min-h-screen">
          {/* <Feed articles={publishedPosts} /> */}
          <div className="space-y-5">
            <h2 className="max-w-xl text-xl  leading-none tracking-tight  md:text-2xl xl:text-3xl text-gray-700 ">
              Recent Articles
            </h2>
            <ArticleList articles={publishedPosts} />
            <Link href="/articles">
              <span className="text-sm leading-none tracking-tight  md:text-sm xl:text-base text-gray-600 hover:text-gray-800  cursor-pointer">
                More articles ➜
              </span>
            </Link>
          </div>
          <div className="space-y-5">
            <h2 className="max-w-xl text-xl  leading-none tracking-tight  md:text-2xl xl:text-3xl text-gray-700 ">
              Recent Projects
            </h2>
            <ArticleList articles={publishedProjects} />
            <Link href="/articles">
              <span className="text-sm leading-none tracking-tight  md:text-sm xl:text-base text-gray-600 hover:text-gray-800  cursor-pointer">
                More projects ➜
              </span>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
function Catagory(arg0: Article[]) {
  throw new Error("Function not implemented.");
}
