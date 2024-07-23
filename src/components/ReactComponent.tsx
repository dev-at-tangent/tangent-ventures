import type { Entry } from "contentful";
import type { Endorsement } from "../pages/endorsements.astro";
import LandingPageContent from "./LandingPageContent";

import LeftBuilding from "../assets/LeftBuilding.png";
import RightBuilding from "../assets/RightBuilding.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ReactComponent({
  endorsements,
}: {
  endorsements: Entry<Endorsement>[];
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
      <LandingPageContent endorsements={endorsements} />
      <div className="absolute scale-[5] sm:scale-[3] desktop:scale-150 2xl:scale-100 top-[120vh] md:top-[50vh] desktop:-top-[70vh] 2xl:-top-[120vh] -left-28 desktop:-left-12 w-1/4 desktop:w-1/5 uhd:w-1/6">
        <motion.img
          style={{ y: lg }}
          src={LeftBuilding.src}
          alt="background"
        />
      </div>
      <div className="absolute scale-[8] sm:scale-[3] desktop:scale-150 2xl:scale-100 top-[170vh] md:top-[50vh] desktop:-top-[70vh] 2xl:-top-[100vh] -right-40 desktop:-right-12 w-1/5 uhd:w-1/6 ">
        <motion.img
          style={{ y: lg }}
          src={RightBuilding.src}
          alt="background"
        />
      </div>
    </div>
  );
}
