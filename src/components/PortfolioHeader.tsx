import { useScramble } from "use-scramble";
import Lottie from "lottie-react";
import leftCloud from "../assets/lotties/portfolio-cloud-bottom.json";
import rightCloud from "../assets/lotties/endorsement-left-cloud.json";
export default function PortfolioHeader() {
  const { ref } = useScramble({
    text: "PORTFOLIO",
    speed: 0.4,
  });
  return (
    <div className="absolute overflow-hidden inset-0 w-screen left-1/2 -translate-x-1/2">
      <h1 ref={ref} className="text-3xl sm:text-5xl font-medium text-center" />
      <Lottie
        animationData={leftCloud}
        className="absolute scale-50 desktop:scale-100 uhd:scale-125 top-72 -left-48 desktop:-left-24 desktop:top-[60vh]"
      />
      <Lottie
        animationData={rightCloud}
        className="absolute scale-50 desktop:scale-100 uhd:scale-125 -top-10 -right-72 desktop:top-0 desktop:-right-48 uhd:top-10"
      />
    </div>
  );
}
