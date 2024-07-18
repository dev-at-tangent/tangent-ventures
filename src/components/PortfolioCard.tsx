import {
  ArrowTopRightOnSquareIcon,
  PlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import ReactCardFlip from "react-card-flip";
import type { Entry } from "contentful";
import type { PortfolioItem } from "../pages/portfolio.astro";
import { useScramble } from "use-scramble";

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
      containerClassName="h-[350px] w-[80vw] desktop:w-[20vw] max-w-72 drop-shadow-md "
    >
      <div
        className="bg-white/60 backdrop-blur-sm rounded-xl flex flex-col p-6  text-grey-90 font-medium h-full w-full group hover:bg-white "
        onMouseOver={replay}
      >
        <img
          src={(details.fields.logo as any)?.fields?.file?.url}
          className="hidden desktop:block mb-4 w-1/3 rounded-md group-hover:hidden"
        />
        <img
          src={(details.fields.logoColour as any)?.fields?.file?.url}
          className="mb-4 w-1/3 desktop:hidden rounded-md group-hover:block"
        />
        <span ref={ref} className="hidden desktop:flex" />
        <span className="font-semibold text-lg desktop:hidden">
          {details.fields.name.toString()}
        </span>
        <div className="flex-wrap mt-2">
          {(details.fields.tags as unknown as string[])?.map((tag: string) => (
            <div
              key={tag}
              className="inline-block outline outline-1 outline-grey-60 text-grey-60 text-xs m-1 py-1 px-2 rounded-full"
            >
              {tag}
            </div>
          )) ?? []}
        </div>
        <div className="grow" />
        <div
          className="flex items-center justify-center outline outline-1 rounded-full px-6 py-2 text-xs mt-8 cursor-pointer hover:bg-black hover:text-white hover:outline-none"
          onClick={toggleShowDetails}
        >
          READ MORE
          <PlusIcon className="size-4 ml-2" />
        </div>
      </div>
      <div className="bg-white flex flex-col rounded-xl p-6 text-grey-90 font-medium h-full w-full">
        <a href="https://www.google.com" target="_blank">
          <ArrowTopRightOnSquareIcon className="size-6 absolute right-4 top-4 hover:text-turq" />
        </a>

        <img
          src={(details.fields.logoColour as any)?.fields?.file?.url}
          className="mb-2 w-1/4 rounded-md"
        />
        <h1 className="text-lg font-semibold my-2">
          {details.fields.name.toString()}
        </h1>
        <p className="text-sm font-normal">
          {details.fields.description.toString()}
        </p>
        <div className="grow" />
        <div
          className="flex items-center justify-center outline outline-1 rounded-full px-6 py-2 text-xs mt-8 cursor-pointer hover:bg-black hover:text-white  hover:outline-none"
          onClick={() => setSelected("")}
        >
          CLOSE
          <XMarkIcon className="size-4 ml-2" />
        </div>
      </div>
    </ReactCardFlip>
  );
}
