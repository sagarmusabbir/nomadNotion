// "use client";

// import { Input } from "@/components/input";
// import { Article, Project, TagFrequencyMap } from "@/lib/types";
// import { useState } from "react";
// import Tags from "./Tags";
// import { useParams } from "next/navigation";
// import Feed from "./Feed";
// import ProjectFeed from "./ProjectFeed";

// const SearchProject = ({
//   publishedProjects,
//   tagFrequencyMap,
// }: {
//   publishedProjects: Project[];
//   tagFrequencyMap: TagFrequencyMap;
// }) => {
//   const [searchValue, setSearchValue] = useState("");

//   const params = useParams();
//   const { slug } = params;

//   const normalizedSlug =
//     typeof slug === "string" ? slug.replace(/%20/g, " ") : slug;
//   const filteredBlogProjects = publishedProjects.filter((project) => {
//     const tagProjectContent = project.tags ? project.tags.join(" ") : "";
//     const searchProjectContent =
//       project.title + project.summary + tagProjectContent;
//     return searchProjectContent
//       .toLowerCase()
//       .includes(searchValue.toLowerCase());
//   });

//   return (
//     <>
//       <div className="mb-5">
//         <Input
//           placeholder={slug ? `Search in #${normalizedSlug}` : "Search Project"}
//           value={searchValue}
//           onChange={(e) => setSearchValue(e.target.value)}
//         />
//       </div>

//       <div className="mb-5">
//         <Tags tagFrequencyMap={tagFrequencyMap} />
//       </div>

//       {!filteredBlogProjects.length && (
//         <p className="text-gray-500 text-center">No posts found.</p>
//       )}

//       <ProjectFeed projects={filteredBlogProjects} />
//     </>
//   );
// };

// export default SearchProject;
