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
  const startIndex = searchKeyword === "" ? 2 : 0;
  const customSort = (a: Entry<Article>, b: Entry<Article>) => {
    if (a.fields.date > b.fields.date) return -1;
    if (a.fields.date < b.fields.date) return 1;
    return 0;
  };
  // does not include featured article
  const sortedArticles = articles
    .slice(startIndex, articles.length)
    .sort(customSort);
  return (
    <div className="flex flex-col gap-y-8 mt-20">
      {searchKeyword === "" && (
        <div className="grid desktop:grid-cols-2 gap-8">
          {articles.slice(0, 2).map((article) => (
            <ArticleCard
              key={article.fields.title.toString()}
              article={article}
            />
          ))}
        </div>
      )}
      <div className="grid desktop:grid-cols-3 gap-8 desktop:mt-8">
        {sortedArticles.map((article) => (
          <ArticleCard key={article.fields.title.toString()} article={article} />
        ))}
      </div>
      {articles.length === 0 && (
        <div className="w-full">No articles found.</div>
      )}
    </div>
  );
}
