import React from "react";

export default function ContactSection() {
  return (
    <div className="flex flex-col items-center text-center gap-y-4 z-10">
      <h2 className="text-3xl desktop:text-5xl w-1/2  font-medium">
        LET'S BUILD SOMETHING EPIC TOGETHER
      </h2>
      <a
        className="bg-white rounded-full px-6 py-3 font-medium text-sm desktop:text-base group relative overflow-hidden"
        href="/contact"
      >
        <span className="inline-block translate-y-8 transition-all group-hover:translate-y-0">
          CONTACT
        </span>
        <span className="absolute left-0 mx-6 inline-block transition-all group-hover:-translate-y-8">
          CONTACT
        </span>
      </a>
    </div>
  );
}