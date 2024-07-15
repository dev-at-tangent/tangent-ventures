import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";
import type { Entry } from "contentful";
import type { Podcast } from "../pages/media.astro";

export default function FeaturedVideo({
  details,
}: {
  details: Entry<Podcast>;
}) {
  console.log(details.fields.link);
  return (
    <div className="bg-white text-grey-80 rounded-xl p-6 flex w-full mt-8">
      <iframe
        className="w-3/5 aspect-video"
        src={`https://www.youtube.com/embed/${details.fields.embedId.toString()}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
      <div className="flex flex-col justify-center  ml-12">
        <div className="flex">
          <span>{details.fields.date.toString()}</span>
          <div className="grow" />
          <div className="flex items-center justify-center border border-grey-60 text-grey-60 font-medium rounded-full text-sm px-4">
            {details.fields.tags.toString()}
          </div>
        </div>
        <h1 className="text-3xl font-semibold text-black mt-4">
          {details.fields.title.toString()}
        </h1>
        <a
          href={details.fields.link.toString()}
          className="flex mt-8 font-semibold items-center text-sm hover:underline underline-offset-8"
        >
          WATCH ON YOUTUBE
          <ArrowTopRightOnSquareIcon className="size-5 ml-2" />
        </a>
      </div>
    </div>
  );
}
