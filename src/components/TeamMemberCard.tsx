import React, { useState } from "react";
import PFP from "../assets/pfp.png";
import XIcon from "../assets/XIcon";
import { PlusIcon, XMarkIcon } from "@heroicons/react/24/solid";
import ReactCardFlip from "react-card-flip";
import type { Entry, Asset } from "contentful";
import type { TeamMember } from "../pages/about.astro";

const TeamMemberCard = ({
  details,
  isHighlighted,
}: {
  details: Entry<TeamMember>;
  isHighlighted: Boolean;
}) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleShowDetails = () => {
    setShowDetails((prev) => !prev);
  };
  return (
    <div className="max-w-sm h-full">
      <ReactCardFlip
        isFlipped={showDetails}
        flipDirection="horizontal"
        containerClassName="h-full"
      >
        <div className="p-4 bg-turq rounded-xl flex flex-col h-full">
          <img
            src={(
              details.fields.pfp as unknown as Asset
            )?.fields?.file?.url?.toString()}
          />
          <span className="my-2">{details.fields.title.toString()}</span>
          <h1 className="text-3xl font-semibold mb-8">
            {details.fields.name.toString()}
          </h1>
          <div className="flex items-center">
            <a href={details.fields.twitterLink.toString()} target="_blank">
              <XIcon />
            </a>
            <div className="grow" />
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
          <p
            className={`text-grey-80 whitespace-pre-wrap  ${
              !isHighlighted && "text-sm"
            }`}
          >
            {details.fields.bio.toString()}
          </p>
          <div className="grow bg-red-400" />
          <span className="my-2">{details.fields.title.toString()}</span>
          <h1 className="text-3xl font-semibold mb-8">
            {details.fields.name.toString()}
          </h1>
          <div className="flex items-center">
            <a href={details.fields.twitterLink.toString()} target="_blank">
              <XIcon />
            </a>
            <div className="grow" />
            <div
              className="flex outline outline-1 rounded-full px-4 py-1 text-xs items-center cursor-pointer transition-colors duration-500 hover:bg-black hover:text-white hover:outline-none"
              onClick={toggleShowDetails}
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
