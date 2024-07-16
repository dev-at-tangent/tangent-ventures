import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

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

  useGSAP(
    () => {
      gsap.from(ref.current, {
        opacity: 0,
        duration: 0.5,
        delay: 6,
        ease: "power2.out",
      });
    },
    { scope: ref }
  );

  return (
    <div className="flex flex-col items-center gap-y-12">
      <ScrambleText
        finalText="MEET OUR TEAM"
        className="text-3xl md:text-5xl font-medium mt-16"
        delay={5}
        duration={1}
        charsPerGroup={5}
      />

      <div className="flex flex-col items-center gap-y-12">
        <span className="md:w-2/5 text-center text-grey-80">
          We are a collective of experienced operators and founders behind some
          of the largest projects and protocols in Web3.
        </span>
        <div className="grid desktop:grid-cols-2 gap-12">
          {highlightedMembers.map((member) => (
            <TeamMemberCard key={member.sys.id} isHighlighted={true} details={member} />
          ))}
        </div>
        <div className="grid desktop:grid-cols-3 gap-12 desktop:w-11/12 ">
          {members.map((member) => (
            <TeamMemberCard key={member.sys.id} isHighlighted={false} details={member} />
          ))}
        </div>
      </div>
    </div>
  );
}
