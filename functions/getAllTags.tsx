import { Article, TagFrequencyMap } from "@/lib/types";

export const calculateTagFrequency = async (
  {
    publishedPosts,
  }: {
    publishedPosts: Article[];
  },
  p0: { publishedProjects: Article[] }
) => {
  let allTags: string[] = [];
  const tagFrequencyMap: TagFrequencyMap = {};

  // Concatenate tags from posts into allTags array
  publishedPosts.forEach((post) => {
    allTags = [...allTags, ...post.tags];
  });

  // Create a frequency map of tags
  allTags.forEach((tag) => {
    tagFrequencyMap[tag] = (tagFrequencyMap[tag] || 0) + 1;
  });

  return tagFrequencyMap;
};
