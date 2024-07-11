import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";
import thumbnail from "../assets/thumbnail.png";

export default function PodcastCard({type}: {type: string}) {
  return (
    <a
      href="https://www.google.com"
      className="group flex flex-col p-8 rounded-xl text-grey-80 bg-white gap-y-4"
    >
      <img src={thumbnail.src} alt="thumbnail" className="w-full" />
      <div className="flex items-end justify-between w-full">
        <span>May 14, 2024</span>
        <div className="flex items-center justify-center border border-grey-60 text-grey-60 font-medium rounded-full text-sm px-4">
          {type}
        </div>
      </div>
      <h1 className="text-2xl font-semibold text-black">
        PODCAST TITLE PODCAST TITLE{" "}
      </h1>
      <div className="flex mt-8 font-semibold items-center text-sm group-hover:underline underline-offset-8">
        WATCH ON YOUTUBE
        <ArrowTopRightOnSquareIcon className="size-5 ml-2" />
      </div>
    </a>
  );
}
