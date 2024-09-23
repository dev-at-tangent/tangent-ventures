import MediaSection from "./LandingPage/MediaSection";
import EndorsementSection from "./LandingPage/EndorsementSection";
import PortfolioSection from "./LandingPage/PortfolioSection";
import ContactSection from "./LandingPage/ContactSection";
import ThesisSection from "./LandingPage/ThesisSection";
import AboutSection from "./LandingPage/AboutSection";

import type { Entry } from "contentful";
import type { Endorsement } from "../pages/endorsements.astro";
import type { PortfolioItem } from "../pages/portfolio.astro";
import type { FeaturedMedia } from "../pages/index.astro";

export default function LandingPageContent({
  endorsements,
  portfolioIcons,
  featuredMedia,
}: {
  endorsements: Entry<Endorsement>[];
  portfolioIcons: string[];
  featuredMedia: Entry<FeaturedMedia>[];
}) {
  return (
    <div className="flex flex-col items-center pb-48 gap-y-20 sm:gap-y-36 md:gap-y-20 lg:gap-y-48 uhd:gap-y-72">
      <AboutSection />
      <EndorsementSection endorsements={endorsements} />
      <PortfolioSection portfolioIcons={portfolioIcons} />
      <ThesisSection />
      <MediaSection featuredMedia={featuredMedia} />
      <ContactSection />
    </div>
  );
}
