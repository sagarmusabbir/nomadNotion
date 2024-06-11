import { getAllPosts } from "@/functions/getAllPosts";
import { Article } from "@/lib/types";
import Search from "../../components/Search";
import { calculateTagFrequency } from "@/functions/getAllTags";
import { BreadcrumbItem } from "flowbite-react";
import DefaultBreadcrumb from "@/components/BreadCumb";
import { HiHome } from "react-icons/hi";
import HeroSection from "@/components/HeroSection";

const Articles = async () => {
  const publishedPosts: Article[] = await getAllPosts();
  const tagFrequencyMap = await calculateTagFrequency({ publishedPosts });

  return (
    <main className="max-w-5xl m-auto p-4 min-h-screen">
      <Search
        publishedPosts={publishedPosts}
        tagFrequencyMap={tagFrequencyMap}
      />
    </main>
  );
};

export default Articles;
