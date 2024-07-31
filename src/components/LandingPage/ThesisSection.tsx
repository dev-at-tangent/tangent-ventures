import Lottie from "lottie-react";
import holo from "../../assets/lotties/home-holo.json";
import holoMobile from "../../assets/lotties/home-holo-mobile.json";

export default function ThesisSection() {
  return (
    <div className="relative mt-32 xs:mt-36 desktop:mt-12">
      <div className="w-full flex flex-col items-center absolute sm:top-1/3  desktop:top-1/2 left-1/2 -translate-x-1/2 text-grey-80 text-xl desktop:text-3xl font-semibold z-10">
        <div className="flex flex-col mt-4 gap-x-8  desktop:mt-0 desktop:flex-row justify-center items-center desktop:w-2/3">
          
          <div className="flex items-center border-b-2 desktop:border-b-0 py-4 desktop:h-24 justify-center text-center w-2/3 desktop:w-96 desktop:border-r-2 border-white">
            0-TO-1 USE CASES
          </div>
          
          <span className="flex items-center  border-b-2 desktop:border-b-0 py-4 desktop:h-24 text-center w-2/3 desktop:w-96 desktop:border-r-2 border-white">
            COORDINATION NETWORKS
          </span>
          
          <span className="flex items-center py-4 desktop:h-24 text-center w-2/3 desktop:w-96 ">
            MARKETS FOR EVERYTHING
          </span>
        </div>
        
        <a
          className="bg-white rounded-full px-6 py-3 text-sm desktop:text-base font-medium group relative overflow-hidden mt-8 desktop:mt-12 hover:bg-black transition-colors"
          href="/endorsements"
        >
          <span className="inline-block translate-y-10 transition-all group-hover:translate-y-0 text-white">
            LEARN MORE
          </span>
          <span className="absolute left-0 mx-6 inline-block transition-all group-hover:-translate-y-10">
            LEARN MORE
          </span>
        </a>
      </div>
      <Lottie
        animationData={holo}
        className="hidden scale-110 desktop:flex self-center -z-10"
      />

      <Lottie animationData={holoMobile} className="scale-[2] sm:scale-100  desktop:hidden" />
    </div>
  );
}
