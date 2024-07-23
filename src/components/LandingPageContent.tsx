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
    <div className="flex flex-col items-center pb-24 gap-y-20 uhd:gap-y-64">
      <AboutSection />
      <EndorsementSection endorsements={endorsements} />
      <PortfolioSection />
      <ThesisSection />
      <MediaSection />
      <ContactSection />
    </div>
  );
}
