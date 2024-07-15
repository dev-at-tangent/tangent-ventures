import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import StatCard from "./StatCard";
import ScrambleText from "./ScrambleText";

export default function AboutSection() {
  const ref = useRef(null);
  const lineRef = useRef(null);

  useGSAP(
    () => {
      gsap.from(ref.current, {
        opacity: 0,
        duration: 0.5,
        delay: 2,
        ease: "power2.out",
      });
      gsap.from(lineRef.current, {
        opacity: 0,
        duration: 0.5,
        delay: 4,
        ease: "power2.out",
      });
    },
    { scope: ref }
  );

  return (
    <div className="flex flex-col items-center">
      <div className="w-1/2 gap-y-6 text-center flex flex-col items-center">
        <span className="text-turq font-semibold">ABOUT US</span>
        <ScrambleText
          finalText="THE CRYPTO-NATIVE INVESTORS YOU WANT IN YOUR CORNER"
          className="text-5xl font-medium"
          charsPerGroup={5}
        />
        <span ref={ref} className="text-grey-80">
          Tangent is an evergreen angel fund uniquely built for founders in
          crypto
        </span>
      </div>
      <div className="grid grid-cols-3 gap-x-10 w-full  mt-12">
        <StatCard delay={2} />
        <StatCard delay={3} />
        <StatCard delay={4} />
      </div>
      <hr ref={lineRef} className="w-full mt-16 border-grey-40" />
    </div>
  );
}
