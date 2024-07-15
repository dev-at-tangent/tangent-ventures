import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap/gsap-core";
import EndorsementCard from "./EndorsementCard";
import type { Entry } from "contentful";
import type { Endorsement } from "../pages/endorsements.astro";

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
        delay: 2,
        ease: "power2.out",
      });
    },
    { scope: ref }
  );
  return (
    <div ref={ref} className="grid grid-cols-2 gap-8 mt-20">
      {endorsements.map((endorsement) => (
        <EndorsementCard key={endorsement.sys.id} details={endorsement} />
      ))}
    </div>
  );
}
