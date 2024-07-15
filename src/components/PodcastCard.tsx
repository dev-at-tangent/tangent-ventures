import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";
import type { Entry, Asset } from "contentful";
import type { Podcast } from "../pages/media.astro";

export default function PodcastCard({ details }: { details: Entry<Podcast> }) {
  return (
    <a
      href={details.fields.link.toString()}
      className="group flex flex-col p-8 rounded-xl text-grey-80 bg-white gap-y-4"
    >
      <img
        src={(
          details.fields.thumbnail as unknown as Asset
        )?.fields?.file?.url?.toString()}
        alt="thumbnail"
        className="w-full"
      />
      <div className="flex items-end justify-between w-full">
        <span>{details.fields.date.toString()}</span>
        <div className="flex items-center justify-center border border-grey-60 text-grey-60 font-medium rounded-full text-sm px-4">
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
