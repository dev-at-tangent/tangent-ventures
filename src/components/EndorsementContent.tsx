import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap/gsap-core";
import EndorsementCard from "./EndorsementCard";
import type { Entry } from "contentful";
import type { Endorsement } from "../pages/endorsements.astro";
import leftCloud from "../assets/lotties/endorsement-left-cloud.json";
import Lottie from "lottie-react";

export default function EndorsementContent({
  endorsements,
}: {
  endorsements: Entry<Endorsement>[];
}) {
  const ref = useRef(null);
  useGSAP(
    () => {
      gsap.from(ref.current, {
        opacity: 0,
        duration: 0.5,
        delay: 1,
        ease: "power2.out",
      });
    },
    { scope: ref }
  );
  return (
    <>
      <Lottie animationData={leftCloud} className="absolute top-1/3 sm:top-1/4 -left-72 scale-75 sm:scale-100 sm:-left-32" />
      <div ref={ref} className="grid desktop:grid-cols-2 gap-8 mt-12 z-10 sm:mt-20">
        {endorsements.map((endorsement) => (
          <EndorsementCard key={endorsement.sys.id} details={endorsement} />
        ))}
      </div>
    </>
  );
}
