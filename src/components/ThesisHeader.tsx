import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap/gsap-core";
import Lottie from "lottie-react";
import data from "../assets/lotties/thesis-holo.json";
import type { Entry } from "contentful";
import type { ThesisHeaderContent } from "../pages/thesis.astro";
import mobiledata from "../assets/lotties/thesis-holo-mobile.json";

export default function ThesisHeader({
  content,
}: {
  content: Entry<ThesisHeaderContent>;
}) {
  const ref = useRef(null);

  useGSAP(
    () => {
      gsap.from(ref.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0,
        ease: "power3.out",
      });
    },
    { scope: ref }
  );

  return (
    <div
      ref={ref}
      className="flex items-center justify-center h-[80vh] -mx-6"
    >
      <Lottie
        animationData={data}
        className="hidden h-full sm:flex sm:scale-125 uhd:scale-150"
      ></Lottie>
      <Lottie animationData={mobiledata} className="sm:hidden"></Lottie>

      <p className="absolute text-sm md:text-base uhd:text-xl text-center mx-8 sm:w-1/2 z-10 text-grey-80 font-semibold">
        {content.fields.content.toString()}
      </p>
    </div>
  );
}
