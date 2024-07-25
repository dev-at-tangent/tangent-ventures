import type { Entry } from "contentful";
import type { Endorsement } from "../pages/endorsements.astro";
import type { PortfolioItem } from "../pages/portfolio.astro";
import type { FeaturedMedia } from "../pages/index.astro";

import LandingPageContent from "./LandingPageContent";
import Lottie from "lottie-react";

import GIF from "../assets/podcast.gif";
import LeftBuilding from "../assets/LeftBuilding.webp";
import RightBuilding from "../assets/RightBuilding.webp";
import rocket from "../assets/lotties/spaceship.json";
import robot from "../assets/lotties/robot.json";
import sat from "../assets/lotties/sat.json";
import balloon from "../assets/lotties/balloon.json";

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
    <div className="relative overflow-hidden" ref={container}>
      <LandingPageContent
        endorsements={endorsements}
        portfolioIcons={portfolioIcons}
        featuredMedia={featuredMedia}
      />
      <div className="absolute scale-[4] sm:scale-[2] desktop:scale-125 2xl:scale-100 top-[320vh] md:top-[180vh] desktop:top-[80vh] 2xl:top-[40vh] -left-36 md:-left-20 desktop:-left-12 w-1/4 desktop:w-1/5 uhd:w-1/6">
        <motion.img style={{ y: lg }} src={LeftBuilding.src} alt="background" />
      </div>
      <div className="absolute scale-[6] sm:scale-[2] desktop:scale-125 2xl:scale-100 top-[380vh] md:top-[130vh] desktop:top-[80vh] 2xl:top-[40vh] -right-40 md:-right-20 desktop:-right-12 w-1/5 uhd:w-1/6 ">
        <motion.img
          style={{ y: lg }}
          src={RightBuilding.src}
          alt="background"
        />
        <img
          src={GIF.src}
          className="absolute top-[69vh] scale-x-[0.4] scale-y-[0.55] right-16 skew-y-12"
        />
      </div>
      <motion.div
        style={{ x: rocketTransform }}
        className="absolute top-[30vh] right-80 sm:-top-10 sm:right-0"
      >
        <Lottie animationData={rocket} className="w-[40vw] sm:w-auto sm:scale-50 uhd:scale-75" />
      </motion.div>

      <Lottie
        animationData={robot}
        className="absolute bottom-[35vh] sm:bottom-[70vh] 2xl:top-[190vh] -right-10 md:right-28 lg:right-72 uhd:right-96 scale-50 sm:scale-100 uhd:scale-[2] -z-10"
      />
      <Lottie
        animationData={balloon}
        className="absolute bottom-[20vh] 2xl:top-[230vh] -left-10 md:left-32 lg:left-64 uhd:left-72 -z-10 scale-50 md:scale-75 uhd:scale-150"
      />
      <Lottie
        animationData={sat}
        className="absolute -bottom-20 sm:bottom-0 -right-10 md:right-16 lg:right-72 -z-10 scale-[0.4] md:scale-75 lg:scale-100"
      />
    </div>
  );
}
