import notion from "@/lib";
import { Project } from "@/lib/types";
import { convertToPost } from "./convertToPost";

export const getAllProjects = async (): Promise<Project[]> => {
  const databaseId = process.env.NOTION_DATABASE_ID!;
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
            equals: "Project",
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

  const publishedProjects: Project[] = response.results.map((e) =>
    convertToPost(e)
  );

  return publishedProjects;
};
