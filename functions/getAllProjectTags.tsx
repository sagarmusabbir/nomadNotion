import { Article, Project, TagFrequencyMap } from "@/lib/types";

export const calculateProjectTagFrequency = async ({
  publishedProjects,
}: {
  publishedProjects: Project[];
}) => {
  let allProjectTags: string[] = [];
  const tagProjectFrequencyMap: TagFrequencyMap = {};

  // Concatenate tags from posts into allTags array
  publishedProjects.forEach((project) => {
    allProjectTags = [...allProjectTags, ...project.tags];
  });

  // Create a frequency map of tags
  allProjectTags.forEach((tag) => {
    tagProjectFrequencyMap[tag] = (tagProjectFrequencyMap[tag] || 0) + 1;
  });

  return tagProjectFrequencyMap;
};
