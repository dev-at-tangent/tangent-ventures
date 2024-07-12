import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrambleText from "./ScrambleText";

export default function StatCard({ delay = 0 }) {
  const cardRef = useRef(null);

  useGSAP(
    () => {
      gsap.from(cardRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        delay: delay,
        ease: "power3.out",
      });
    },
    { scope: cardRef }
  );

  return (
    <div
      ref={cardRef}
      className="bg-white/60 backdrop-blur-lg rounded-2xl p-8 hover:animate-fadeInUp"
    >
      <span className="text-lg"> since </span>
      <ScrambleText
        finalText="2018"
        className="text-4xl font-bold"
        duration={1}
        charsPerGroup={1}
        delay={delay}
      />
      <span className="text-grey-80">
        Our team helped establish the defining APAC investment funds behind the
        most important crypto protocols and applications since 2018.
      </span>
    </div>
  );
}
