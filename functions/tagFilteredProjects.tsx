// import notion from "@/lib";
// import { Article, Project } from "@/lib/types";
// import { convertToPost, convertToProject } from "./convertToPost";

// export const getTagFilteredProjects = async ({
//   slug,
// }: {
//   slug: string;
// }): Promise<Project[]> => {
//   try {
//     const databaseId = process.env.NOTION_DATABASE_ID!;
//     const response = await notion.databases.query({
//       database_id: databaseId,
//       filter: {
//         property: "tags",
//         multi_select: {
//           contains: `${slug}`,
//         },
//       },
//       sorts: [
//         {
//           property: "date",
//           direction: "ascending",
//         },
//       ],
//     });

//     const tagFilteredProjects: Project[] = response.results.map((e) =>
//       convertToProject(e)
//     );

//     return tagFilteredProjects;
//   } catch (error) {
//     // Handle the error, log it, or throw a more specific exception if needed.
//     console.error("Error fetching tag-filtered posts:", error);
//     throw error;
//   }
// };
