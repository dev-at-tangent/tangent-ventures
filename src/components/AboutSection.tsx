import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import StatCard from "./StatCard";

import type { Entry } from "contentful";
import type { AboutStats } from "../pages/about.astro";

import { DotLottiePlayer } from "@dotlottie/react-player";

import leftCloud from "../assets/lotties/about-cloud-left.lottie";
import rightCloud from "../assets/lotties/about-right-cloud.lottie";
import spaceship from "../assets/lotties/delorean.lottie";

export default function AboutSection({
  aboutStats,
}: {
  aboutStats: Entry<AboutStats>[];
}) {
  const ref = useRef(null);
  const lineRef = useRef(null);
  const titleRef = useRef(null);
  const firstTitleRef = useRef(null);
  const cardRef = useRef(null);

  useGSAP(
    () => {
      gsap.from(firstTitleRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0,
        ease: "power3.out",
      });
      gsap.from(cardRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.5,
        ease: "power3.out",
      });
      gsap.from(titleRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 1,
        ease: "power3.out",
      });
      gsap.from(ref.current, {
        opacity: 0,
        duration: 0.5,
        delay: 1.5,
        ease: "power2.out",
      });
      // gsap.from(lineRef.current, {
      //   opacity: 0,
      //   duration: 0.5,
      //   delay: 2,
      //   ease: "power2.out",
      // });
    },
    { scope: ref }
  );

  return (
    <div className="relative">
      {/* Cloud container */}
      <div className="absolute inset-0 overflow-hidden w-screen left-1/2 -translate-x-1/2">
        <DotLottiePlayer
          src={leftCloud}
          autoplay
          loop
          className="absolute -left-96 desktop:-left-48 top-20 scale-50 desktop:top-10 desktop:scale-75 uhd:scale-125"
        />
        <DotLottiePlayer
          src={rightCloud}
          autoplay
          loop
          className="absolute -right-72 desktop:-right-40 top-48 scale-50 desktop:scale-100 uhd:scale-125 z-20"
        />
        <DotLottiePlayer
          src={spaceship}
          autoplay
          loop
          className="absolute scale-[0.25] lg:scale-50 uhd:scale-75 -right-80 -top-20 desktop:-top-32 uhd:-right-[10%] z-30"
        />
      </div>

      {/* Main content */}
      <div className="flex flex-col items-center relative z-10">
        <div className="w-full flex flex-col items-center">
          <h1
            ref={firstTitleRef}
            className="md:w-1/2 text-3xl md:text-5xl font-medium text-center"
          >
            WE PROVIDE HANDS-ON SUPPORT TO 20 FOUNDERS A YEAR
          </h1>
          <div
            ref={cardRef}
            className="flex flex-col md:flex-row gap-8 mt-8 mb-24 w-full md:w-3/5"
          >
            <div className="bg-white/30 backdrop-blur-sm rounded-2xl p-8 flex flex-col text-center md:w-1/2">
              Mentorship and network from
              <h1 className="text-2xl md:text-4xl font-medium">
                INDUSTRY VETS
              </h1>
            </div>
            <div className="bg-white/30 backdrop-blur-sm rounded-2xl p-8 flex flex-col text-center md:w-1/2">
              Standard check size of
              <h1 className="text-2xl md:text-4xl font-medium">$250,000</h1>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 gap-y-6 text-center flex flex-col items-center">
          <h1 ref={titleRef} className="text-3xl md:text-5xl font-medium">
            WHO WE ARE
          </h1>
          {/* <span ref={ref} className="text-grey-80">
            Evergreen prop investors for crypto founders.
          </span> */}
        </div>
        <div className="grid md:grid-cols-3 gap-10 w-full mt-12">
          {aboutStats.map((stat, idx) => (
            <StatCard key={stat.sys.id} details={stat} delay={1.5 + idx} />
          ))}
        </div>

        {/* <hr ref={lineRef} className="w-full mt-16 border-grey-40" /> */}
      </div>
    </div>
  );
}
