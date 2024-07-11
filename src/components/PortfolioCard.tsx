import { useState } from "react";
import {
  ArrowTopRightOnSquareIcon,
  PlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import Ena from "../assets/ena.png";
import ReactCardFlip from "react-card-flip";

export default function PortfolioCard() {
  const tags = ["SEED", "SERIES A", "SECONDARY MARKET"];

  const [showDetails, setShowDetails] = useState(false);
  const toggleShowDetails = () => {
    setShowDetails((prev) => !prev);
  };
  return (
    <ReactCardFlip
      isFlipped={showDetails}
      flipDirection="horizontal"
    >
      <div className="bg-white flex flex-col rounded-xl p-6 max-w-60 text-grey-90 font-medium">
        <img src={Ena.src} className="mb-4 w-1/3" />
        ETHENA
        <div className="flex-wrap mt-2">
          {tags.map((tag) => (
            <div className="inline-block outline outline-1 outline-grey-60 text-grey-60 text-xs m-1 py-1 px-2 rounded-full">
              {tag}
            </div>
          ))}
        </div>
        <div className="h-12" />
        <div
          className="flex items-center justify-center outline outline-1 rounded-full px-6 py-2 text-xs mt-8 cursor-pointer"
          onClick={toggleShowDetails}
        >
          READ MORE
          <PlusIcon className="size-4 ml-2" />
        </div>
      </div>
      <div className="bg-white flex flex-col rounded-xl p-6 max-w-60 text-grey-90 font-medium h-full">
        <a href="https://www.google.com" target="_blank">
          <ArrowTopRightOnSquareIcon className="size-6 absolute right-4 top-4" />
        </a>
        <img src={Ena.src} className="mb-2 w-1/4" />
        <h1 className="text-lg my-2">SEI</h1>
        <p className="text-sm font-normal">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus
          ultricies tellus. In consectetur orci ipsum, vitae facilisis nunc
          facilisis sit amet.
        </p>
        <div className="grow" />
        <div
          className="flex items-center justify-center outline outline-1 rounded-full px-6 py-2 text-xs mt-8 cursor-pointer"
          onClick={toggleShowDetails}
        >
          CLOSE
          <XMarkIcon className="size-4 ml-2" />
        </div>
      </div>
    </ReactCardFlip>
  );
}
