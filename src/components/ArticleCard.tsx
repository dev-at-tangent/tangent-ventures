import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";
import type { Entry } from "contentful";
import type { Article } from "../pages/media.astro";

export default function ArticleCard({ article }: { article: Entry<Article> }) {
  return (
    <a
      href={article.fields.link.toString()}
      target="_blank"
      className="group bg-white text-grey-80 rounded-xl p-8 flex flex-col gap-y-4 drop-shadow-lg"
    >
      <div className="flex items-end justify-between w-full">
        <span>{article.fields.date.toString()}</span>
        <div className="flex items-center justify-center border border-grey-60 text-grey-60 font-medium rounded-full text-sm px-4">
          {article.fields.tags.toString()}
        </div>
      </div>
      <h1 className="text-3xl text-black font-medium line-clamp-2">
        {article.fields.title.toString()}
      </h1>
      <p className="line-clamp-3">{article.fields.description.toString()}</p>
      <div className="flex mt-8 font-semibold items-center text-sm group-hover:underline underline-offset-8">
        READ MORE
        <ArrowTopRightOnSquareIcon className="size-4 ml-2" />
      </div>
    </a>
  );
}