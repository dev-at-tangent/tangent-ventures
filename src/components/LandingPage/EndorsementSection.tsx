import type { Entry } from "contentful";
import type { Endorsement } from "../../pages/endorsements.astro";
import EndorsementCarousel from "./EndorsementCarousel";

export default function EndorsementSection({
  endorsements,
}: {
  endorsements: Entry<Endorsement>[];
}) {
  return (
    <div className="flex flex-col items-center text-center gap-y-8 mt-64">
      <h2 className="text-3xl desktop:text-5xl font-medium w-4/5">
        DON'T TAKE OUR WORD FOR IT. <br /> TAKE THEIRS.
      </h2>
      <div className="h-full w-screen z-20">
        <EndorsementCarousel endorsements={endorsements} />
      </div>
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
