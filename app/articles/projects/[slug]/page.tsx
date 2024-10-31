import "react-notion/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";
import { NotionRenderer } from "react-notion";
import notion from "@/lib";
import { convertToPost } from "@/functions/convertToPost";
import Link from "next/link";
import TopScrollButton from "../../../../components/TopScrollButton";

import Container from "@/components/Container";
import ArticleList from "@/components/ArticleList";
import { getAllPosts } from "@/functions/getAllPosts";
import { Article } from "@/lib/types";
import getLocalizedDate from "@/app/utils/getLocalizedDate";
import { getTagFilteredPosts } from "@/functions/articleFilteredPosts";
import SocialshareButtons from "@/components/SocialshareButtons";
import { Metadata, ResolvingMetadata } from "next";

type Props = {
  searchParams: { [key: string]: string };
};

export async function generateMetadata(
  { searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { id } = searchParams;

  const response = await fetch(`https://notion-api.splitbee.io/v1/page/${id}`, {
    next: { revalidate: 60 },
  });
  // console.log(response);

  const pageProperties = await notion.pages.retrieve({ page_id: id });
  const post = convertToPost(pageProperties);

  return {
    title: `${post.title}`,
    openGraph: {
      title: `${post.title} | Musabbir Sagar`,
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} | Musabbir Sagar`,
    },
  };
}

export default async function Page({ searchParams }: Props) {
  const { id } = searchParams;

  const response = await fetch(`https://notion-api.splitbee.io/v1/page/${id}`, {
    next: { revalidate: 60 },
  });
  // console.log(response);
  const blockMap = await response.json();
  const pageProperties = await notion.pages.retrieve({ page_id: id });
  const postDetails = convertToPost(pageProperties);
  const moreArticles: Article[] = await getAllPosts();

  const formattedTime = getLocalizedDate(postDetails.date);
  const slug = postDetails.slug || [];
  const tags = postDetails.tags || [];

  // Pass id instead of uniqueId
  const tagPosts: Article[] = await getTagFilteredPosts({
    tags,
    slug: String(slug),
  });

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareSourceCode",
    "@accessibilitySummary": postDetails.summary,
    url: `https://musabbirsagar.com/articles/projects/${postDetails.slug}`,
    codeRepository: "https://github.com/sagarmusabbir?tab=repositories",
    copyrightHolder: {
      "@type": "Person",
      name: "Musabbir Sagar",
    },
    runtimePlatform: "Next.Js",
    programmingLanguage: "JavaScript",

    creator: {
      "@type": "Person",
      name: "Musabbir Sagar",
      url: "https://musabbirsagar.com/about",
      sameAs: [
        "https://www.linkedin.com/in/musabbirsagar/",
        "https://github.com/sagarmusabbir",
        "https://www.facebook.com/wwolverinee",
        "https://www.upwork.com/freelancers/~01395bf8f21fc23328",
        "https://twitter.com/MusabbirSagar",
        "https://www.fiverr.com/sagarmusabbir",
        "https://medium.com/@sagarmusabbir",
        "https://bn.quora.com/profile/Musabbir-Sagar-1",
        "https://stackoverflow.com/users/28067551/musabbir-sagar",
        "https://youtube.com/@sagarmusabbir",

        "https://dev.to/sagarmusabbir",

        "https://www.instagram.com/sagarsxyz/",
      ],
      address: {
        "@type": "PostalAddress",
        streetAddress: "Town Hall Road",
        addressLocality: "Habiganj",
        addressRegion: "Sylhet",
        postalCode: "3300",
        addressCountry: "BD",
      },
      email: "musabbir@thirdbracket.co.uk",
      image: [
        "https://scontent.fdac24-1.fna.fbcdn.net/v/t39.30808-6/397437157_10230882951884960_9114450588617653837_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeExBd6EJ5HrarJ2Ro-_dOwExbsxorFzsY7FuzGisXOxjltIkAxzMPqApS8St-TTSzY&_nc_ohc=vMEqFRIxV4EQ7kNvgFUVeiH&_nc_zt=23&_nc_ht=scontent.fdac24-1.fna&_nc_gid=AFi_2CMKXQ1YBlutccXcLBI&oh=00_AYAIFO8yUPEzlMQjEaC9HAnFPwync4LVHd4wO2-evGRBrw&oe=67287666",
        "https://scontent.fdac24-4.fna.fbcdn.net/v/t1.6435-9/39454506_10216196366529505_8331775803033387008_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=53a332&_nc_eui2=AeEdb0_t5NcFoeVEVkIfw8hasFJ8NiUO2newUnw2JQ7ad6Ue0r1UzFB-LjgrDRrTdcU&_nc_ohc=531GiXcfdpgQ7kNvgFow_kL&_nc_zt=23&_nc_ht=scontent.fdac24-4.fna&_nc_gid=AYUczXE6oZSKyTFrk2ZsDLO&oh=00_AYD5IHr6O4xm9PHTKMAuYONFbLnMhxaGkkgPAr415Glu1w&oe=674A21C7",
        "https://scontent.fdac24-4.fna.fbcdn.net/v/t1.6435-9/61530284_10218495243279987_1532965521199202304_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=53a332&_nc_eui2=AeEc-5Aw7fx67zgED9UXzfUPeavmxYHFLEV5q-bFgcUsRY8h4kzxQQOu21GviX5lj8I&_nc_ohc=ST_5jyv-otEQ7kNvgHwSuBi&_nc_zt=23&_nc_ht=scontent.fdac24-4.fna&_nc_gid=AMSgfG1ReCFmZdRU9CYQTQK&oh=00_AYBj8D7Pw9PBj_J6Cudh4Up8CIe-2M1oCap4pC3QuNBMTA&oe=674A3681",
        "https://scontent.fdac24-2.fna.fbcdn.net/v/t39.30808-6/315974472_10228444460964211_2174354641823458970_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeFY4WoA7I_Iripm08Y3iRg6gXm6FgfAMKmBeboWB8AwqS8rP7iGjq0aGFK_J3VD2EI&_nc_ohc=uzDhTD_UXkkQ7kNvgG_JBr9&_nc_zt=23&_nc_ht=scontent.fdac24-2.fna&_nc_gid=AzOzZEzFwXKfucT2rXavRWq&oh=00_AYCdcxQ8ooH1e9PIvyQB7PfBQFwEczUf-uFUSa2q4wmF0Q&oe=6728954F",
      ],
    },
    author: {
      "@type": "Person",
      name: "Musabbir Sagar",
      url: "https://musabbirsagar.com/about",
      sameAs: [
        "https://www.linkedin.com/in/musabbirsagar/",
        "https://github.com/sagarmusabbir",
        "https://www.facebook.com/wwolverinee",
        "https://www.upwork.com/freelancers/~01395bf8f21fc23328",
        "https://twitter.com/MusabbirSagar",
        "https://www.fiverr.com/sagarmusabbir",
        "https://medium.com/@sagarmusabbir",
        "https://bn.quora.com/profile/Musabbir-Sagar-1",
        "https://stackoverflow.com/users/28067551/musabbir-sagar",
        "https://youtube.com/@sagarmusabbir",

        "https://dev.to/sagarmusabbir",

        "https://www.instagram.com/sagarsxyz/",
      ],
      address: {
        "@type": "PostalAddress",
        streetAddress: "Town Hall Road",
        addressLocality: "Habiganj",
        addressRegion: "Sylhet",
        postalCode: "3300",
        addressCountry: "BD",
      },
      email: "musabbir@thirdbracket.co.uk",
      image: [
        "https://scontent.fdac24-1.fna.fbcdn.net/v/t39.30808-6/397437157_10230882951884960_9114450588617653837_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeExBd6EJ5HrarJ2Ro-_dOwExbsxorFzsY7FuzGisXOxjltIkAxzMPqApS8St-TTSzY&_nc_ohc=vMEqFRIxV4EQ7kNvgFUVeiH&_nc_zt=23&_nc_ht=scontent.fdac24-1.fna&_nc_gid=AFi_2CMKXQ1YBlutccXcLBI&oh=00_AYAIFO8yUPEzlMQjEaC9HAnFPwync4LVHd4wO2-evGRBrw&oe=67287666",
        "https://scontent.fdac24-4.fna.fbcdn.net/v/t1.6435-9/39454506_10216196366529505_8331775803033387008_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=53a332&_nc_eui2=AeEdb0_t5NcFoeVEVkIfw8hasFJ8NiUO2newUnw2JQ7ad6Ue0r1UzFB-LjgrDRrTdcU&_nc_ohc=531GiXcfdpgQ7kNvgFow_kL&_nc_zt=23&_nc_ht=scontent.fdac24-4.fna&_nc_gid=AYUczXE6oZSKyTFrk2ZsDLO&oh=00_AYD5IHr6O4xm9PHTKMAuYONFbLnMhxaGkkgPAr415Glu1w&oe=674A21C7",
        "https://scontent.fdac24-4.fna.fbcdn.net/v/t1.6435-9/61530284_10218495243279987_1532965521199202304_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=53a332&_nc_eui2=AeEc-5Aw7fx67zgED9UXzfUPeavmxYHFLEV5q-bFgcUsRY8h4kzxQQOu21GviX5lj8I&_nc_ohc=ST_5jyv-otEQ7kNvgHwSuBi&_nc_zt=23&_nc_ht=scontent.fdac24-4.fna&_nc_gid=AMSgfG1ReCFmZdRU9CYQTQK&oh=00_AYBj8D7Pw9PBj_J6Cudh4Up8CIe-2M1oCap4pC3QuNBMTA&oe=674A3681",
        "https://scontent.fdac24-2.fna.fbcdn.net/v/t39.30808-6/315974472_10228444460964211_2174354641823458970_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeFY4WoA7I_Iripm08Y3iRg6gXm6FgfAMKmBeboWB8AwqS8rP7iGjq0aGFK_J3VD2EI&_nc_ohc=uzDhTD_UXkkQ7kNvgG_JBr9&_nc_zt=23&_nc_ht=scontent.fdac24-2.fna&_nc_gid=AzOzZEzFwXKfucT2rXavRWq&oh=00_AYCdcxQ8ooH1e9PIvyQB7PfBQFwEczUf-uFUSa2q4wmF0Q&oe=6728954F",
      ],
    },
    name: postDetails.title,
    image: postDetails.coverImage,

    datePublished: formattedTime,
  };

  return (
    <div className="space-y-5 max-w-7xl m-auto min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <img
        className="object-cover w-full h-52 aspect-video"
        src={postDetails.coverImage}
      />

      <div>
        <div className="text-center space-y-5 text-sm text-gray-800 dark:text-slate-300 mx-auto mt-3">
          <div className="text-2xl px-px font-medium leading-none tracking-tight">
            <h1>{postDetails.title}</h1>
          </div>
          <div className="text-md leading-8 sm:mt-4">
            <div>
              <time dateTime={formattedTime}>{formattedTime}</time>
            </div>
            <div className="font-semibold">{postDetails.author}</div>
            <SocialshareButtons
              shareUrl={`http://localhost:3000/${postDetails.slug}?id=${postDetails.id}`}
              title={postDetails.title}
            />
          </div>
        </div>

        <div className="max-w-4xl px-6 mx-auto mb-24 space-y-8 md:px-8 pt-4 border-t border-slate-200 dark:border-gray-800 mt-4 text-gray-800 dark:text-slate-200">
          <NotionRenderer blockMap={blockMap} />
        </div>
        <div className="py-12 border-t border-slate-200 dark:border-gray-800">
          <Container>
            <div className="flex items-center justify-between my-8">
              <div className="text-3xl font-bold text-gray-700 dark:text-slate-300">
                Latest articles
              </div>
              <Link href="/articles">
                <span className="font-semibold text-gray-700 dark:text-slate-300 hover:text-gray-800  cursor-pointer">
                  More articles ➜
                </span>
              </Link>
            </div>
            <ArticleList articles={tagPosts} />
          </Container>
        </div>
      </div>
      <TopScrollButton />
    </div>
  );
}
