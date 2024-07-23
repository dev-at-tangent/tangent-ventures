import { useRef, useState, useEffect, type LegacyRef } from "react";
import LandingPageContent from "./LandingPageContent";
import leftBuilding from "../assets/LeftBuilding.png";
import rightBuilding from "../assets/RightBuilding.png";

import XIcon from "../assets/XIcon";
import Logo from "../assets/DarkLogo.svg";
import {
  Parallax,
  ParallaxBanner,
  ParallaxBannerLayer,
} from "react-scroll-parallax";
export default function ParallaxComponent({
  endorsements,
}: {
  endorsements: any[];
}) {
  return (
    <ParallaxBanner >
      <ParallaxBannerLayer speed={-20}>
        <img src={leftBuilding.src} alt="background" />
      </ParallaxBannerLayer>
      <ParallaxBannerLayer speed={0}>
        <h1>Your Content Here</h1>
      </ParallaxBannerLayer>
    </ParallaxBanner>
  );

  // <Parallax
  //   ref={parallax}
  //   pages={3}
  //   className="-mt-36 [&::-webkit-scrollbar]:hidden [-ms-overflow-style]:none [scrollbar-width]:none"
  // >
  //   {/* Background Layer */}
  //   <ParallaxLayer
  //     offset={0}
  //     factor={4.5}
  //     speed={1.5}
  //     style={{
  //       backgroundImage: `url(${bg.src})`,
  //       backgroundSize: "cover",
  //       backgroundPosition: "center",
  //     }}
  //   />

  //   {/* Foreground Layer with Buildings */}
  //   <ParallaxLayer
  //     speed={1}
  //     factor={4}
  //     style={{ position: "relative" }} // Adjust the top value to move the buildings higher
  //   >
  //     <img src={leftBuilding.src} className="absolute left-0 " />
  //     <img src={rightBuilding.src} className="absolute right-0" />
  //   </ParallaxLayer>
  //   {/* Content Layer */}
  //   <ParallaxLayer speed={1} factor={3}>
  //     <LandingPageContent endorsements={endorsements} />
  //   </ParallaxLayer>
  // </Parallax>
}
