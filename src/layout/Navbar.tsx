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
          className={`hover:bg-turq px-6 py-2 rounded-full transition-colors ${
            currentPath === "about" && "bg-turq"
          }`}
        >
          ABOUT
        </a>
        <a
          href="/endorsements"
          className={`hover:bg-turq px-6 py-2 rounded-full transition-colors ${
            currentPath === "endorsements" && "bg-turq"
          }`}
        >
          ENDORSEMENTS
        </a>
        <a
          href="/thesis"
          className={`hover:bg-turq px-6 py-2 rounded-full transition-colors ${
            currentPath === "thesis" && "bg-turq"
          }`}
        >
          THESIS
        </a>
        <a
          href="/portfolio"
          className={`hover:bg-turq px-6 py-2 rounded-full transition-colors ${
            currentPath === "portfolio" && "bg-turq"
          }`}
        >
          PORTFOLIO
        </a>
        <a
          href="/media"
          className={`hover:bg-turq px-6 py-2 rounded-full transition-colors ${
            currentPath === "media" && "bg-turq"
          }`}
        >
          MEDIA
        </a>
        <a
          href="/contact"
          className={`hover:bg-turq px-6 py-2 rounded-full transition-colors ${
            currentPath === "contact" && "bg-turq"
          }`}
        >
          CONTACT
        </a>
        <a
          href="https://www.x.com"
          target="_blank"
          className="hover:bg-turq px-4 py-2 rounded-full transition-colors"
        >
          <XIcon />
        </a>
      </div>
    </div>
  );
}
