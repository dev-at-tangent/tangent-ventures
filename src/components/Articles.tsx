import ArticleCard from "./ArticleCard";

export default function Articles() {
  return (
    <div className="flex flex-col gap-y-8 mt-20">
      <div className="grid grid-cols-2 gap-8">
        <ArticleCard />
        <ArticleCard />
      </div>
      <div className="grid grid-cols-3 gap-8 mt-8">
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
      </div>
    </div>
  );
}
