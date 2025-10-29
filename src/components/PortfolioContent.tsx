import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap/gsap-core";
import PortfolioCard from "./PortfolioCard";
import CategoriesTag from "./PortfolioPage/CategoriesTag";
import type { Asset, EntryFieldTypes, Entry } from "contentful";

export interface CategoryItem {
  contentTypeId: "category";
  fields: { title: EntryFieldTypes.Text };
}

export interface PortfolioItem {
  contentTypeId: "portfolio";
  fields: {
    name: EntryFieldTypes.Text;
    tags: EntryFieldTypes.Text[];
    logo: Asset;
    logoColour: Asset;
    description: EntryFieldTypes.Text;
    rank: EntryFieldTypes.Number;
    link: EntryFieldTypes.Text;
    categories: EntryFieldTypes.Text[];
    sector: EntryFieldTypes.Text[];
    categoriesField?: EntryFieldTypes.Array<
      EntryFieldTypes.EntryLink<CategoryItem>
    >;
  };
}

export default function PortfolioContent({
  items = [],
}: {
  items: Entry<PortfolioItem>[];
}) {
  const ref = useRef(null);
  const [selectedCard, setSelectedCard] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  // Helper to normalize category to string title
  const getCatTitle = (cat: unknown) => {
    if (!cat) return "";
    if (typeof cat === "string") return cat;
    if (typeof cat === "object" && "fields" in (cat as any)) {
      return String((cat as any).fields?.title ?? "");
    }
    return "";
  };

  const filteredItems = items.filter((item) => {
    if (selectedCategory === "All") return true;
    const cats = Array.isArray(item.fields.categoriesField)
      ? item.fields.categoriesField.map(getCatTitle).filter(Boolean)
      : [];
    return cats.includes(selectedCategory);
  });

  const categories: string[] = [
    "All",
    ...Array.from(
      new Set(
        items.flatMap((item) =>
          Array.isArray(item.fields.categoriesField)
            ? item.fields.categoriesField.map(getCatTitle).filter(Boolean)
            : []
        )
      )
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
    <div className="relative flex flex-col w-full gap-8 px-4 max-w-7xl mt-24 sm:mt-24 mb-25 min-h-[100vh]">
      <div >
      <CategoriesTag
        filters={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      </div>
      <div
        ref={ref}
        className="relative flex flex-wrap justify-center gap-8 mt-8 lg:mt-10"
      >
        <div className="absolute inset-x-0 top-0 overflow-x-hidden overflow-y-visible pointer-events-none w-screen left-1/2 -translate-x-1/2" />
        {filteredItems.map((item) => (
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
