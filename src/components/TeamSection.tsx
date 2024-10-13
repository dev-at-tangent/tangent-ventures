import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import unknown from "../assets/unknown.webp";
import { PlusIcon } from "@heroicons/react/24/solid";
import ScrambleText from "./ScrambleText";
import TeamMemberCard from "./TeamMemberCard";
import type { TeamMember } from "../pages/about.astro";
import type { Entry } from "contentful";

export default function TeamSection({
  highlightedMembers,
  members,
}: {
  highlightedMembers: Entry<TeamMember>[];
  members: Entry<TeamMember>[];
}) {
  const ref = useRef(null);
  const [selected, setSelected] = useState("");

  useGSAP(
    () => {
      gsap.from(ref.current, {
        opacity: 0,
        duration: 0.5,
        delay: 4,
        ease: "power2.out",
      });
    },
    { scope: ref }
  );

  return (
    <div ref={ref} className="flex flex-col items-center gap-y-12 mt-12">
      {/* <ScrambleText
        finalText="WHO WE ARE"
        className="text-3xl md:text-5xl font-medium mt-16"
        delay={3}
        duration={1.5}
        charsPerGroup={5}
      /> */}

      <div className="flex flex-col items-center gap-y-12">
        {/* <span className="md:w-3/5 text-center text-grey-80">
          We are a collective of experienced operators and founders behind some
          of the largest projects and protocols in Web3.
        </span> */}
        <div className="grid lg:grid-cols-2 gap-12">
          {highlightedMembers.map((member) => (
            <TeamMemberCard
              key={member.sys.id}
              isHighlighted={true}
              details={member}
              selected={selected}
              setSelected={setSelected}
            />
          ))}
        </div>
        <div className="grid lg:grid-cols-3 gap-12  ">
          {members.map((member) => (
            <TeamMemberCard
              key={member.sys.id}
              isHighlighted={false}
              details={member}
              selected={selected}
              setSelected={setSelected}
            />
          ))}
          <div className="p-4 bg-turq rounded-xl flex flex-col w-80 drop-shadow-lg">
            <img src={unknown.src} />
            <h1 className={`font-semibold mb-8 text-2xl mt-12`}>THIS COULD BE YOU</h1>
            <a
              href="/contact"
              className="flex outline outline-1 rounded-full px-4 py-1 text-xs items-center cursor-pointer transition-colors duration-500 hover:bg-black hover:text-white hover:outline-none self-end"
            >
              CONTACT
              <PlusIcon className="size-6 ml-2" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
