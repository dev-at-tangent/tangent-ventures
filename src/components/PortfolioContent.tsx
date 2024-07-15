import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap/gsap-core";
import PortfolioCard from "./PortfolioCard";
import type { Entry } from "contentful";
import type { PortfolioItem } from "../pages/portfolio.astro";

export default function PortfolioContent({
  items,
}: {
  items: Entry<PortfolioItem>[];
}) {
  const ref = useRef(null);
  useGSAP(
    () => {
      gsap.from(ref.current, {
        opacity: 0,
        duration: 0.5,
        delay: 1.1,
        ease: "power2.out",
      });
    },
    { scope: ref }
  );
  return (
    <div ref={ref} className="flex flex-wrap justify-center gap-8 mt-20">
      {items.map((item) => (
        <PortfolioCard key={item.sys.id} details={item} />
      ))}
    </div>
  );
}
