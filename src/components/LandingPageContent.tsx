import MediaSection from "./LandingPage/MediaSection";
import XIcon from "../assets/XIcon";
import Logo from "../assets/DarkLogo.svg";
import EndorsementSection from "./LandingPage/EndorsementSection";
import PortfolioSection from "./LandingPage/PortfolioSection";
import ContactSection from "./LandingPage/ContactSection";
import ThesisSection from "./LandingPage/ThesisSection";
import AboutSection from "./LandingPage/AboutSection";

export default function LandingPageContent({
  endorsements,
}: {
  endorsements: any[];
}) {
  return (
    <div className="flex flex-col">
      <AboutSection />
      <EndorsementSection endorsements={endorsements} />
      <PortfolioSection />
      <ThesisSection />
      <MediaSection />
      <ContactSection />
      <div
        className="w-full bg-grey-90 p-8 text-white flex-col justify-center text-center desktop:text-left desktop:items-center desktop:mt-16 desktop:flex-row"
        id="footer"
      >
        <div className="flex flex-col items-center gap-y-4 desktop:items-start">
          <img src={Logo.src} className="max-w-96 w-3/4" />
          <span className="text-sm text-grey-40">
            Tangent 2024 | All Rights Reserved
          </span>
        </div>
        <div className="grow"></div>
        <div className="desktop:w-1/2">
          <div className="text-sm hidden desktop:flex desktop:flex-row desktop:items-center justify-between gap-4 desktop:gap-8 mt-6 text-grey-20">
            <a href="/about">ABOUT</a>
            <a href="/endorsements">ENDORSEMENTS</a>
            <a href="/thesis">THESIS</a>
            <a href="/portfolio">PORTFOLIO</a>
            <a href="/media">MEDIA</a>
            <a href="/contact">CONTACT</a>
            <a href="https://x.com/tangent_xyz" target="_blank">
              <XIcon className="h-5" />
            </a>
          </div>
          <p className="text-[10px] desktop:text-xs text-grey-40 mt-10">
            Disclaimer: Tangent is brand name used to refer to an informally
            organized group of angel investors investing their personal assets
            and is not a licensed entity. Each investor invests independently
            with their personal assets; Tangent does not offer its investment
            opportunities to the public and does not manage any external
            capital.
          </p>
        </div>
      </div>
    </div>
  );
}
