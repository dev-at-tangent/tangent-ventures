import React, { useState } from "react";

import XIcon from "../assets/XIcon";
import { PlusIcon, XMarkIcon } from "@heroicons/react/24/solid";
import ReactCardFlip from "react-card-flip";
import type { Entry, Asset } from "contentful";
import type { TeamMember } from "../pages/about.astro";

const TeamMemberCard = ({
  details,
  isHighlighted,
  selected,
  setSelected,
}: {
  details: Entry<TeamMember>;
  isHighlighted: Boolean;
  selected: string;
  setSelected: (selected: string) => void;
}) => {
  // const [showDetails, setShowDetails] = useState(false);

  const toggleShowDetails = () => {
    setSelected(details.fields.name.toString());
  };

  return (
    <div
      className={` ${
        isHighlighted ? "h-[500px] w-80 lg:w-96 lg:h-[550px]" : "w-80 h-[475px]"
      }`}
    >
      <ReactCardFlip
        isFlipped={selected === details.fields.name.toString()}
        flipDirection="horizontal"
        containerClassName="h-full drop-shadow-lg"
      >
        <div className="p-4 bg-turq rounded-xl flex flex-col h-full">
          <img
            src={(
              details.fields.pfp as unknown as Asset
            )?.fields?.file?.url?.toString()}
          />
          <div className="grow" />
          <span className={`my-2 ${isHighlighted && "text-lg"}`}>
            {details.fields.title.toString()}
          </span>
          <h1
            className={`font-semibold mb-8 text-2xl ${
              isHighlighted && "text-3xl"
            }`}
          >
            {details.fields.name.toString()}
          </h1>
          <div className="flex items-center">
            {details.fields.twitterLink !== "NA" && (
              <a href={details.fields.twitterLink.toString()} target="_blank">
                <XIcon className="w-6" />
              </a>
            )}
            <div className="grow " />
            <div
              className="flex outline outline-1 rounded-full px-4 py-1 text-xs items-center cursor-pointer transition-colors duration-500 hover:bg-black hover:text-white hover:outline-none"
              onClick={toggleShowDetails}
            >
              READ BIO
              <PlusIcon className="size-6 ml-2" />
            </div>
          </div>
        </div>
        <div className="p-4 bg-white rounded-xl flex flex-col h-full">
          <p className={`text-grey-80 text-sm whitespace-pre-wrap`}>
            {details.fields.bio.toString()}
          </p>
          <div className="grow" />
          <span className={`my-2 ${isHighlighted && "text-lg"}`}>
            {details.fields.title.toString()}
          </span>

          <h1
            className={`font-semibold mb-8 text-2xl ${
              isHighlighted && "text-3xl"
            }`}
          >
            {details.fields.name.toString()}
          </h1>

          <div className="flex items-center">
            <a href={details.fields.twitterLink.toString()} target="_blank">
              <XIcon />
            </a>
            <div className="grow" />
            <div
              className="flex outline outline-1 rounded-full px-4 py-1 text-xs items-center cursor-pointer transition-colors duration-500 hover:bg-black hover:text-white hover:outline-none"
              onClick={() => setSelected("")}
            >
              CLOSE BIO
              <XMarkIcon className="size-6 ml-2" />
            </div>
          </div>
        </div>
      </ReactCardFlip>
    </div>
  );
};

export default TeamMemberCard;
