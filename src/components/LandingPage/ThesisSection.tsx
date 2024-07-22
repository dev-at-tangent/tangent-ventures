import Lottie from "lottie-react";
import holo from "../../assets/lotties/home-holo.json";
import holoMobile from "../../assets/lotties/home-holo-mobile.json";

export default function ThesisSection() {
  return (
    <>
      <Lottie
        animationData={holo}
        className="hidden sm:flex self-center scale-75 mt-24 h-[50vh]"
      >
        <div className="w-full flex flex-col items-center absolute top-1/2 left-1/2 -translate-x-1/2 text-grey-80 text-3xl font-semibold z-10">
          <div className="flex justify-center  ">
            <span className="flex items-center justify-center text-center w-96  border-r-2 border-white">
              0-TO-1 APPS
            </span>
            <span className="flex items-center text-center w-96  border-r-2 border-white">
              COORDINATION NETWORKS
            </span>
            <span className="flex items-center text-center w-96 ">
              MARKETS FOR EVERYTHING
            </span>
          </div>
          <a
            className="bg-white rounded-full px-6 py-3 text-lg font-medium group relative overflow-hidden mt-12"
            href="/endorsements"
          >
            <span className="inline-block translate-y-10 transition-all group-hover:translate-y-0">
              LEARN MORE
            </span>
            <span className="absolute left-0 mx-6 inline-block transition-all group-hover:-translate-y-10">
              LEARN MORE
            </span>
          </a>
        </div>
      </Lottie>
      <Lottie animationData={holoMobile} className="sm:hidden" />
    </>
  );
}
