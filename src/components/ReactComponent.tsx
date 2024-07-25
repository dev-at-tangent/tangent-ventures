import type { Entry } from "contentful";
import type { Endorsement } from "../pages/endorsements.astro";
import type { PortfolioItem } from "../pages/portfolio.astro";
import type { FeaturedMedia } from "../pages/index.astro";

import LandingPageContent from "./LandingPageContent";
import Lottie from "lottie-react";

import GIF from "../assets/podcast.gif";
import LeftBuilding from "../assets/LeftBuilding.webp";
import MobileLeftBuilding from "../assets/MobileLeftBuilding.webp";
import RightBuilding from "../assets/RightBuilding.webp";
import rocket from "../assets/lotties/spaceship.json";
import robot from "../assets/lotties/robot.json";
import sat from "../assets/lotties/sat.json";
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
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const lg = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const rocketTransform = useTransform(scrollYProgress, [0, 1], [1000, -2000]);

  return (
    <div className="relative pt-36 sm:pt-56 overflow-hidden" ref={container}>
      <LandingPageContent
        endorsements={endorsements}
        portfolioIcons={portfolioIcons}
        featuredMedia={featuredMedia}
      />
      <div className="hidden absolute sm:flex scale-[4] sm:scale-[2] desktop:scale-125 2xl:scale-100 top-[320vh] sm:top-[200vh] md:top-[200vh] desktop:top-[120vh] 2xl:top-[80vh] -left-36 md:-left-20 desktop:-left-12 w-1/4 desktop:w-1/5 uhd:w-1/6">
        <motion.img style={{ y: lg }} src={LeftBuilding.src} alt="background" />
      </div>
      <div className="absolute w-1/5 top-[250vh] -left-10 scale-[2.5] sm:hidden">
        <motion.img
          style={{ y: lg }}
          src={MobileLeftBuilding.src}
          alt="background"
        />
      </div>
      <div className="absolute scale-[5] sm:scale-[1.7] desktop:scale-[1.5] 2xl:scale-100 top-[350vh] sm:top-[220vh] md:top-[155vh] desktop:top-[150vh] 2xl:top-[80vh] -right-40 md:-right-20 desktop:-right-12 w-1/4 desktop:w-1/5 uhd:w-1/6 ">
        <motion.img
          style={{ y: lg }}
          src={RightBuilding.src}
          alt="background"
        />
      </div>
      <motion.div
        style={{ x: rocketTransform }}
        className="absolute top-[70vh] right-[100vw] sm:top-64 sm:right-0 -z-10"
      >
        <Lottie
          animationData={rocket}
          className="w-[40vw] sm:w-auto scale-150 sm:scale-50 uhd:scale-75"
        />
      </motion.div>
      <Lottie
        animationData={robot}
        className="absolute w-24 sm:w-32 bottom-[55vh] right-16 md:right-40 lg:right-64 uhd:right-96 -z-20"
      />

      <Lottie
        animationData={balloon}
        className="absolute w-24 sm:w-48 md:left-40 lg:left-64 bottom-64 -z-20"
      />
      <Lottie
        animationData={sat}
        className="absolute -bottom-28 sm:-bottom-10 -right-10 sm:right-0 md:right-16 lg:right-48 -z-10 scale-[0.45] md:scale-75 lg:scale-100"
      />
      <Lottie
        animationData={topLeftCloud}
        className="absolute hidden sm:flex top-10 md:-left-36 lg:-left-10 -z-20"
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
