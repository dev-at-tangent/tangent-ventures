import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap/gsap-core";
import Lottie from "lottie-react";
import data from "../assets/lotties/thesis-holo.json";
import type { Entry } from "contentful";
import type { ThesisHeaderContent } from "../pages/thesis.astro";
import mobiledata from "../assets/lotties/thesis-holo-mobile.json";
import "../styles/custom.css";

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
      className="flex items-center justify-center relative w-full "
    >
      <Lottie
        animationData={data}
        className="hidden lg:flex"
      ></Lottie>
      <Lottie animationData={mobiledata} className="-mx-6 lg:hidden"></Lottie>
      <div className="absolute top-0 flex flex-col sm:items-center justify-evenly w-full h-full py-8">
        <h1 className="text-3xl sm:text-5xl glitch-text">
          THESIS
        </h1>
        <p className=" text-sm md:text-base uhd:text-xl text-center mx-8 sm:w-1/2 z-10 text-grey-80 font-semibold">
          {content.fields.content.toString()}
        </p>
      </div>
    </div>
  );
}
