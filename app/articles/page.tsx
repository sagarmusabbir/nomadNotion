import { getAllPosts } from "@/functions/getAllPosts";
import { Article } from "@/lib/types";
import Search from "../../components/Search";
import { calculateTagFrequency } from "@/functions/getAllTags";
import { BreadcrumbItem } from "flowbite-react";
import DefaultBreadcrumb from "@/components/BreadCumb";
import { HiHome } from "react-icons/hi";
import HeroSection from "@/components/HeroSection";
import { ArticleIcon } from "@/components/icons";
import DefaultHero from "@/components/Hero";
import { Metadata } from "next";

const title = "Articles";
export const metadata = {
  title,
  openGraph: {
    title,
    images: [`/api/og?title=${title}`],
  },
};

const Articles = async () => {
  const publishedPosts: Article[] = await getAllPosts();
  const tagFrequencyMap = await calculateTagFrequency({ publishedPosts });

  return (
    <main className="space-y-5 max-w-7xl m-auto min-h-screen">
      <DefaultHero Icon={ArticleIcon} name="Articles" source="/terminal.webp" />
      <div className="max-w-5xl m-auto p-4 min-h-screen">
        <Search
          publishedPosts={publishedPosts}
          tagFrequencyMap={tagFrequencyMap}
        />
      </div>
    </main>
  );
};

export default Articles;
