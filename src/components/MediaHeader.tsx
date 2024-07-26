import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap/gsap-core";
import Lottie from "lottie-react";
import leftCloud from "../assets/lotties/about-cloud-right.json";
import rightCloud from "../assets/lotties/portfolio-cloud-bottom.json";

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
        MEDIA
      </h1>
      <div className="absolute inset-0 overflow-x-hidden overflow-y-visible w-screen left-1/2 -translate-x-1/2 -z-10">
        <Lottie
          animationData={leftCloud}
          className="absolute scale-50 desktop:scale-100 uhd:scale-150 top-16 -left-72 uhd:-left-48"
        />
        <Lottie
          animationData={rightCloud}
          className="absolute scale-50 desktop:scale-100 uhd:scale-125 top-[10vh] -right-48 desktop:-right-24"
        />
      </div>
    </div>
  );
}
