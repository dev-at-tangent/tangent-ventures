import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";

export default function MediaSection() {
  return (
    <div className="flex flex-col items-center mt-56 gap-y-8 h-[50vh]">
      <h2 className="text-5xl font-medium">FEATURED MEDIA</h2>
      <div className="grid grid-cols-3 gap-x-8 w-2/3 z-50">
        <div className="flex flex-col  bg-white/70 backdrop-blur-sm rounded-xl p-8">
          <div className="flex items-center">
            <span className="text-grey-80 text-sm">May 14, 2024</span>
            <div className="grow" />
            <div className="rounded-full outline outline-1 px-4 py-1 text-xs text-grey-60">
              PODCAST
            </div>
          </div>
          <h1 className="text-2xl font-semibold mt-4 line-clamp-2 self-start">
            Impedit laboriosam sunt aut autem. Sint reprehenderit temporibus ea
            nemo.
          </h1>
          <a className="flex items-center text-grey-80 text-sm font-semibold mt-8">
            READ MORE <ArrowTopRightOnSquareIcon className="size-5 ml-3" />
          </a>
        </div>
        <div className="flex flex-col  bg-white/70 backdrop-blur-sm rounded-xl p-8">
          <div className="flex items-center">
            <span className="text-grey-80 text-sm">May 14, 2024</span>
            <div className="grow" />
            <div className="rounded-full outline outline-1 px-4 py-1 text-xs text-grey-60">
              PODCAST
            </div>
          </div>
          <h1 className="text-2xl font-semibold mt-4 line-clamp-2 self-start">
            Impedit laboriosam sunt aut autem. Sint reprehenderit temporibus ea
            nemo.
          </h1>
          <a className="flex items-center text-grey-80 text-sm font-semibold mt-8">
            READ MORE <ArrowTopRightOnSquareIcon className="size-5 ml-3" />
          </a>
        </div>
        <div className="flex flex-col  bg-white/70 backdrop-blur-sm rounded-xl p-8">
          <div className="flex items-center">
            <span className="text-grey-80 text-sm">May 14, 2024</span>
            <div className="grow" />
            <div className="rounded-full outline outline-1 px-4 py-1 text-xs text-grey-60">
              PODCAST
            </div>
          </div>
          <h1 className="text-2xl font-semibold mt-4 line-clamp-2 self-start">
            Impedit laboriosam sunt aut autem. Sint reprehenderit temporibus ea
            nemo.
          </h1>
          <a className="flex items-center text-grey-80 text-sm font-semibold mt-8">
            READ MORE <ArrowTopRightOnSquareIcon className="size-5 ml-3" />
          </a>
        </div>
      </div>
      <a
        className="bg-white rounded-full px-6 py-3 font-medium group relative overflow-hidden"
        href="/media"
      >
        <span className="inline-block translate-y-8 transition-all group-hover:translate-y-0">
          VIEW ALL MEDIA
        </span>
        <span className="absolute left-0 mx-6 inline-block transition-all group-hover:-translate-y-8">
          VIEW ALL MEDIA
        </span>
      </a>
    </div>
  );
}
