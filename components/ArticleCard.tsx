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

  const cover = article.coverImage;

  return (
    <Link
      href={`/articles/${article.type.toLowerCase()}s/${slug}?id=${article.id}`}
    >
      <div className="flex flex-col overflow-hidden cursor-pointer group h-full w-full bg-slate-400 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-5 drop-shadow-md transition-opacity hover:bg-opacity-10">
        <div className="relative">
          <div className="absolute">
            {article?.tags?.map((tag) => (
              <div
                key={tag}
                className="relative shadow z-[2] inline-flex items-center px-3 py-1.5 mb-2 mr-2 text-xs font-semibold text-gray-900  uppercase bg-slate-100 rounded left-3 top-3"
              >
                {tag}
              </div>
            ))}
            {article.type === "Project" && (
              <span className="relative shadow z-[2] inline-flex items-center px-3 py-1.5 mb-2 mr-2 text-xs font-semibold text-gray-900  uppercase bg-slate-100 rounded left-3 top-3">
                Project
              </span>
            )}
          </div>
          <div className="relative w-full h-48 filter contrast-[0.9]">
            <Image
              src={article.coverImage}
              alt={`Cover image for ${article.title}`}
              fill
              objectFit="cover"
              className="rounded-t-lg "
            />
          </div>
        </div>

        <div className="flex flex-col justify-between flex-1    p-4">
          <div className="flex-1">
            <p className="text-xl font-semibold text-gray-800  line-clamp-2">
              {article.title}
            </p>
            <p className="mt-3 text-base text-gray-600 line-clamp-2"></p>
            <p className="mt-3 text-base text-gray-600 line-clamp-2">
              {article.summary}
            </p>
          </div>
          <div className="flex items-center mt-4">
            <div className="flex mb-2 space-x-1 text-xs text-gray-700">
              {article.tags.map((tag) => (
                <div key={tag}>
                  <span className="font-semibold text-gray-600 dark:text-gray-400">
                    {tag}{" "}
                  </span>
                  <span aria-hidden="true">&middot;</span>
                </div>
              ))}
              <time dateTime={formattedTime}>{formattedTime}</time>
            </div>
            {/* <p className="text-sm font-medium text-gray-900">{article?.author?.name}</p> */}
          </div>
        </div>
      </div>
    </Link>
  );
}
