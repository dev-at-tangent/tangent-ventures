import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import StatCard from "./StatCard";
import ScrambleText from "./ScrambleText";

import type { Entry } from "contentful";
import type { AboutStats } from "../pages/about.astro";
import Lottie from "lottie-react";
import leftCloud from "../assets/lotties/about-cloud-left.json";
import rightCloud from "../assets/lotties/about-cloud-right.json";
import spaceship from "../assets/lotties/spaceship.json";

export default function AboutSection({
  aboutStats,
}: {
  aboutStats: Entry<AboutStats>[];
}) {
  const ref = useRef(null);
  const lineRef = useRef(null);
  const titleRef = useRef(null);

  useGSAP(
    () => {
      gsap.from(titleRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0,
        ease: "power3.out",
      });
      gsap.from(ref.current, {
        opacity: 0,
        duration: 0.5,
        delay: 0.5,
        ease: "power2.out",
      });
      gsap.from(lineRef.current, {
        opacity: 0,
        duration: 0.5,
        delay: 1,
        ease: "power2.out",
      });
    },
    { scope: ref }
  );

  return (
    <div className="relative">
      {/* Cloud container */}
      <div className="absolute inset-0 overflow-hidden w-screen left-1/2 -translate-x-1/2">
        <Lottie
          animationData={leftCloud}
          className="absolute -left-96 desktop:-left-48 top-20 scale-50 desktop:top-10 desktop:scale-75 uhd:scale-125"
        />
        <Lottie
          animationData={rightCloud}
          className="absolute -right-72 desktop:-right-40 top-48 scale-50 desktop:scale-100 uhd:scale-125 z-20"
        />
        <Lottie
          animationData={spaceship}
          className="absolute scale-[0.25] lg:scale-50 uhd:scale-75 -right-80 top-80 desktop:-right-80 desktop:-top-32 z-30"
        />
      </div>

      {/* Main content */}
      <div className="flex flex-col items-center relative z-10">
        <div className="md:w-1/2 gap-y-6 text-center flex flex-col items-center">
          <h1 ref={titleRef} className="text-3xl md:text-5xl font-medium">
            THE CRYPTO-NATIVE INVESTORS YOU WANT IN YOUR CORNER
          </h1>
          <span ref={ref} className="text-grey-80">
            Tangent is an evergreen angel fund uniquely built for founders in
            crypto
          </span>
        </div>
        <div className="grid md:grid-cols-3 gap-10 w-full mt-12">
          {aboutStats.map((stat, idx) => (
            <StatCard key={stat.sys.id} details={stat} delay={1 + idx} />
          ))}
        </div>

        <hr ref={lineRef} className="w-full mt-16 border-grey-40" />
      </div>
    </div>
  );
}
