import { getAllPosts } from "@/functions/getAllPosts";
import { Article } from "@/lib/types";
import Search from "../../components/Search";
import { calculateTagFrequency } from "@/functions/getAllTags";

import { ArticleIcon, BrowseIcon } from "@/components/icons";
import DefaultHero from "@/components/Hero";
import { Metadata } from "next";
import { getAllProjects } from "@/functions/getAllProjects";

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
      <DefaultHero Icon={BrowseIcon} name="Articles" />
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
