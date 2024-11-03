import notion from "@/lib";
import { convertToPost } from "./convertToPost";
import { Article } from "@/lib/types";

export async function getAllArticles(): Promise<Article[]> {
  const databaseId = process.env.NOTION_DATABASE_ID;

  if (!databaseId) {
    console.error("NOTION_DATABASE_ID is not defined");
    return [];
  }

  try {
    const response = await notion.databases.query({
      database_id: databaseId,
      filter: {
        property: "status",
        select: {
          equals: "Published",
        },
      },
      sorts: [
        {
          property: "date",
          direction: "ascending",
        },
      ],
    });

    const publishedArticles: Article[] = response.results.map((page) =>
      convertToPost(page)
    );

    return publishedArticles;
  } catch (error) {
    console.error("Error fetching projects:", error);
    return [];
  }
}
