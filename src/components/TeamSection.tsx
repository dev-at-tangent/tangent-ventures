import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

import ScrambleText from "./ScrambleText";
import TeamMemberCard from "./TeamMemberCard";

export default function TeamSection() {
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
      <ScrambleText finalText="MEET OUR TEAM" className="text-5xl font-medium mt-16" delay={5} duration={1} />
      
      <div ref={ref} className="flex flex-col items-center gap-y-12">
        <span className="w-2/5 text-center text-grey-80">
          We are a collective of experienced operators and founders behind some
          of the largest projects and protocols in Web3.
        </span>
        <div className="grid grid-cols-2 gap-12">
          <TeamMemberCard isHighlighted={true} />
          <TeamMemberCard isHighlighted={true} />
        </div>
        <div className="grid grid-cols-3 gap-12 w-11/12 ">
          <TeamMemberCard isHighlighted={false} />
          <TeamMemberCard isHighlighted={false} />
          <TeamMemberCard isHighlighted={false} />
          <TeamMemberCard isHighlighted={false} />
        </div>
      </div>
    </div>
  );
}
