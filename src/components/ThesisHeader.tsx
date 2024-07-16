import Lottie from "lottie-react";
import data from "../assets/lotties/thesis.json";
import type { Entry } from "contentful";
import type { ThesisHeaderContent } from "../pages/thesis.astro";

export default function ThesisHeader({
  content,
}: {
  content: Entry<ThesisHeaderContent>;
}) {
  return (
    <div className="">
      <Lottie animationData={data} className="inset-0 z-0">
        <p className="relative top-72 left-1/4 text-center w-1/2 z-10 text-grey-80 font-semibold">
          {content.fields.content.toString()}
        </p>
      </Lottie>
    </div>
  );
}
