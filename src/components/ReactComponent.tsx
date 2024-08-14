import type { Entry } from "contentful";
import type { Endorsement } from "../pages/endorsements.astro";
import type { PortfolioItem } from "../pages/portfolio.astro";
import type { FeaturedMedia } from "../pages/index.astro";

import LandingPageContent from "./LandingPageContent";
import Lottie from "lottie-react";

import LeftBuilding from "../assets/LeftBuilding.webp";
import MobileLeftBuilding from "../assets/MobileLeftBuilding.webp";
import topRightBuilding from "../assets/lotties/top-right-building.json";
import BottomRightBuilding from "../assets/BottomRightBuilding.webp";
import MobileRightBuilding from "../assets/MobileRightBuilding.webp";
import rocket from "../assets/lotties/spaceship.json";
import balloon from "../assets/lotties/balloon.json";
import topLeftCloud from "../assets/lotties/cloud-home-top-left.json";
import topRightCloud from "../assets/lotties/cloud-home-top-right.json";
import midLeftCloud from "../assets/lotties/cloud-home-mid-left.json";
import midRightCloud from "../assets/lotties/cloud-home-mid-right.json";
import bottomCloud from "../assets/lotties/cloud-home-btm.json";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ReactComponent({
  endorsements,
  portfolioIcons,
  featuredMedia,
}: {
  endorsements: Entry<Endorsement>[];
  portfolioIcons: Entry<PortfolioItem>[];
  featuredMedia: Entry<FeaturedMedia>[];
}) {
  const container = useRef(null);
  const overallContainer = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const { scrollYProgress: parallaxProgress } = useScroll({
    target: overallContainer,
    offset: ["start end", "end start"],
  });
  const lg = useTransform(parallaxProgress, [0, 1], [0, -300]);
  const rocketTransform = useTransform(scrollYProgress, [0, 0.5], [200, -1000]);

  return (
    <div
      ref={overallContainer}
      className="relative pt-36 sm:pt-56 overflow-hidden"
    >
      <div
        ref={container}
        className="absolute z-50 h-screen sm:h-[50vh] top-[90vh] lg:top-[20%] left-1/2"
      />

      <LandingPageContent
        endorsements={endorsements}
        portfolioIcons={portfolioIcons}
        featuredMedia={featuredMedia}
      />
      <div className="hidden absolute sm:flex top-[90vh] xl:top-[90vh] 2xl:top-[65vh] -left-24 sm:-left-48  xl:left-0 w-1/2 xl:w-1/4 2xl:w-1/5 uhd:w-1/6">
        <motion.img style={{ y: lg }} src={LeftBuilding.src} alt="background" />
      </div>
      <div className="absolute w-2/3 top-[100vh] -left-32 sm:hidden">
        <motion.img
          style={{ y: lg }}
          src={MobileLeftBuilding.src}
          alt="background"
        />
      </div>
      <div className="hidden absolute sm:flex top-[90vh] xl:top-[90vh] 2xl:top-[80vh] -right-24 sm:-right-48 lg:-right-72 xl:-right-16 w-1/2 lg:w-[45%] xl:w-1/4 2xl:w-1/5 uhd:w-1/6">
        <motion.div style={{ y: lg }}>
          <Lottie animationData={topRightBuilding} />
          <img src={BottomRightBuilding.src} alt="background" />
        </motion.div>
      </div>
      <div className="absolute w-3/5 top-[110vh] -right-36 sm:hidden">
        <motion.img
          style={{ y: lg }}
          src={MobileRightBuilding.src}
          alt="background"
        />
      </div>
      <motion.div
        style={{ x: rocketTransform }}
        className="absolute top-[65vh] sm:top-40 right-40 sm:-right-96 -z-10"
      >
        <Lottie
          animationData={rocket}
          className="w-[40vw] sm:w-auto scale-150 sm:scale-50 uhd:scale-75"
        />
      </motion.div>

      <Lottie
        animationData={balloon}
        className="absolute w-24 sm:w-64 right-[65vw] md:right-40 lg:right-64 bottom-32 sm:bottom-64 -z-30"
      />

      <Lottie
        animationData={topLeftCloud}
        className="absolute hidden sm:flex top-10 md:-left-36 lg:left-1/4 -z-20"
      />
      <Lottie
        animationData={midLeftCloud}
        className="absolute lg:scale-75 xl:scale-100 top-24 sm:top-48 -left-72 md:-left-[70vw] lg:-left-[40vw] xl:-left-[30vw] uhd:-left[10vw] -z-20"
      />

      <Lottie
        animationData={topRightCloud}
        className="absolute scale-75 sm:scale-100 top-0 lg:top-10 -right-[60vw] md:-right-36 lg:-right-20 -z-20"
      />
      <Lottie
        animationData={midRightCloud}
        className="absolute scale-75 xl:scale-100 top-96 sm:top-[340px] -right-[60vw] md:-right-96 lg:-right-48 -z-20"
      />

      <Lottie
        animationData={bottomCloud}
        className="hidden sm:flex absolute scale-75 top-[100vh] right-3/5 -z-10"
      />
    </div>
  );
}
