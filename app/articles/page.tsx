import { getAllPosts } from "@/functions/getAllPosts";
import { Article } from "@/lib/types";
import Search from "../../components/Search";
import { calculateTagFrequency } from "@/functions/getAllTags";
import { BreadcrumbItem } from "flowbite-react";
import DefaultBreadcrumb from "@/components/BreadCumb";
import { HiHome } from "react-icons/hi";

const Articles = async () => {
  const publishedPosts: Article[] = await getAllPosts();
  const tagFrequencyMap = await calculateTagFrequency({ publishedPosts });

  return (
    <div className="max-w-5xl m-auto p-4 min-h-screen">
      <DefaultBreadcrumb icon={HiHome} route="Articles" title="All" />
      <Search
        publishedPosts={publishedPosts}
        tagFrequencyMap={tagFrequencyMap}
      />
    </div>
  );
};

export default Articles;
