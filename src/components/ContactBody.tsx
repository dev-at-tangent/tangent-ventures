import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap/gsap-core";

import XIcon from "../assets/XIcon";

export default function ContactBody({ text }: { text: string }) {
  const ref = useRef(null);
  useGSAP(
    () => {
      gsap.from(ref.current, {
        y: 50,
        opacity: 0,
        duration: 0.5,
        delay: 0,
        ease: "power3.out",
      });
    },
    { scope: ref }
  );
  return (
    <div ref={ref} className="flex flex-col gap-y-8">
      <h1 className="text-4xl md:text-6xl font-medium w-full text-center lg:text-left">
        GET IN TOUCH
      </h1>
      <p className="text-lg text-center lg:text-left whitespace-pre-wrap">{text}</p>
      <div className="flex items-center justify-center lg:justify-start gap-x-8">
        <a
          href="https://x.com/tangent_xyz"
          target="_blank"
          className="flex items-center hover:text-turq"
        >
          <XIcon className="w-6 mr-2" /> @tangent_xyz
        </a>
      </div>
    </div>
  );
}
