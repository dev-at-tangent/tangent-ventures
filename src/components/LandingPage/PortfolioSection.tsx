import type { Entry } from "contentful";
import type { PortfolioItem } from "../../pages/portfolio.astro";
import Ribbon from "../Ribbon";

export default function PortfolioSection({
  portfolioIcons
}: {
  portfolioIcons: Entry<PortfolioItem>[];
}) {
  return (
    <div className="flex flex-col items-center text-center gap-y-8 w-full">
      <h2 className="text-3xl desktop:text-5xl font-medium">
        WE INVEST TO EXPAND THE <br /> ONCHAIN ECONOMY
      </h2>
      <a
        className="bg-white rounded-full px-6 py-3 text-sm desktop:text-base font-medium group relative overflow-hidden"
        href="/portfolio"
      >
        <span className="inline-block translate-y-8 transition-all group-hover:translate-y-0">
          OUR PORTFOLIO
        </span>
        <span className="absolute left-0 mx-6 inline-block transition-all group-hover:-translate-y-8">
          OUR PORTFOLIO
        </span>
      </a>
      <Ribbon portfolioIcons={portfolioIcons} />
    </div>
  );
}
