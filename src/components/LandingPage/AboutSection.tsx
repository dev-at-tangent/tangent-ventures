import React from "react";

export default function AboutSection() {
  return (
    <div className="flex flex-col items-center gap-y-8 mx-12">
      <h1 className="text-4xl desktop:text-6xl font-medium text-center">
        EVERGREEN ANGEL FUND
        <br /> BUILT FOR CRYPTO FOUNDERS
      </h1>
      <a
        className="bg-white rounded-full px-6 py-3 font-medium text-sm desktop:text-base group relative overflow-hidden"
        href="/about"
      >
        <span className="inline-block translate-y-8 transition-all group-hover:translate-y-0">
          ABOUT US
        </span>
        <span className="absolute left-0 mx-6 inline-block transition-all group-hover:-translate-y-8">
          ABOUT US
        </span>
      </a>
    </div>
  );
}