import { DotLottiePlayer } from "@dotlottie/react-player";

import leftCloud from "../assets/lotties/endorsement-left-cloud.lottie";
import bottomLeftCloud from "../assets/lotties/endorsement-bottom-left-cloud.lottie";

import rightCloud from "../assets/lotties/about-right-cloud.lottie";
import bottomRightCloud from "../assets/lotties/about-cloud-left.lottie";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap/gsap-core";
import { useRef } from "react";

export default function EndorsementHeader() {
  const titleRef = useRef(null);
  useGSAP(() => {
    gsap.from(titleRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      delay: 0,
      ease: "power3.out",
    });
  });
  return (
    <div className="absolute overflow-hidden inset-0 w-screen left-1/2 -translate-x-1/2 flex justify-center">
      <h1
        ref={titleRef}
        className="text-3xl sm:text-5xl text-center w-4/5 sm:w-full"
      >
        DON'T TAKE OUR WORD FOR IT. <br className="hidden sm:block" /> TAKE
        THEIRS.
      </h1>
      <DotLottiePlayer
        src={leftCloud}
        autoplay
        loop
        className="absolute scale-50 desktop:scale-75 uhd:scale-125 top-12 -left-72 desktop:top-0 uhd:top-10 -z-10"
      />
      <DotLottiePlayer
        autoplay
        loop
        src={rightCloud}
        className="absolute scale-[0.4] desktop:scale-75 uhd:scale-125 -right-72 top-10 desktop:-right-48  -z-10"
      />
      <DotLottiePlayer
        autoplay
        loop
        src={bottomLeftCloud}
        className="absolute uhd:scale-125 -left-36 bottom-10 desktop:-left-20 -z-10"
      />
      <DotLottiePlayer
        autoplay
        loop
        src={bottomRightCloud}
        className="absolute desktop:scale-75 uhd:scale-125 -right-40 bottom-[80vh] desktop:-right-48  -z-10"
      />
    </div>
  );
}
