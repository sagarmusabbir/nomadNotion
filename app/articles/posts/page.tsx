import { getAllPosts } from "@/functions/getAllPosts";
import { Article } from "@/lib/types";
import ArticleList from "@/components/ArticleList";
import Container from "@/components/Container";

export const metadata = {
  title: "Posts | Musabbir Sagar",
  description: "Posts by Musabbir Sagar",
};

export default async function PostsPage() {
  const posts: Article[] = await getAllPosts();

  return (
    <Container>
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          Posts
        </h1>
        <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
          Mix of posts about web development and other things I find
          interesting.
        </p>
      </div>
      <ArticleList articles={posts} />
    </Container>
  );
}
