import notion from "@/lib";
import { convertToPost } from "./convertToPost";
import { Article } from "@/lib/types";

export async function getAllProjects(): Promise<Article[]> {
  const databaseId = process.env.NOTION_DATABASE_ID;

  if (!databaseId) {
    console.error("NOTION_DATABASE_ID is not defined");
    return [];
  }

  try {
    const response = await notion.databases.query({
      database_id: databaseId,
      filter: {
        property: "type",
        select: {
          equals: "Project",
        },
      },
      sorts: [
        {
          property: "date",
          direction: "descending",
        },
      ],
    });

    const projects: Article[] = response.results.map((page) =>
      convertToPost(page)
    );

    return projects;
  } catch (error) {
    console.error("Error fetching projects:", error);
    return [];
  }
}
