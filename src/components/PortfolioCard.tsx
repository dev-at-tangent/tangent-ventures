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
  return (
    <ReactCardFlip
      isFlipped={selected === details.fields.name.toString()}
      flipDirection="horizontal"
      containerClassName="h-[350px] w-[80vw] desktop:w-[20vw] max-w-72 drop-shadow-md backdrop-blur-sm"
    >
      <div
        className="bg-[rgba(255,255,255,0.6)] rounded-[20px] flex flex-col justify-between p-8 text-grey-90 font-medium h-full w-full group desktop:hover:bg-white"
        onMouseOver={replay}
      >
        <div className="flex flex-col">
          <img
            src={(details.fields.logo as any)?.fields?.file?.url}
            className="hidden desktop:block w-1/3 rounded-md group-hover:hidden"
          />
          <img
            src={(details.fields.logoColour as any)?.fields?.file?.url}
            className="w-1/3 desktop:hidden rounded-md group-hover:block"
          />
          <div className="flex-wrap gap-2 flex">
            {(details.fields.categories as unknown as string[])?.map(
              (category: string) => (
                <div
                  key={category}
                  className="inline-block outline outline-1 outline-grey-60 py-2 px-3 rounded-full text-[#9A9A9A] text-xs font-semibold font-['Inter'] uppercase leading-3"
                >
                  {category.toUpperCase()}
                </div>
              )
            ) ?? []}
          </div>
          <span ref={ref} className="hidden desktop:flex" />

          <span className="font-semibold text-lg desktop:hidden">
            {details.fields.name.toString().toUpperCase()}
          </span>

          <div className="self-stretch inline-flex justify-start items-start gap-x-2 gap-y-1 flex-wrap content-start">
            {(details.fields.sector as unknown as string[])?.map(
              (eachSector: string, idx: number, arr: string[]) => (
                <div key={eachSector} className="flex items-center gap-x-2">
                  <div className="text-center justify-center text-[#9A9A9A] text-[10px] font-bold font-['Inter'] uppercase leading-[10px]">
                    {eachSector.toUpperCase()}
                  </div>
                  {idx < arr.length - 1 && (
                    <span
                      className="inline-block w-[4px] h-[4px] rounded-full bg-[#9A9A9A] font-semibold font-['Inter'] uppercase leading-[10px]"
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
                  className="justify-center text-[#9A9A9A] text-[10px] font-normal font-['Inter'] leading-3"
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
      <div className="bg-white flex flex-col rounded-xl p-6 text-grey-90 font-medium h-full w-full ">
        <a href={details.fields.link.toString()} target="_blank">
          <ArrowTopRightOnSquareIcon className="size-6 absolute right-4 top-4 hover:text-turq" />
        </a>

        <img
          src={(details.fields.logoColour as any)?.fields?.file?.url}
          className=" w-1/4 rounded-md"
        />
        <h1 className="text-lg font-semibold my-2">
          {details.fields.name.toString()}
        </h1>
        <div className="overflow-y-auto no-scrollbar  self-stretch justify-start text-neutral-600 text-sm font-normal font-['Inter'] leading-tight">
          <p className="text-sm font-normal">
            {details.fields.description.toString()}
          </p>
        </div>
        <div className="grow" />
        <div
          className="flex items-center justify-center outline outline-1 rounded-full px-6 py-2 text-xs mt-8 cursor-pointer hover:bg-black hover:text-white  hover:outline-none"
          onClick={() => setSelected("")}
        >
          CLOSE
          <XMarkIcon className="size-6 ml-2" />
        </div>
      </div>
    </ReactCardFlip>
  );
}
