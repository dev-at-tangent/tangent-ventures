import { useGSAP } from "@gsap/react";
import { gsap } from "gsap/gsap-core";
import { useRef } from "react";
import { DotLottiePlayer } from "@dotlottie/react-player";

import leftCloud from "../assets/lotties/portfolio-cloud-bottom.lottie";
import rightCloud from "../assets/lotties/endorsement-left-cloud.lottie";
export default function PortfolioHeader() {
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
    <div className="absolute overflow-hidden inset-0 w-screen left-1/2 -translate-x-1/2">
      <h1
        ref={titleRef}
        className="text-3xl sm:text-5xl font-medium text-center"
      >
        VENTURE PORTFOLIO
      </h1>
      <DotLottiePlayer
        src={leftCloud}
        autoplay
        loop
        className="absolute scale-50 desktop:scale-100 uhd:scale-125 top-72 -left-48 desktop:-left-24 desktop:top-[60vh]"
      />
      <DotLottiePlayer
        src={rightCloud}
        autoplay
        loop
        className="absolute scale-50 desktop:scale-100 uhd:scale-125 -top-10 -right-72 desktop:top-0 desktop:-right-48 uhd:top-10 -z-10"
      />
    </div>
  );
}
