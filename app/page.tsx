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
const HomePage = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) => {
  const page = Number(searchParams.page) || 1;
  const publishedPosts: Article[] = await getAllPosts();
  const publishedProjects: Article[] = await getAllPosts();

  return (
    <main className="space-y-7 ">
      <NewHero Icon={Cover} />
      <div className="space-y-7 max-w-7xl m-auto min-h-screen">
        <div className="space-y-7 bg-slate-50 max-w-5xl m-auto p-4 min-h-screen mb-6">
          {/* <Feed articles={publishedPosts} /> */}
          <div className="space-y-7 ">
            <h2 className="max-w-xl text-2xl  leading-none tracking-tight  md:text-3xl xl:text-4xl text-gray-600 ">
              Recent Articles
            </h2>
            <ArticleList articles={publishedPosts} />
            <Link href="/articles">
              <h4 className="text-lg leading-none tracking-tight  md:text-xl xl:text-2xl text-gray-700 hover:text-gray-800  cursor-pointer mt-6 font-light">
                {" "}
                More articles <MdChevronRight className="inline" />{" "}
              </h4>
            </Link>
          </div>
          <div className="space-y-7">
            <h2 className="max-w-xl text-2xl  leading-none tracking-tight  md:text-3xl xl:text-4xl text-slate-500">
              Recent Projects
            </h2>
            <ArticleList articles={publishedProjects} />
            <Link href="/articles/projects">
              <h4 className="text-lg leading-none tracking-tight  md:text-xl xl:text-2xl text-gray-700 hover:text-gray-800  cursor-pointer mt-6 font-light">
                {" "}
                More projects <MdChevronRight className="inline" />{" "}
              </h4>
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
