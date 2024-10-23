import DefaultHero from "@/components/Hero";
import { TagIcon } from "@/components/icons";
import Search from "@/components/Search";
import { getAllPosts } from "@/functions/getAllPosts";
import { getAllProjects } from "@/functions/getAllProjects";
import { calculateTagFrequency } from "@/functions/getAllTags";
import { getTagFilteredPosts } from "@/functions/tagFilteredPosts";
import { Article } from "@/lib/types";
import { Metadata } from "next";

const title = "Tags";

export const metadata: Metadata = {
  title,
  openGraph: {
    title: `${title} | Musabbir Sagar`,
  },
};

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const decodedSlug = decodeURIComponent(slug); // Decode URL-encoded string
  const tagFilteredPosts = await getTagFilteredPosts({ slug: decodedSlug });
  const publishedPosts: Article[] = await getAllPosts();
  const publishedProjects: Article[] = await getAllProjects();
  const tagFrequencyMap = await calculateTagFrequency(
    { publishedPosts },
    { publishedProjects }
  );

  return (
    <div className="m-auto  min-h-screen space-y-5 ">
      <DefaultHero Icon={TagIcon} name="Tags" />
      <div className="max-w-screen-lg m-auto p-4 min-h-screen">
        <Search
          publishedPosts={tagFilteredPosts}
          publishedProjects={tagFilteredPosts}
          tagFrequencyMap={tagFrequencyMap}
        />
      </div>
    </div>
  );
}
