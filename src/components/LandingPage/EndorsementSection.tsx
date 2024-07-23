import React from "react";
import EndorsementCard from "../EndorsementCard";

export default function EndorsementSection({
  endorsements,
}: {
  endorsements: any[];
}) {
  return (
    <div className="flex flex-col items-center text-center gap-y-8 mx-12">
      <h2 className="text-3xl desktop:text-5xl font-medium">
        DON'T TAKE OUR WORD FOR IT. <br /> TAKE THEIRS.
      </h2>

      <EndorsementCard home details={endorsements[0]} />

      <a
        className="bg-white rounded-full px-6 py-3 font-medium text-sm desktop:text-base group relative overflow-hidden"
        href="/endorsements"
      >
        <span className="inline-block translate-y-8 transition-all group-hover:translate-y-0">
          READ ENDORSEMENTS
        </span>
        <span className="absolute left-0 mx-6 inline-block transition-all group-hover:-translate-y-8">
          READ ENDORSEMENTS
        </span>
      </a>
    </div>
  );
}
