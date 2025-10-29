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
    <div className="w-full mt-8">
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
      <div className="grid desktop:grid-cols-3 mt-8 gap-8 w-full">
        {sortedArticles.map((article) => (
          <ArticleCard
            key={article.fields.title.toString()}
            article={article}
          />
        ))}
      </div>
      {articles.length === 0 && (
        <div className="w-full text-center text-grey-80 text-lg font-semibold">
          NO ARTICLES FOUND.
        </div>
      )}
    </div>
  );
}
