import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";
import type { Entry } from "contentful";
import type { Podcast } from "../pages/media.astro";

export default function FeaturedVideo({
  details,
}: {
  details: Entry<Podcast>;
}) {
  const formatDate = (date: string) => {
    return new Date(date)
      .toDateString()
      .split(" ")
      .slice(1)
      .join(" ")
      .replace(/(\w+\s\d+)\s(\d+)/, "$1, $2");
  };

  return (
    <div className="bg-white/70 backdrop-blur-sm text-grey-80 rounded-xl p-4 lg:p-6 flex flex-col lg:flex-row w-full mt-8 drop-shadow-md hover:bg-white transition-colors">
      <iframe
        className="lg:w-3/5 aspect-video"
        src={`https://www.youtube.com/embed/${details.fields.embedId.toString()}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
      <div className="flex flex-col lg:w-2/5 justify-center mt-4 lg:mt-0  lg:ml-12">
        <div className="flex text-sm items-center lg:text-base">
          <span>{formatDate(details.fields.date.toString())}</span>
          <div className="grow" />
          <div className="flex items-center justify-center border border-grey-60 text-grey-60 font-medium rounded-full text-xs px-4 py-1">
            {details.fields.tags.toString()}
          </div>
        </div>
        <h1 className="text-2xl lg:text-3xl font-semibold text-black mt-4">
          {details.fields.title.toString()}
        </h1>
        <a
          href={details.fields.link.toString()}
          target="_blank"
          className="flex mt-8 font-semibold items-center text-sm hover:underline underline-offset-8"
        >
          WATCH ON YOUTUBE
          <ArrowTopRightOnSquareIcon className="size-5 ml-2" />
        </a>
      </div>
    </div>
  );
}
