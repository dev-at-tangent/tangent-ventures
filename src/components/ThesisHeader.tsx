import Lottie from "lottie-react";
import data from "../assets/lotties/thesis.json";
import type { Entry } from "contentful";
import type { ThesisHeaderContent } from "../pages/thesis.astro";
import mobiledata from "../assets/lotties/thesis-mobile.json";

export default function ThesisHeader({
  content,
}: {
  content: Entry<ThesisHeaderContent>;
}) {
  return (
    <div className="flex items-center justify-center -mx-8 overflow-hidden h-[50vh] ">
      <Lottie
        animationData={data}
        className="hidden scale-[2] h-full sm:flex sm:scale-100"
      ></Lottie>
      <Lottie
        animationData={mobiledata}
        className="h-full scale-125 sm:hidden"
      ></Lottie>

      <p className="absolute mt-10 text-sm md:text-base text-center mx-8 sm:w-1/2 z-10 text-grey-80 font-semibold">
        {content.fields.content.toString()}
      </p>
    </div>
  );
}
