import React, { useState } from "react";
import PFP from "../assets/pfp.png";
import XIcon from "../assets/XIcon";
import { PlusIcon, XMarkIcon } from "@heroicons/react/24/solid";

const TeamMemberCard = ({ isHighlighted }: { isHighlighted: Boolean }) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleShowDetails = () => {
    setShowDetails((prev) => !prev);
  };

  return (
    <div className="max-w-sm h-full">
      {!showDetails ? (
        <div className="p-4 bg-turq rounded-xl flex flex-col">
          <img src={PFP.src} className="" />
          <span className="my-2">Co-Founder</span>
          <h1 className="text-3xl font-semibold mb-8">JASON CHOI</h1>
          <div className="flex items-center">
            <XIcon />
            <div className="grow" />
            <div
              className="flex outline outline-1 rounded-full px-4 py-1 text-xs items-center cursor-pointer"
              onClick={toggleShowDetails}
            >
              READ BIO
              <PlusIcon className="size-6 ml-2" />
            </div>
          </div>
        </div>
      ) : (
        <div className="p-4 bg-white rounded-xl flex flex-col h-full">
          <p className={`text-grey-80 ${!isHighlighted && "text-sm"}`}>
            Darryl helped build Southeast Asia's largest crypto fund from its
            early days as Principal at DeFiance Capital. Darryl spent his early
            life building a career in reputable tradfi institutions before
            seeing the light and dedicating all his efforts in crypto. <br />
            <br /> Darryl is a lifelong investor across multiple asset classes
            and holds a Bachelors from the London School of Economics. <br />
            <br /> His unique insights are crucial in helping founders navigate
            the challenges in crypto's 24/7 markets.
          </p>
          <div className="grow" />
          <span className="my-2">Co-Founder</span>
          <h1 className="text-3xl font-semibold mb-8">JASON CHOI</h1>
          <div className="flex items-center">
            <XIcon />
            <div className="grow" />
            <div
              className="flex outline outline-1 rounded-full px-4 py-1 text-xs items-center cursor-pointer"
              onClick={toggleShowDetails}
            >
              CLOSE BIO
              <XMarkIcon className="size-6 ml-2" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TeamMemberCard;
