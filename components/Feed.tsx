import { Article } from "../lib/types";
import { Project } from "../lib/types";
import ArticleCard from "./ArticleCard";
import ProjectCard from "./ProjectCard";

type Props = {
  articles: Article[];
  // projects: Project[];
};

export default function ArticleList({ articles }: Props) {
  return (
    <div className="grid gap-10 lg:gap-12 sm:grid-cols-2 justify-center">
      {articles &&
        articles.map((article) => (
          <ArticleCard article={article} key={article.id} />
        ))}
    </div>
  );
}
