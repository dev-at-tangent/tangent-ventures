import type { Entry } from "contentful";
import type { PortfolioItem } from "../../pages/portfolio.astro";
import Ribbon from "../Ribbon";

export default function PortfolioSection({
  portfolioIcons
}: {
  portfolioIcons: string[];
}) {
  return (
    <div className="flex flex-col items-center text-center gap-y-8 ">
      <h2 className="text-3xl desktop:text-5xl font-medium w-2/5">
        WHAT WE INVEST IN
      </h2>
      <a
        className="bg-white rounded-full px-6 py-3 text-sm desktop:text-base font-medium group relative overflow-hidden hover:bg-black transition-colors"
        href="/portfolio"
      >
        <span className="inline-block translate-y-8 transition-all group-hover:translate-y-0 text-white">
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
