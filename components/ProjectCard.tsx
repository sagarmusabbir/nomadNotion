import { Project } from "@/lib/types";
import slugify from "slugify";
import getLocalizedDate from "../app/utils/getLocalizedDate";

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props) {
  const slug = slugify(project.slug).toLowerCase();

  const formattedTime = getLocalizedDate(project.date);

  return (
    <a href={`/projects/${slug}?id=${project.id}`}>
      <div className="flex flex-col overflow-hidden cursor-pointer group">
        <div className="relative">
          <div className="absolute">
            {project?.tags?.map((tag) => (
              <div
                key={tag}
                className="relative shadow z-[2] inline-flex items-center px-3 py-1.5 mb-2 mr-2 text-xs font-bold text-zinc-800 uppercase bg-slate-100 rounded left-3 top-3"
              >
                {tag}
              </div>
            ))}
          </div>
          <div className=" filter contrast-[0.9]">
            <img
              className="object-cover w-full h-52 transition rounded-xl aspect-video group-hover:opacity-90 bg-slate-50 dark:bg-zinc-900"
              src={project.coverImage}
              alt={"project cover"}
            />
          </div>
        </div>
        <div className="flex flex-col justify-between flex-1 py-4 ">
          <div className="flex-1">
            <p className="text-xl font-semibold text-gray-800 dark:text-slate-200">
              {project.title}
            </p>
            <p className="mt-3 text-base text-gray-600 dark:text-gray-500 line-clamp-2">
              {project.summary}
            </p>
          </div>
          <div className="flex items-center mt-4">
            <div className="flex mb-2 space-x-1 text-xs text-gray-500">
              {project.tags.map((tag) => (
                <div key={tag}>
                  <span className="font-semibold text-gray-600 dark:text-gray-400">
                    {tag}{" "}
                  </span>
                  <span aria-hidden="true">&middot;</span>
                </div>
              ))}
              <time dateTime={formattedTime}>{formattedTime}</time>
            </div>
            {/* <p className="text-sm font-medium text-gray-900">{project?.author?.name}</p> */}
          </div>
        </div>
      </div>
    </a>
  );
}
