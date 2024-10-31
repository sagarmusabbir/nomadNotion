import DefaultHero from "@/components/Hero";
import { TagIcon } from "@/components/icons";
import Search from "@/components/Search";
import { getAllPosts } from "@/functions/getAllPosts";
import { getAllProjects } from "@/functions/getAllProjects";
import { calculateTagFrequency } from "@/functions/getAllTags";
import { getTagFilteredPosts } from "@/functions/tagFilteredPosts";
import { Article } from "@/lib/types";
import { Metadata } from "next";

// const title = "Tags";

// export const metadata: Metadata = {
//   title,
//   openGraph: {
//     title: `${title} | Musabbir Sagar`,
//   },
// };

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const { slug } = params;
  const decodedSlug = decodeURIComponent(slug);
  const tagTitle = decodedSlug.charAt(0).toUpperCase() + decodedSlug.slice(1); // Capitalize first letter

  return {
    title: `${tagTitle} | Tags`,
    openGraph: {
      title: `${tagTitle} | Tags | Musabbir Sagar`,
    },
  };
}

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
