import React from "react";

export default function MediaTabs({
  tab,
  setTab,
}: {
  tab: string;
  setTab: (tab: string) => void;
}) {
  return (
    <div className="flex items-center justify-center gap-x-8 mt-12 text-lg text-grey-60 font-semibold">
      <button
        className={`${
          tab === "PODCASTS" &&
          "text-black underline underline-offset-8 decoration-2 cursor-pointer"
        }`}
        onClick={() => setTab("PODCASTS")}
      >
        PODCASTS
      </button>
      |
      <button
        className={`${
          tab === "ARTICLES" &&
          "text-black underline underline-offset-8 decoration-2 cursor-pointer"
        } `}
        onClick={() => setTab("ARTICLES")}
      >
        ARTICLES
      </button>
    </div>
  );
}
