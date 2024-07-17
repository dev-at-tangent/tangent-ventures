import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";
import type { Entry, Asset } from "contentful";
import type { Podcast } from "../pages/media.astro";

export default function PodcastCard({ details }: { details: Entry<Podcast> }) {
  const formatDate = (date: string) => {
    return new Date(date)
      .toDateString()
      .split(" ")
      .slice(1)
      .join(" ")
      .replace(/(\w+\s\d+)\s(\d+)/, "$1, $2");
  };

  return (
    <a
      href={details.fields.link.toString()}
      className="group flex flex-col p-4 desktop:p-8 rounded-xl text-grey-80 bg-white/70 backdrop-blur-sm gap-y-4 drop-shadow-md transition-colors hover:bg-white"
    >
      <img
        src={(
          details.fields.thumbnail as unknown as Asset
        )?.fields?.file?.url?.toString()}
        alt="thumbnail"
        className="w-full"
      />
      <div className="flex items-center justify-between w-full">
        <span className="text-sm desktop:text-base">
          {formatDate(details.fields.date.toString())}
        </span>
        <div className="flex items-center justify-center border border-grey-60 text-grey-60 font-medium rounded-full text-xs desktop:text-sm text-center px-4 py-1 ">
          {details.fields.tags.toString()}
        </div>
      </div>
      <h1 className="text-2xl font-semibold text-black">
        {details.fields.title.toString()}
      </h1>
      <div className="flex mt-8 font-semibold items-center text-sm group-hover:underline underline-offset-8">
        WATCH ON YOUTUBE
        <ArrowTopRightOnSquareIcon className="size-5 ml-2" />
      </div>
    </a>
  );
}
