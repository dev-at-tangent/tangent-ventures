import Sei from "../assets/sei.png";
import SeiColor from "../assets/seicolor.png";
import Ena from "../assets/ena.png"

export default function EndorsementCard() {
  return (
    <div className="flex items-start bg-white rounded-xl p-12 max-w-xl group">
      <img src={Sei.src} className="group-hover:hidden" />
      <img src={SeiColor.src} className="hidden group-hover:block" />
      <div className="flex flex-col ml-12">
        <p>
          "...carved out a unique segment of the venture market. Whilst some
          investors are too large and
          <span
            className="font-bold bg-gradient-to-r from-transparent from-50% via-transparent via-50% to-turq to-50%
          bg-[-0%_0]
          bg-[length:200%_auto]
          no-underline
          transition-[background-position]
          duration-500
          ease-out
          group-hover:bg-[-99.99%_0]"
          >
            spread to thin to provide tangible value at the early stage,
          </span>{" "}
          their structure of angel investing with prop capital into only high
          conviction ideas enables them to support founders unlike any other
          investment firm I've come across. I can't think of a higher value add
          per dollar on your cap table and would recommend them to anyone."
        </p>

        <div className="flex items-center mt-12">
          <img src={Ena.src} className="w-16" />
          <div className="flex flex-col ml-4">
            <span className="text-sm font-bold">GUY YOUNG</span>
            <span className="text-grey-80">Founder of Ethena</span>
          </div>
        </div>
      </div>
    </div>
  );
}
