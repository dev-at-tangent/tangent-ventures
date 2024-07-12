import Lottie from "lottie-react";
import data from "../assets/lotties/holo.json";

export default function ThesisHeader() {
  return (
    <div className="">
      <Lottie animationData={data} className="inset-0 z-0">
        <p className="relative bottom-80 left-1/4 text-center w-1/2 z-10 text-grey-80">
          At Tangent, we are keen to back founders building protocols and
          applications that expand the on-chain economy. From first principles,
          crypto has proven itself to be primarily good at three things besides
          being money and being used for capital formation:
        </p>
      </Lottie>
    </div>
  );
}
