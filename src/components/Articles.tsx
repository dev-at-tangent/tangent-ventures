import ArticleCard from "./ArticleCard";
import type { Entry } from "contentful";
import type { Article } from "../pages/media.astro";

export default function Articles({ articles }: { articles: Entry<Article>[] }) {
  //TODO sort the articles by highlighted first, then date
  return (
    <div className="flex flex-col gap-y-8 mt-20">
      <div className="grid grid-cols-2 gap-8">
        {articles.slice(0, 2).map((article) => (
          <ArticleCard article={article} />
        ))}
      </div>
      <div className="grid grid-cols-3 gap-8 mt-8">
        {articles.slice(2, articles.length).map((article) => (
          <ArticleCard article={article} />
        ))}
      </div>
    </div>
  );
}
