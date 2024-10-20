// import notion from "@/lib";
// import { convertToPost } from "@/functions/convertToPost";
// import { Article } from "@/lib/types";
// import Link from "next/link";
// import DefaultHero from "@/components/Hero";
// import { Cover } from "@/components/icons";
// import getLocalizedDate from "../utils/getLocalizedDate";

// export default async function ProjectsPage() {
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
//     <main>
//       {/* <div className="space-y-5 max-w-7xl m-auto min-h-screen"> */}
//       <DefaultHero
//         Icon={Cover}
//         name="Musabbirs Terminal"
//         source="/coverhome.webp"
//       />
//       <div className="space-y-5 max-w-7xl m-auto min-h-screen">
//         <div className="mt-4 bg-slate-50 max-w-5xl m-auto p-4 min-h-screen">
//           <div className="grid gap-10 lg:gap-12 sm:grid-cols-2 justify-center">
//             {projects.map((project) => (
//               <Link href={`/projects/${project.slug}`} key={project.id}>
//                 <div className=" flex flex-col overflow-hidden cursor-pointer group">
//                   <div className="relative">
//                     <div className="absolute">
//                       {project?.tags?.map((tag) => (
//                         <div
//                           key={tag}
//                           className="relative shadow z-[2] inline-flex items-center px-3 py-1.5 mb-2 mr-2 text-xs font-bold text-zinc-800 uppercase bg-slate-100 rounded left-3 top-3"
//                         >
//                           {tag}
//                         </div>
//                       ))}
//                     </div>
//                     <div className=" filter contrast-[0.9]">
//                       <img
//                         src={project.coverImage}
//                         alt={project.title}
//                         className="object-cover w-full h-52 transition rounded-xl aspect-video group-hover:opacity-90 bg-slate-50 dark:bg-zinc-900"
//                       />
//                     </div>
//                   </div>

//                   <div className="flex flex-col justify-between flex-1 py-4 ">
//                     <div className="flex-1">
//                       <p className="text-xl font-semibold text-gray-800 dark:text-slate-200">
//                         {project.title}
//                       </p>
//                       <p className="mt-3 text-base text-gray-600 dark:text-gray-500 line-clamp-2">
//                         {project.summary}
//                       </p>
//                     </div>
//                     <div className="flex items-center mt-4">
//                       <div className="flex mb-2 space-x-1 text-xs text-gray-500">
//                         {project.tags.map((tag) => (
//                           <div key={tag}>
//                             <span className="font-semibold text-gray-600 dark:text-gray-400">
//                               {tag}{" "}
//                             </span>
//                             <span aria-hidden="true">&middot;</span>
//                           </div>
//                         ))}
//                         {/* <time dateTime={formattedTime}>{formattedTime}</time> */}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </Link>
//             ))}
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// }

import { getAllProjects } from "@/functions/getAllProjects";
import { Article } from "@/lib/types";
import ArticleList from "@/components/ArticleList";
import Container from "@/components/Container";

export const metadata = {
  title: "Projects | Musabbir Sagar",
  description: "Projects by Musabbir Sagar",
};

export default async function ProjectsPage() {
  const projects: Article[] = await getAllProjects();

  return (
    <Container>
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          Projects
        </h1>
        <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
          A collection of projects I've worked on
        </p>
      </div>
      <ArticleList articles={projects} />
    </Container>
  );
}
