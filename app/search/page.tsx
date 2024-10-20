import { getAllPosts } from "@/functions/getAllPosts";
import { Article } from "@/lib/types";
import Search from "../../components/Search";
import { calculateTagFrequency } from "@/functions/getAllTags";
import { getAllProjects } from "@/functions/getAllProjects";

const SearchPage = async () => {
  const publishedPosts: Article[] = await getAllPosts();
  const publishedProjects: Article[] = await getAllProjects();
  const tagFrequencyMap = await calculateTagFrequency(
    { publishedPosts },
    { publishedProjects }
  );

  return (
    <div className="max-w-5xl m-auto p-4 min-h-screen">
      <Search
        publishedPosts={publishedPosts}
        publishedProjects={publishedProjects}
        tagFrequencyMap={tagFrequencyMap}
      />
    </div>
  );
};

export default SearchPage;
