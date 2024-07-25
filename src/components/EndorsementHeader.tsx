import { useScramble } from "use-scramble";

import Lottie from "lottie-react";
import leftCloud from "../assets/lotties/endorsement-left-cloud.json";
import rightCloud from "../assets/lotties/about-cloud-right.json";
import bottomLeftCloud from "../assets/lotties/endorsement-bottom-left-cloud.json";
import bottomRightCloud from "../assets/lotties/about-cloud-left.json";
import Typewriter from "./Typewriter";

export default function EndorsementHeader() {
  const { ref } = useScramble({
    text: "DON'T TAKE OUR WORD FOR IT. \n TAKE THEIRS.",
  });
  return (
    <div className="absolute overflow-hidden inset-0 w-screen left-1/2 -translate-x-1/2">
      {/* <h1
        ref={ref}
        className="whitespace-pre-wrap text-3xl sm:text-5xl font-medium text-center z-20"
      /> */}
      <Typewriter
        text={`DON'T TAKE OUR WORD FOR IT. \n TAKE THEIRS.`}
        duration={50}
        className="whitespace-pre-wrap text-3xl sm:text-5xl font-medium text-center z-20"
      />
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
