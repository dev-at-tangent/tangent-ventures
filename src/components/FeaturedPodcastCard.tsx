import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";

export default function FeaturedVideo() {
  return (
    <div className="bg-white text-grey-80 rounded-xl p-6 flex w-full mt-8">
      <iframe
        className="w-3/5 aspect-video"
        src="https://www.youtube.com/embed/tgbNymZ7vqY"
      ></iframe>
      <div className="flex flex-col justify-center  ml-12">
        <div className="flex">
          <span>May 14, 2024</span>
          <div className="grow" />
          <div className="flex items-center justify-center border border-grey-60 text-grey-60 font-medium rounded-full text-sm px-4">
            ON THE TANGENT
          </div>
        </div>
        <h1 className="text-3xl font-semibold text-black mt-4">
          Sint reprehenderit temporibus ea nemo
        </h1>
        <a
          href="https://www.youtube.com/embed/tgbNymZ7vqY"
          className="flex mt-8 font-semibold items-center text-sm hover:underline underline-offset-8"
        >
          WATCH ON YOUTUBE
          <ArrowTopRightOnSquareIcon className="size-5 ml-2" />
        </a>
      </div>
    </div>
  )
}
