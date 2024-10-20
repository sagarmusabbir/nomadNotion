import notion from "@/lib";
import { Article } from "@/lib/types";
import { convertToPost } from "./convertToPost";

export const getAllPosts = async (): Promise<Article[]> => {
  const databaseId = process.env.NOTION_DATABASE_ID!;
  if (!databaseId) {
    console.error("NOTION_DATABASE_ID is not defined");
    return [];
  }
  try {
    const response = await notion.databases.query({
      database_id: databaseId,
      filter: {
        and: [
          {
            property: "status",
            select: {
              equals: "Published",
            },
          },
          {
            property: "type",
            select: {
              equals: "Post",
            },
          },
          // Add more conditions if needed
        ],
      },
      sorts: [
        {
          property: "date",
          direction: "ascending",
        },
      ],
    });

    const publishedPosts: Article[] = response.results.map((e) =>
      convertToPost(e)
    );

    return publishedPosts;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
};
