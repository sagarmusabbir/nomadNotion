import { getAllPosts } from "@/functions/getAllPosts";
import { Article } from "@/lib/types";
import { postsPerPage } from "@/site";
import Feed from "@/components/Feed";
import HeroSection from "../components/HeroSection";
import axios, { AxiosResponse } from "axios";
import { sendSlackMessage } from "@/functions/sendSlackMessage";
import DefaultHero from "@/components/Hero";
import { Cover } from "@/components/icons";
import Search from "@/components/Search";
import { calculateTagFrequency } from "@/functions/getAllTags";

const HomePage = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) => {
  const page = Number(searchParams.page) || 1;
  const publishedPosts: Article[] = await getAllPosts();

  // Send a message to Slack when the page is accessed
  const message = {
    text: `Someone visited the homepage! Page: ${page}`,
  };

  try {
    await sendSlackMessage(message);
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Error sending Slack message:", error.message);
      // Handle the error as needed
    } else {
      console.error("An unexpected error occurred:", error);
      // Handle other types of errors or log them
    }
  }

  return (
    <>
      <div className="space-y-5 max-w-7xl m-auto min-h-screen">
        <DefaultHero
          Icon={Cover}
          name="Musabbirs Terminal"
          source="/terminal.webp"
        />
        <div className="mt-4 bg-slate-50 max-w-5xl m-auto p-4 min-h-screen">
          <Feed articles={publishedPosts} />
        </div>
      </div>
    </>
  );
};

export default HomePage;
