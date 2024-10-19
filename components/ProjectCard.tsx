// import notion from "@/lib";
// import { convertToPost } from "@/functions/convertToPost";
// import { Article } from "@/lib/types";
// import Link from "next/link";

// export default async function ProjectCard() {
//   const databaseId = process.env.NOTION_DATABASE_ID;

//   if (!databaseId) {
//     console.error("NOTION_DATABASE_ID is not defined");
//     return null;
//   }

//   // Fetch all articles from the Notion database
//   const response = await notion.databases.query({
//     database_id: databaseId,
//     filter: {
//       property: "type",
//       select: {
//         equals: "Projects",
//       },
//     },
//   });

//   // Convert the response to Article objects
//   const projects: Article[] = response.results.map((page: any) =>
//     convertToPost(page)
//   );

//   return (
//     <>
//       {projects.map((project) => (
//         <Link
//           href={`/projects/${project.slug}`}
//           key={project.id}
//           className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out"
//         >
//           <div className="relative">
//           <div className=" filter contrast-[0.9]">
//             <img
//               src={project.coverImage}
//               alt={project.title}
//               className="object-cover w-full h-52 transition rounded-xl aspect-video group-hover:opacity-90 bg-slate-50 dark:bg-zinc-900"
//             />
//             </div>
//             <div className="flex flex-col justify-between flex-1 py-4">
//             <div className="flex-1">
//               <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
//               <p className="mt-3 text-base text-gray-600 dark:text-gray-500 line-clamp-2">
//               {project.summary}
//             </p>
//               {/* <p className="text-gray-600 mb-4">{project.excerpt}</p> */}
//               {/* <span className="text-blue-500 hover:underline">Read more</span> */}
//             </div>
//           </div>
//         </Link>
//       ))}
//     </>
//   );
// }
