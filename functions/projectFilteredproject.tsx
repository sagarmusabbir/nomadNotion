import notion from "@/lib";
import { Project } from "@/lib/types";
import { convertToProject } from "./convertToPost";

export const getTagFilteredProjects = async ({
  tags,
  slug,
}: {
  tags: string[];
  slug: string;
}): Promise<Project[]> => {
  try {
    const databaseId = process.env.NOTION_DATABASE_ID!;
    const response = await notion.databases.query({
      database_id: databaseId,
      filter: {
        and: [
          {
            or: tags.map((tag) => ({
              property: "tags",
              multi_select: {
                contains: tag,
              },
            })),
          },
          {
            // Replace "unique_id" with the actual property name
            property: "slug",
            rich_text: {
              does_not_equal: slug,
            },
          },
        ],
      },
      sorts: [
        {
          property: "date",
          direction: "ascending",
        },
      ],
      page_size: 2, // Limit to 2 articles
    });

    const tagFilteredProject: Project[] = response.results.map((e) =>
      convertToProject(e)
    );

    return tagFilteredProject;
  } catch (error) {
    console.error("Error fetching tag-filtered posts:", error);
    throw error;
  }
};
