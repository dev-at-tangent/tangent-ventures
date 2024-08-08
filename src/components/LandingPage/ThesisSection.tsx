import Lottie from "lottie-react";
import holo from "../../assets/lotties/home-holo.json";
import holoMobile from "../../assets/lotties/home-holo-mobile.json";
import "../../styles/custom.css";

export default function ThesisSection() {
  return (
    <div className="relative flex flex-col items-center mt-32 xs:mt-36 desktop:mt-12">
      <div className="w-full h-full py-8  flex flex-col items-center justify-evenly absolute left-1/2 -translate-x-1/2 text-grey-80 text-xl desktop:text-3xl font-semibold z-10">
        <h1 className="glitch-text text-3xl desktop:text-5xl">THESIS</h1>
        <div className="flex flex-col desktop:flex-row justify-center items-center desktop:w-2/3 px-8">
          <span className="flex items-center border-b-2 desktop:border-b-0 py-4 px-4 desktop:h-24 text-center w-2/3 desktop:w-72 ">
            0-TO-1 USE CASES
          </span>

          <span className="flex items-center  border-b-2 desktop:border-b-0 py-4 desktop:h-24 text-center w-2/3 desktop:w-72 desktop:border-x-2 border-white">
            COORDINATION NETWORKS
          </span>

          <span className="flex items-center py-4 desktop:h-24 text-center w-2/3 desktop:w-72 ">
            MARKETS FOR EVERYTHING
          </span>
        </div>

        <a
          className="hidden sm:flex bg-white rounded-full px-6 py-3 text-sm desktop:text-base font-medium group relative overflow-hidden hover:bg-black transition-colors"
          href="/thesis"
        >
          <span className="inline-block translate-y-10 transition-all group-hover:translate-y-0 text-white">
            LEARN MORE
          </span>
          <span className="absolute left-0 mx-6 inline-block transition-all group-hover:-translate-y-10">
            LEARN MORE
          </span>
        </a>
        <a
          className="sm:hidden bg-white rounded-full px-6 py-3 text-sm"
          href="/thesis"
        >
          LEARN MORE
        </a>
      </div>
      <Lottie
        animationData={holo}
        className="hidden scale-110 desktop:flex self-center -z-10"
      />

      <Lottie
        animationData={holoMobile}
        className="h-full w-[180%] sm:w-auto desktop:hidden"
      />
    </div>
  );
}
