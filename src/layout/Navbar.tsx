import { useState } from "react";
import { useScroll } from "../utils/useScroll";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "../assets/Logo.svg";
import XIcon from "../assets/XIcon";

export default function Navbar({ currentPath }: { currentPath: string }) {
  const links = [
    { name: "ABOUT", path: "/about" },
    { name: "ENDORSEMENTS", path: "/endorsements" },
    { name: "THESIS", path: "/thesis" },
    { name: "PORTFOLIO", path: "/portfolio" },
    { name: "MEDIA", path: "/media" },
    { name: "CONTACT", path: "/contact" },
  ];

  const [openMenu, setOpenMenu] = useState(false);
  const { scrollDirection } = useScroll();
  const styles = {
    active: "opacity-1 translate-y-0 transition-all duration-300",
    inactive: "opacity-0 -translate-y-full transition-all duration-300",
  };

  return (
    <>
      <div
        className={`hidden desktop:block sticky z-20 top-4 w-full ${
          scrollDirection === "up" && window.scrollY > 0
            ? styles.inactive
            : styles.active
        }`}
      >
        <div className="mx-20 flex items-center justify-evenly text-sm font-medium gap-x-1 rounded-full backdrop-blur-lg bg-white/60 px-4 py-3">
          <a href="/">
            <img src={Logo.src} />
          </a>
          <div className="grow" />

          {links.map((link) => (
            <a
              key={link.name}
              href={link.path}
              className={`relative inline-block overflow-hidden group rounded-full py-2 hover:bg-turq ${
                currentPath === link.name.toLowerCase() && "bg-grey-40"
              }`}
            >
              <span className="inline-block mx-6 translate-y-8 transition-all group-hover:translate-y-0">
                {link.name}
              </span>
              <span className="absolute left-0 mx-6 inline-block transition-all group-hover:-translate-y-8">
                {link.name}
              </span>
            </a>
          ))}

          <a
            href="https://x.com/tangent_xyz"
            target="_blank"
            className={`relative flex  overflow-hidden py-2 group rounded-full hover:bg-turq`}
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
      <div
        className={`desktop:hidden w-full px-6 top-4 sticky z-30 ${
          scrollDirection === "up" && window.scrollY > 0
            ? styles.inactive
            : styles.active
        }`}
      >
        <div className="rounded-full backdrop-blur-lg bg-white/60 w-full flex items-center justify-between p-4">
          <a href="/" className="w-1/3 max-w-48">
            <img src={Logo.src} />
          </a>
          {!openMenu ? (
            <Bars3Icon
              className="size-6 cursor-pointer"
              onClick={() => setOpenMenu(true)}
            />
          ) : (
            <XMarkIcon
              className="size-6 cursor-pointer"
              onClick={() => setOpenMenu(false)}
            />
          )}
        </div>
      </div>
      <div
        className={`fixed flex flex-col gap-6 z-20 h-screen w-screen pt-24 px-8 bg-grey-30 transition-transform duration-300 ${
          openMenu ? "translate-y-0" : "-translate-y-full"
        } `}
      >
        {links.map((link) => (
          <a
            key={link.name}
            className="text-grey-80 font-semibold text-3xl"
            href={link.path}
          >
            {link.name}
          </a>
        ))}
        <a href="https://www.twitter.com" target="_blank">
          <XIcon className="w-6 text-grey-80" />
        </a>
      </div>
    </>
  );
}
