import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";
import type { Entry } from "contentful";
import type { FeaturedMedia } from "../../pages/index.astro";

export default function MediaSection({
  featuredMedia,
}: {
  featuredMedia: Entry<FeaturedMedia>[];
}) {
  return (
    <div className="flex flex-col items-center gap-y-8 mt-20 desktop:mt-0">
      <h2 className="text-3xl desktop:text-5xl font-medium w-1/2 text-center desktop:w-full">
        FEATURED MEDIA
      </h2>
      <div className="grid desktop:grid-cols-3 gap-4 desktop:gap-8 mx-8 desktop:w-2/3 z-10 ">
        {featuredMedia.map((media: any) => (
          <a
            key={media.sys.id}
            href={media.fields.link}
            target="_blank"
            className="flex flex-col bg-white/70 backdrop-blur-sm rounded-xl p-4 desktop:p-8 transition-colors group hover:bg-white"
          >
            <div className="flex items-center">
              <span className="text-grey-80 text-sm">{media.fields.date}</span>
              <div className="grow" />
              <div className="rounded-full outline outline-1 px-4 py-1 text-xs text-grey-60">
                {media.fields.type}
              </div>
            </div>
            <h1 className="text-xl desktop:text-2xl font-semibold mt-4 line-clamp-2 self-start">
              {media.fields.title}
            </h1>
            <div className="grow" />
            <span className="flex items-center text-grey-80 text-sm font-semibold mt-4 desktop:mt-8 group-hover:underline underline-offset-8">
              {media.fields.type === "ARTICLE"
                ? "READ MORE"
                : "WATCH ON YOUTUBE"}{" "}
              <ArrowTopRightOnSquareIcon className="size-5 ml-3" />
            </span>
          </a>
        ))}
      </div>

      <a
        className="bg-white rounded-full px-6 py-3 text-sm desktop:text-base font-medium group relative overflow-hidden"
        href="/media"
      >
        <span className="inline-block translate-y-8 transition-all group-hover:translate-y-0">
          VIEW ALL MEDIA
        </span>
        <span className="absolute left-0 mx-6 inline-block transition-all group-hover:-translate-y-8">
          VIEW ALL MEDIA
        </span>
      </a>
    </div>
  );
}
