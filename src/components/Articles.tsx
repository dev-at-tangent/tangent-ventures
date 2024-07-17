import ArticleCard from "./ArticleCard";
import type { Entry } from "contentful";
import type { Article } from "../pages/media.astro";

export default function Articles({
  articles,
  searchKeyword,
}: {
  articles: Entry<Article>[];
  searchKeyword: string;
}) {
  //TODO sort the articles by highlighted first, then date
  const startIndex = searchKeyword === "" ? 2 : 0;
  return (
    <div className="flex flex-col gap-y-8 mt-20">
      {searchKeyword === "" && (
        <div className="grid desktop:grid-cols-2 gap-8">
          {articles.slice(0, 2).map((article) => (
            <ArticleCard article={article} />
          ))}
        </div>
      )}
      <div className="grid desktop:grid-cols-3 gap-8 desktop:mt-8">
        {articles.slice(startIndex, articles.length).map((article) => (
          <ArticleCard article={article} />
        ))}
      </div>
      {articles.length === 0 && <div className="w-full">No articles found.</div>}
    </div>
  );
}
