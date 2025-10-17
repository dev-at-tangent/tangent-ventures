import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap/gsap-core";
import PortfolioCard from "./PortfolioCard";
import CategoriesTag from "./PortfolioPage/CategoriesTag";

export default function PortfolioContent({
  items,
}: {
  items: any;
}) {
  const ref = useRef(null);
  const [selectedCard, setSelectedCard] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const filteredItems = items.filter((item: any) =>
    selectedCategory === "All" || (item.fields.categories && item.fields.categories.includes(selectedCategory))
  );

  const categories: any = [
    "All",
    ...new Set(
      items
        .filter((item: { fields: { categories: any } }) => Array.isArray(item.fields.categories) && item.fields.categories.length > 0)
        .flatMap((item: { fields: { categories: any } }) => item.fields.categories)
    ),
  ];

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
    <div className="relative flex flex-col w-full gap-8 px-4 max-w-7xl mt-24 sm:mt-36 mb-25">
      <CategoriesTag
        filters={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <div
        ref={ref}
        className="relative flex flex-wrap justify-center gap-8 mt-8 lg:mt-10"
      >
        <div className="absolute inset-x-0 top-0 overflow-x-hidden overflow-y-visible pointer-events-none w-screen left-1/2 -translate-x-1/2">
        </div>
        {filteredItems.map((item: any) => (
          <PortfolioCard
            key={item.sys.id}
            details={item}
            selected={selectedCard}
            setSelected={setSelectedCard}
          />
        ))}
      </div>
    </div>
  );
}
