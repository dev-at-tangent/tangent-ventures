import MediaSection from "./LandingPage/MediaSection";
import EndorsementSection from "./LandingPage/EndorsementSection";
import PortfolioSection from "./LandingPage/PortfolioSection";
import ContactSection from "./LandingPage/ContactSection";
import ThesisSection from "./LandingPage/ThesisSection";
import AboutSection from "./LandingPage/AboutSection";

import type { Endorsement } from "../pages/endorsements.astro";
import type { PortfolioItem } from "../pages/portfolio.astro";
import type { Entry } from "contentful";
import Test from "./LandingPage/EndorsementCarousel";

export default function LandingPageContent({
  endorsements,
  portfolioIcons,
  featuredMedia,
}: {
  endorsements: Entry<Endorsement>[];
  portfolioIcons: Entry<PortfolioItem>[];
  featuredMedia: any;
}) {
  return (
    <div className="flex flex-col items-center pb-24 gap-y-20 uhd:gap-y-64">
      <AboutSection />
      <EndorsementSection endorsements={endorsements} />
      <PortfolioSection portfolioIcons={portfolioIcons} />
      <ThesisSection />
      <MediaSection featuredMedia={featuredMedia} />
      <ContactSection />
    </div>
  );
}