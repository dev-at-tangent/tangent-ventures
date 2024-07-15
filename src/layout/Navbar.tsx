import Logo from "../assets/Logo.svg";
import XIcon from "../assets/XIcon";

export default function Navbar({ currentPath }: { currentPath: string }) {
  return (
    <div className="sticky z-10 top-4 w-full">
      <div className="mx-20 flex items-center justify-evenly text-sm font-medium gap-x-1 rounded-full backdrop-blur-lg bg-white/60 px-4 py-2">
        <a href="/">
          <img src={Logo.src} />
        </a>
        <div className="grow" />
        <a
          href="/about"
          className={`relative inline-block overflow-hidden group rounded-full py-2 hover:bg-turq ${
            currentPath === "about" && "bg-turq"
          }`}
        >
          <span className="inline-block mx-6 translate-y-8 transition-all group-hover:translate-y-0">
            ABOUT
          </span>
          <span className="absolute left-0 mx-6 inline-block transition-all group-hover:-translate-y-8">
            ABOUT
          </span>
        </a>
        <a
          href="/endorsements"
          className={`relative inline-block overflow-hidden group rounded-full py-2 hover:bg-turq ${
            currentPath === "endorsements" && "bg-turq"
          }`}
        >
          <span className="inline-block mx-6 translate-y-8 transition-all group-hover:translate-y-0">
            ENDORSEMENTS
          </span>
          <span className="absolute left-0 mx-6 inline-block transition-all group-hover:-translate-y-8">
            ENDORSEMENTS
          </span>
        </a>
        <a
          href="/thesis"
          className={`relative inline-block overflow-hidden group rounded-full py-2 hover:bg-turq ${
            currentPath === "thesis" && "bg-turq"
          }`}
        >
          <span className="inline-block mx-6 translate-y-8 transition-all group-hover:translate-y-0">
            THESIS
          </span>
          <span className="absolute left-0 mx-6 inline-block transition-all group-hover:-translate-y-8">
            THESIS
          </span>
        </a>
        <a
          href="/portfolio"
          className={`relative inline-block overflow-hidden group rounded-full py-2 hover:bg-turq ${
            currentPath === "portfolio" && "bg-turq"
          }`}
        >
          <span className="inline-block mx-6 translate-y-8 transition-all group-hover:translate-y-0">
            PORTFOLIO
          </span>
          <span className="absolute left-0 mx-6 inline-block transition-all group-hover:-translate-y-8">
            PORTFOLIO
          </span>
        </a>

        <a
          href="/media"
          className={`relative inline-block overflow-hidden group rounded-full py-2 hover:bg-turq ${
            currentPath === "media" && "bg-turq"
          }`}
        >
          <span className="inline-block mx-6 translate-y-8 transition-all group-hover:translate-y-0">
            MEDIA
          </span>
          <span className="absolute left-0 mx-6 inline-block transition-all group-hover:-translate-y-8">
            MEDIA
          </span>
        </a>

        <a
          href="/contact"
          className={`relative inline-block overflow-hidden group rounded-full py-2 hover:bg-turq ${
            currentPath === "contact" && "bg-turq"
          }`}
        >
          <span className="inline-block mx-6 translate-y-8 transition-all group-hover:translate-y-0">
            CONTACT
          </span>
          <span className="absolute left-0 mx-6 inline-block transition-all group-hover:-translate-y-8">
            CONTACT
          </span>
        </a>

        <a
          href="https://x.com/tangent_xyz"
          className={`relative flex overflow-hidden py-2 group rounded-full hover:bg-turq`}
        >
          <span className="inline-block mx-4 translate-y-10 transition-all group-hover:translate-y-0">
            <XIcon className="w-5" />
          </span>
          <span className="absolute left-0 mx-4 inline-block transition-all group-hover:-translate-y-10">
            <XIcon className="w-5" />
          </span>
        </a>
      </div>
    </div>
  );
}
