import { useScramble } from "use-scramble";
import Lottie from "lottie-react";
import leftCloud from "../assets/lotties/about-cloud-right.json";
import rightCloud from "../assets/lotties/portfolio-cloud-bottom.json";

export default function MediaHeader() {
  const { ref } = useScramble({
    text: "MEDIA",
  });

  return (
    <div>
      <h1 ref={ref} className="text-3xl sm:text-5xl font-medium" />
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
