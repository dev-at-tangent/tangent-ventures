import React from "react";

export default function AboutSection() {
  return (
    <div className="flex flex-col items-center gap-y-8 mx-12">
      <h1 className="text-4xl desktop:text-6xl font-medium text-center">
        EVERGREEN PROP INVESTORS <br /> FOR CRYPTO FOUNDERS
      </h1>
      <span className="-mt-4 text-center w-5/6 sm:w-full md:text-2xl">Founder-driven venture bets, thesis-driven liquid bets</span>
      <a
        className="bg-white rounded-full px-6 py-3 font-medium text-sm desktop:text-base group relative overflow-hidden hover:bg-black transition-colors"
        href="/about"
      >
        <span className="inline-block translate-y-8 transition-all group-hover:translate-y-0 text-white">
          ABOUT US
        </span>
        <span className="absolute left-0 mx-6 inline-block transition-all group-hover:-translate-y-8">
          ABOUT US
        </span>
      </a>
    </div>
  );
}
