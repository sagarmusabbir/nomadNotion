import Search from "@/components/Search";
import { getAllPosts } from "@/functions/getAllPosts";
import { getAllProjects } from "@/functions/getAllProjects";
import { calculateTagFrequency } from "@/functions/getAllTags";
import { getTagFilteredPosts } from "@/functions/tagFilteredPosts";
import { Article } from "@/lib/types";

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
    <div className="max-w-5xl m-auto p-4 min-h-screen">
      <Search
        publishedPosts={tagFilteredPosts}
        publishedProjects={tagFilteredPosts}
        tagFrequencyMap={tagFrequencyMap}
      />
    </div>
  );
}
