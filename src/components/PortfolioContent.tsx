import { useRef, useState } from "react";
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
  const [selectedCard, setSelectedCard] = useState("");

  useGSAP(
    () => {
      gsap.from(ref.current, {
        opacity: 0,
        duration: 0.5,
        delay: 0.5,
        ease: "power2.out",
      });
    },
    { scope: ref }
  );
  return (
    <div
      ref={ref}
      className="relative flex flex-wrap justify-center gap-8 mt-12 sm:mt-36"
    >
      <div className="absolute inset-0 overflow-x-hidden overflow-y-visible pointer-events-none w-screen left-1/2 -translate-x-1/2">
      </div>
      {items.map((item) => (
        <PortfolioCard
          key={item.sys.id}
          details={item}
          selected={selectedCard}
          setSelected={setSelectedCard}
        />
      ))}
    </div>
  );
}
