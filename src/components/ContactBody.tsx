import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap/gsap-core";

import XIcon from "../assets/XIcon";
import TeleIcon from "../assets/TeleIcon";

export default function ContactBody() {
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
    <div ref={ref} className="flex flex-col gap-y-8">
      <p className="text-lg ">
        We are a collective of experienced operators and founders behind some of
        the largest projects and protocols in Web3.
      </p>
      <div className="flex items-center gap-x-8">
        <XIcon />
        <TeleIcon />
      </div>
    </div>
  );
}
