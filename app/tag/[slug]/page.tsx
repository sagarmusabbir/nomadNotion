import DefaultHero from "@/components/Hero";
import { TagIcon } from "@/components/icons";
import NewHero from "@/components/newhero";
import Search from "@/components/Search";
import { getAllPosts } from "@/functions/getAllPosts";
import { getAllProjects } from "@/functions/getAllProjects";
import { calculateTagFrequency } from "@/functions/getAllTags";
import { getTagFilteredPosts } from "@/functions/tagFilteredPosts";
import { Article } from "@/lib/types";
import { Breadcrumb } from "flowbite-react";
import { Metadata } from "next";
import { MdHome } from "react-icons/md";

// const title = "Tags";

// export const metadata: Metadata = {
//   title,
//   openGraph: {
//     title: `${title} | Musabbir Sagar`,
//   },
// };

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const { slug } = params;
  const decodedSlug = decodeURIComponent(slug);
  const tagTitle = decodedSlug.charAt(0).toUpperCase() + decodedSlug.slice(1); // Capitalize first letter

  return {
    title: `${tagTitle} | Tags`,
    openGraph: {
      title: `${tagTitle} | Tags | Musabbir Sagar`,
    },
  };
}

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const decodedSlug = decodeURIComponent(slug); // Decode URL-encoded string
  const tagFilteredPosts = await getTagFilteredPosts({ slug: decodedSlug });
  const publishedPosts: Article[] = await getAllPosts();
  const publishedProjects: Article[] = await getAllProjects();
  const tagFrequencyMap = await calculateTagFrequency(
    { publishedPosts },
    { publishedProjects }
  );

  return (
    <div className="m-auto  min-h-screen space-y-5 ">
      <NewHero
        Icon={TagIcon}
        iconSize="h-40 w-40"
        title1="Recent"
        title2=" Projects"
        subtitleStart="Some of My"
        highlight="Important"
        subtitleEnd="Projects"
        actionArea={
          <div className="flex w-fit items-center gap-5">
            <Breadcrumb>
              <Breadcrumb.Item
                theme={{
                  href: {
                    on: "flex items-center text-sm md:text-base xl:text-lg font-medium text-gray-700 hover:text-gray-900 ",
                    off: "flex items-center text-sm md:text-base xl:text-lg font-medium text-gray-500 dark:text-gray-400",
                  },

                  icon: "h-4 w-4 md:h-5 md:w-5 xl:h-6 xl:w-6",
                }}
                href="/"
                icon={MdHome}
              ></Breadcrumb.Item>
              <Breadcrumb.Item
                theme={{
                  href: {
                    on: "flex items-center text-sm md:text-base xl:text-lg font-medium text-gray-700 hover:text-gray-900 ",
                    off: "flex items-center text-sm md:text-base xl:text-lg font-medium text-gray-500 ",
                  },
                  chevron:
                    "mr-1  h-4 w-4 md:h-5 md:w-5 xl:h-6 xl:w-6 text-gray-400 group-first:hidden md:mr-2 ",
                }}
              >
                Tags
              </Breadcrumb.Item>
            </Breadcrumb>
          </div>
        }
      />
      <div className="max-w-screen-lg m-auto p-4 min-h-screen">
        <Search
          publishedPosts={tagFilteredPosts}
          publishedProjects={tagFilteredPosts}
          tagFrequencyMap={tagFrequencyMap}
        />
      </div>
    </div>
  );
}
