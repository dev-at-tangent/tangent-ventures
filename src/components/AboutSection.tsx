import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import StatCard from "./StatCard";
import ScrambleText from "./ScrambleText";
import type { Entry } from "contentful";
import type { AboutStats } from "../pages/about.astro";

export default function AboutSection({
  aboutStats,
}: {
  aboutStats: Entry<AboutStats>[];
}) {
  const ref = useRef(null);
  const lineRef = useRef(null);

  useGSAP(
    () => {
      gsap.from(ref.current, {
        opacity: 0,
        duration: 0.5,
        delay: 2,
        ease: "power2.out",
      });
      gsap.from(lineRef.current, {
        opacity: 0,
        duration: 0.5,
        delay: 4,
        ease: "power2.out",
      });
    },
    { scope: ref }
  );

  return (
    <div className="flex flex-col items-center">
      <div className="md:w-1/2 gap-y-6 text-center flex flex-col items-center">
        
        <ScrambleText
          finalText="THE CRYPTO-NATIVE INVESTORS YOU WANT IN YOUR CORNER"
          className="text-3xl md:text-5xl font-medium"
          charsPerGroup={5}
        />
        <span ref={ref} className="text-grey-80">
          Tangent is an evergreen angel fund uniquely built for founders in
          crypto
        </span>
      </div>
      <div className="grid md:grid-cols-3 gap-10 w-full  mt-12">
        {aboutStats.map((stat, idx) => (
          <StatCard key={stat.sys.id} details={stat} delay={2 + idx} />
        ))}
      </div>
      <hr ref={lineRef} className="w-full mt-16 border-grey-40" />
    </div>
  );
}
