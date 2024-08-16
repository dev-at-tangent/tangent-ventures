import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap/gsap-core";
import { DotLottiePlayer } from "@dotlottie/react-player";

import data from "../assets/lotties/thesis-holo.lottie";
import mobiledata from "../assets/lotties/thesis-holo-mobile.lottie";
import cloud from "../assets/lotties/thesis-cloud.lottie";

import type { Entry } from "contentful";
import type { ThesisHeaderContent } from "../pages/thesis.astro";
import "../styles/custom.css";

export default function ThesisHeader({
  content,
}: {
  content: Entry<ThesisHeaderContent>;
}) {
  const ref = useRef(null);

  useGSAP(
    () => {
      gsap.from(ref.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0,
        ease: "power3.out",
      });
    },
    { scope: ref }
  );

  return (
    <div
  ref={ref}
  className="flex items-center justify-center relative w-full"
>
  <DotLottiePlayer src={data} autoplay loop className="hidden lg:flex" />
  <div className="absolute z-10 top-[80%] lg:top-[60%] right-0 lg:-right-24 overflow-hidden w-2/3 lg:w-2/5 -mx-6">
    <DotLottiePlayer
      src={cloud}
      autoplay
      loop
      className="transform translate-x-12 lg:translate-x-0 w-full"
    />
  </div>
  <DotLottiePlayer
    src={mobiledata}
    autoplay
    loop
    className="-mx-6 lg:hidden"
  />
  <div className="absolute top-0 flex flex-col sm:items-center justify-evenly w-full h-full py-8">
    <h1 className="text-3xl sm:text-5xl glitch-text">THESIS</h1>
    <p className="text-sm md:text-base uhd:text-xl text-center mx-8 sm:w-1/2 z-10 text-grey-80 font-semibold">
      {content.fields.content.toString()}
    </p>
  </div>
</div>
  );
}
