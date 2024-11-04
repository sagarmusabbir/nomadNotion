import { Article } from "@/lib/types";
import slugify from "slugify";
import getLocalizedDate from "../app/utils/getLocalizedDate";
import Link from "next/link";
import Image from "next/image";
import { Badge, Card } from "flowbite-react";

type Props = {
  article: Article;
};

export default function ArticleCard({ article }: Props) {
  const slug = slugify(article.slug).toLowerCase();

  const formattedTime = getLocalizedDate(article.date);

  return (
    <Link
      href={`/articles/${article.type.toLowerCase()}s/${slug}?id=${article.id}`}
    >
      <div
        // className="flex flex-col overflow-hidden cursor-pointer group h-full w-full  rounded-lg bg-clip-padding backdrop-blur-lg backdrop-filter   bg-opacity-0  transition-opacity hover:bg-opacity-100 bg-gradient-to-r from-[#ffffff]  to-slate-50"
        className="overflow-hidden cursor-pointer group h-full w-full bg-slate-100 rounded-md backdrop-filter  bg-opacity-80 drop-shadow-md transition-opacity  hover:bg-opacity-100"
      >
        <div className="relative">
          <div className="absolute ">
            {article?.tags?.map((tag) => (
              <div
                key={tag}
                className="relative shadow-slate-50 z-[2] inline-flex items-center px-3 py-1.5 mb-2 mr-2 text-xs font-medium  text-white border  border-gray-600 rounded-md left-3 top-3 p-4"
              >
                {tag}
              </div>
            ))}
            {/* {article.type === "Project" && (
              <span className="relative shadow z-[2] inline-flex items-center px-3 py-1.5 mb-2 mr-2 text-xs font-medium text-white   bg-gray-700 rounded left-3 top-3 p-4">
                Project
              </span>
            )} */}
          </div>
          <div className="relative w-full h-48    bg-[url('/cardbg.svg')] bg-cover bg-center bg-no-repeat bg-blend-lighten bg-opacity-5">
            {/* Hello World<Image
              unoptimized
              src={article.coverImage}
              alt={`Cover image for ${article.title}`}
              fill
              className="rounded-t-lg "
              style={{
                objectFit: "cover",
                filter: "contrast(0.9)",
              }}
            />
  */}
          </div>
        </div>

        <div className="flex flex-col justify-between rounded-b-md flex-1 p-4">
          <div className="flex-1 ">
            <h3 className="text-xl font-semibold text-gray-800  line-clamp-2 justify-items-end">
              {article.title}
            </h3>

            <p className="mt-4 text-sm text-gray-500 line-clamp-2 justify-items-end font-extralight">
              {article.summary}
            </p>
            <div className="text-xs text-gray-700 mt-4">
              <time dateTime={formattedTime}>{formattedTime}</time>
            </div>
          </div>
          {/* <div className="flex items-center mt-4">
            <div className="flex mb-2 space-x-1 text-xs text-gray-700">
              {article.tags.map((tag) => (
                <div key={tag}>
                  <span className="font-semibold text-gray-600 dark:text-gray-400">
                    {tag}{" "}
                  </span>
                  <span aria-hidden="true">&middot;</span>
                </div>
              ))}
            </div>
          </div> */}
        </div>
      </div>
    </Link>
  );
}
