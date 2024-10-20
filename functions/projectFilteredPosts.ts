import notion from "@/lib";
import { convertToPost } from "./convertToPost";
import { Article } from "@/lib/types";

export async function getTagFilteredProjects({
  tags,
  slug,
}: {
  tags: string[];
  slug: string;
}): Promise<Article[]> {
  const databaseId = process.env.NOTION_DATABASE_ID;

  if (!databaseId) {
    console.error("NOTION_DATABASE_ID is not defined");
    return [];
  }

  const response = await notion.databases.query({
    database_id: databaseId,
    filter: {
      and: [
        {
          property: "type",
          select: {
            equals: "Projects",
          },
        },
        {
          property: "tags",
          multi_select: {
            contains: tags[0],
          },
        },
        {
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
        direction: "descending",
      },
    ],
  });

  const filteredProjects: Article[] = response.results.map((page) =>
    convertToPost(page)
  );

  return filteredProjects;
}
