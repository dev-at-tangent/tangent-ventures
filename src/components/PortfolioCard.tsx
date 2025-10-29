import {
  ArrowTopRightOnSquareIcon,
  PlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import ReactCardFlip from "react-card-flip";
import type { Entry } from "contentful";
import type { PortfolioItem } from "../pages/portfolio.astro";
import { useScramble } from "use-scramble";
import React from "react";

export default function PortfolioCard({
  details,
  selected,
  setSelected,
}: {
  details: Entry<PortfolioItem>;
  selected: string;
  setSelected: (selected: string) => void;
}) {
  const toggleShowDetails = () => {
    setSelected(details.fields.name.toString());
  };

  const { ref, replay } = useScramble({
    text: details.fields.name.toString(),
    playOnMount: false,
    speed: 0.5,
  });

  const categoriesToShow: string[] = Array.isArray(
    details.fields.categoriesField
  )
    ? (details.fields.categoriesField as any[])
        .map((c: any) => (typeof c === "string" ? c : c?.fields?.title))
        .filter(Boolean)
        .map(String)
        .sort((a, b) =>
          a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" })
        )
    : [];

  return (
    <ReactCardFlip
      isFlipped={selected === details.fields.name.toString()}
      flipDirection="horizontal"
      containerClassName="relative h-[350px] w-[80vw] desktop:w-[20vw] max-w-72 drop-shadow-md backdrop-blur-sm"
    >
      <div
        className="bg-white/60 rounded-[20px] flex flex-col justify-between p-6 text-grey-90 font-medium h-full w-full group desktop:hover:bg-white [-webkit-backface-visibility:hidden] [transform:translateZ(0)]"
        onMouseOver={replay}
      >
        <div className="flex flex-col space-y-2">
          <div className="pb-1">
            <div className="w-1/3 relative h-20">
              <img
                src={(details.fields.logo as any)?.fields?.file?.url}
                className="absolute inset-0 w-full h-full object-contain hidden desktop:block group-hover:hidden"
              />
              <img
                src={(details.fields.logoColour as any)?.fields?.file?.url}
                className="absolute inset-0 w-full h-full object-contain lock desktop:hidden group-hover:block"
              />
            </div>
          </div>
          <div className="flex-wrap gap-2 flex">
            {categoriesToShow.map((category: string) => (
              <div
                key={category}
                className="inline-block outline outline-1 outline-grey-60 py-2 px-3 rounded-full text-grey-60 text-xs font-semibold uppercase leading-3"
              >
                {category}
              </div>
            ))}
          </div>
          <span ref={ref} className="hidden desktop:flex" />

          <span className="font-semibold text-lg uppercase desktop:hidden">
            {details.fields.name.toString()}
          </span>

          <div className="self-stretch inline-flex justify-start items-start gap-x-2 gap-y-1 flex-wrap content-start">
            {(details.fields.sector as unknown as string[])?.map(
              (eachSector: string, idx: number, arr: string[]) => (
                <div key={eachSector} className="flex items-center gap-x-2">
                  <div className="text-center justify-center text-grey-60 text-[10px] font-bold  uppercase leading-[10px]">
                    {eachSector}
                  </div>
                  {idx < arr.length - 1 && (
                    <span
                      className="inline-block w-[4px] h-[4px] rounded-full bg-grey-60 font-semibold uppercase leading-[10px]"
                      aria-hidden="true"
                    />
                  )}
                </div>
              )
            ) ?? []}
          </div>
          <div className="self-stretch inline-flex justify-start items-start gap-x-3 gap-y-1 flex-wrap content-start">
            {(details.fields.tags as unknown as string[])?.map(
              (tag: string) => (
                <div
                  key={tag}
                  className="justify-center text-grey-60 text-[10px] font-normal leading-3"
                >
                  {`[ ${tag} ]`}
                </div>
              )
            ) ?? []}
          </div>
        </div>

        <div
          className="flex items-center justify-center outline outline-1 rounded-full pr-5 pl-6 py-2 text-xs cursor-pointer hover:bg-black hover:text-white hover:outline-none"
          onClick={toggleShowDetails}
        >
          READ MORE
          <PlusIcon className="size-6 ml-2" />
        </div>
      </div>

      <div className="bg-white relative flex flex-col justify-between rounded-xl p-6 text-grey-90 font-medium h-full w-full [-webkit-backface-visibility:hidden] [transform:translateZ(0)]">
        <a href={details.fields.link.toString()} target="_blank">
          <ArrowTopRightOnSquareIcon className="size-6 absolute right-4 top-4 hover:text-turq" />
        </a>

        <div className="h-14 w-full">
          <img
            src={(details.fields.logoColour as any)?.fields?.file?.url}
            className="h-full w-auto object-contain mb-2"
            alt={`${details.fields.name.toString()} logo`}
          />
        </div>
        <h1 className="text-lg font-semibold my-2">
          {details.fields.name.toString()}
        </h1>
        <div className="overflow-y-auto no-scrollbar self-stretch justify-start text-neutral-600 text-sm font-normal leading-tight">
          <p className="text-sm font-normal">
            {details.fields.description.toString()}
          </p>
        </div>
        <div className="grow" />
        <div
          className="flex items-center justify-center outline outline-1 rounded-full pr-5 pl-6 mt-6 py-2 text-xs cursor-pointer hover:bg-black hover:text-white hover:outline-none"
          onClick={() => setSelected("")}
        >
          CLOSE
          <XMarkIcon className="size-6 ml-2" />
        </div>
      </div>
    </ReactCardFlip>
  );
}
