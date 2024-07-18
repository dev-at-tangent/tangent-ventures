import Lottie from "lottie-react";

import holo from "../assets/lotties/home-holo.json";
import holoMobile from "../assets/lotties/home-holo-mobile.json";

export default function ReactComponent() {
  return (
    <div className="relative -mx-6">
      <Lottie animationData={holo} className="hidden sm:flex" />
      <Lottie animationData={holoMobile} className="sm:hidden" />
    </div>
  );
}
