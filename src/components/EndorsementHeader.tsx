import Lottie from "lottie-react";
import leftCloud from "../assets/lotties/endorsement-left-cloud.json";
import rightCloud from "../assets/lotties/about-cloud-right.json";
import bottomLeftCloud from "../assets/lotties/endorsement-bottom-left-cloud.json";
import bottomRightCloud from "../assets/lotties/about-cloud-left.json";
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
    <div className="absolute overflow-hidden inset-0 w-screen left-1/2 -translate-x-1/2">
      <h1 ref={titleRef} className="text-3xl sm:text-5xl text-center">
        DON'T TAKE OUR WORD FOR IT. <br /> TAKE THEIRS.
      </h1>
      <Lottie
        animationData={leftCloud}
        className="absolute scale-50 desktop:scale-75 uhd:scale-125 top-12 -left-72 desktop:top-0 uhd:top-10 -z-10"
      />
      <Lottie
        animationData={rightCloud}
        className="absolute scale-[0.4] desktop:scale-75 uhd:scale-125 -right-72 top-10 desktop:-right-48  -z-10"
      />
      <Lottie
        animationData={bottomLeftCloud}
        className="absolute uhd:scale-125 -left-36 bottom-10 desktop:-left-20 -z-10"
      />
      <Lottie
        animationData={bottomRightCloud}
        className="absolute desktop:scale-75 uhd:scale-125 -right-40 bottom-[80vh] desktop:-right-48  -z-10"
      />
    </div>
  );
}
