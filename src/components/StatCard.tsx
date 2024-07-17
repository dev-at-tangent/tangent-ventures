import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrambleText from "./ScrambleText";
import type { Entry } from "contentful";
import type { AboutStats } from "../pages/about.astro";

export default function StatCard({
  delay = 0,
  details,
}: {
  delay: number;
  details: Entry<AboutStats>;
}) {
  const cardRef = useRef(null);

  useGSAP(
    () => {
      gsap.from(cardRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        delay: delay,
        ease: "power3.out",
      });
    },
    { scope: cardRef }
  );

  return (
    <div
      ref={cardRef}
      className="bg-white/30 backdrop-blur-sm rounded-2xl p-8 flex flex-col min-h-[30vh] uhd:min-h-[20vh]"
    >
      <span className="text-lg"> {details.fields.descriptor.toString()} </span>
      <ScrambleText
        finalText={details.fields.statistic.toString()}
        className="text-4xl font-bold"
        duration={1}
        charsPerGroup={1}
        delay={delay}
      />
      <span className="text-grey-80 mt-4">
        {details.fields.description.toString()}
      </span>
    </div>
  );
}
