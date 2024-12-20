import { motion } from "framer-motion";
import bg from "../assets/RibbonBG.webp";
import overlay from "../assets/RibbonOverlay.webp";
import type { PortfolioItem } from "../pages/portfolio.astro";
import type { Entry } from "contentful";

const SliderNumber = ({
  portfolioIcons,
}: {
  portfolioIcons: string[];
}) => {

  // Duplicate the slides array multiple times to ensure seamless looping
  const duplicatedSlides = [...portfolioIcons, ...portfolioIcons, ...portfolioIcons, ...portfolioIcons];

  // Define the number of icons to show at a time
  const iconsToShow = 6; // Adjust this number as needed

  return (
    <div className="w-full -z-20 relative">
      {/* Wrapping div for seamless looping */}
      <motion.div
        className="flex"
        style={{
          marginLeft: `-${100 / iconsToShow}%`, // Hide the first set of duplicates
        }}
        animate={{
          x: [`-${(100 * portfolioIcons.length) / iconsToShow}%`, `0%`],
          transition: {
            ease: "linear",
            duration: 15, // Adjust duration as needed
            repeat: Infinity,
          },
        }}
      >
        {/* Render duplicated slides */}
        {duplicatedSlides.map((slide, index) => (
          <div
            key={index}
            className="flex-shrink-0"
            style={{
              width: `${100 / iconsToShow}%`,
            }}
          >
            <div className="flex items-center justify-center  desktop:text-6xl">
              <img
                src={slide}
                className="mt-7 sm:mt-12 w-8 sm:w-16"
                alt={`Icon ${index}`}
              />
            </div>
          </div>
        ))}
      </motion.div>
      <img
        src={bg.src}
        className="w-full -z-10 absolute top-0 h-20 sm:h-36"
        alt="Ribbon background"
      />
      <img
        src={overlay.src}
        className="w-full z-10 absolute top-0 h-20 sm:h-36"
        alt="Ribbon overlay"
      />
    </div>
  );
};

export default SliderNumber;
