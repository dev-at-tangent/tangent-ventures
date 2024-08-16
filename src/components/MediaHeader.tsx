import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap/gsap-core";
import { DotLottiePlayer } from "@dotlottie/react-player";

import leftCloud from "../assets/lotties/about-right-cloud.lottie";
import rightCloud from "../assets/lotties/portfolio-cloud-bottom.lottie";

export default function MediaHeader() {
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
    <div>
      <h1 ref={titleRef} className="text-3xl sm:text-5xl font-medium">
        IN THE SPOTLIGHT
      </h1>
      <div className="absolute inset-0 overflow-x-hidden overflow-y-visible w-screen left-1/2 -translate-x-1/2 -z-10">
        <DotLottiePlayer
          src={leftCloud}
          autoplay
          loop
          className="absolute scale-50 desktop:scale-100 uhd:scale-150 top-16 -left-72 uhd:-left-48"
        />
        <DotLottiePlayer
          src={rightCloud}
          autoplay
          loop
          className="absolute scale-50 desktop:scale-100 uhd:scale-125 top-[10vh] -right-48 desktop:-right-24"
        />
      </div>
    </div>
  );
}
