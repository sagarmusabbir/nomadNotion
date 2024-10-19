import { notFound } from "next/navigation";
import notion from "@/lib";
import { convertToPost } from "@/functions/convertToPost";
import { Article } from "@/lib/types";
import { Metadata } from "next";
import getLocalizedDate from "@/app/utils/getLocalizedDate";
import SocialshareButtons from "@/components/SocialshareButtons";
import { NotionRenderer } from "react-notion";
import Container from "@/components/Container";
import Link from "next/link";
import ArticleList from "@/components/Feed";
import TopScrollButton from "@/components/TopScrollButton";

const title = "Project by Musabbir Sagar";

export const metadata: Metadata = {
  title: `${title}`,
};

export async function generateStaticParams() {
  const databaseId = process.env.NOTION_DATABASE_ID;

  if (!databaseId) {
    console.error("NOTION_DATABASE_ID is not defined");
    return [];
  }

  const response = await notion.databases.query({
    database_id: databaseId,
    filter: {
      property: "type",
      select: {
        equals: "Projects",
      },
    },
  });

  return response.results.map((page: any) => ({
    slug: convertToPost(page).slug,
  }));
}

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const databaseId = process.env.NOTION_DATABASE_ID;

  if (!databaseId) {
    console.error("NOTION_DATABASE_ID is not defined");
    return null;
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
          property: "slug",
          rich_text: {
            equals: slug,
          },
        },
      ],
    },
  });

  if (response.results.length === 0) {
    notFound();
  }

  const blockMap = await response.results;

  const project: Article = convertToPost(response.results[0]);

  return (
    // <div className="max-w-3xl mx-auto py-8">
    //   <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
    //   {project.coverImage && (
    //     <img
    //       src={project.coverImage}
    //       alt={project.title}
    //       className="w-full h-64 object-cover rounded-lg mb-6"
    //     />
    //   )}
    //   <div className="prose lg:prose-xl">{project.content}</div>
    // </div>

    <div className="space-y-5 max-w-7xl m-auto min-h-screen">
      <img
        className="object-cover w-full h-52 aspect-video"
        src={project.coverImage}
      />

      <div>
        <div className="text-center space-y-5 text-sm text-gray-800 dark:text-slate-300 mx-auto mt-3">
          <div className="text-2xl px-px font-medium leading-none tracking-tight">
            <h1>{project.title}</h1>
          </div>
          <div className="text-md leading-8 sm:mt-4">
            {/* <div>
            <time dateTime={formattedTime}>{formattedTime}</time>
          </div> */}
            <div className="font-semibold">{project.author}</div>
            <SocialshareButtons
              shareUrl={`http://localhost:3000/${project.slug}?id=${project.id}`}
              title={project.title}
            />
          </div>
        </div>

        <div className="max-w-4xl px-6 mx-auto mb-24 space-y-8 md:px-8 pt-4 border-t border-slate-200 dark:border-gray-800 mt-4 text-gray-800 dark:text-slate-200">
          <NotionRenderer fullPage blockMap={{}} />
        </div>
        <div className="py-12 border-t border-slate-200 dark:border-gray-800">
          <Container>
            <div className="flex items-center justify-between my-8">
              <div className="text-3xl font-bold text-gray-700 dark:text-slate-300">
                Latest articles
              </div>
              <Link href="/projects">
                <span className="font-semibold text-gray-700 dark:text-slate-300 hover:text-gray-800  cursor-pointer">
                  More articles ➜
                </span>
              </Link>
            </div>
            {/* <ArticleList articles={tagPosts} /> */}
          </Container>
        </div>
      </div>
      <TopScrollButton />
    </div>
  );
}
