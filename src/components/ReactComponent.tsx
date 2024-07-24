import type { Entry } from "contentful";
import type { Endorsement } from "../pages/endorsements.astro";
import LandingPageContent from "./LandingPageContent";

import GIF from "../assets/podcast.gif";
import LeftBuilding from "../assets/LeftBuilding.webp";
import RightBuilding from "../assets/RightBuilding.webp";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import type { PortfolioItem } from "../pages/portfolio.astro";
import Test from "./LandingPage/EndorsementCarousel";

export default function ReactComponent({
  endorsements,
  portfolioIcons,
  featuredMedia,
}: {
  endorsements: Entry<Endorsement>[];
  portfolioIcons: Entry<PortfolioItem>[];
  featuredMedia: any; // Add type for featured media
}) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const sm = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const md = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const lg = useTransform(scrollYProgress, [0, 1], [0, -300]);

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
        <img src={GIF.src} className="absolute -top-[400vh] left-1/2" />
      </div>
    </div>
  );
}
