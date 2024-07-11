import React from "react";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";
export default function ArticleCard() {
  return (
    <a
      href="www.google.com"
      target="_blank"
      className="group bg-white text-grey-80 rounded-xl p-8 flex flex-col gap-y-4 drop-shadow-lg"
    >
      <div className="flex items-end justify-between w-full">
        <span>May 14, 2024</span>
        <div className="flex items-center justify-center border border-grey-60 text-grey-60 font-medium rounded-full text-sm px-4">
          FEATURED
        </div>
      </div>
      <h1 className="text-3xl text-black font-medium line-clamp-2">
        Impedit laboriosam sunt aut autem. Sint reprehenderit temporibus ea
        nemo. enderit temporibus ea nemo.
      </h1>
      <p className="line-clamp-3">
        At Tangent, we are keen to back founders building protocols and
        applications that expand the on-chain economy. From first principles,
        crypto has proven itself to be primarily good at three things besides
        being money and being used for capital formation:
      </p>
      <div className="flex mt-8 font-semibold items-center text-sm group-hover:underline underline-offset-8">
        READ MORE
        <ArrowTopRightOnSquareIcon className="size-4 ml-2" />
      </div>
    </a>
  );
}
