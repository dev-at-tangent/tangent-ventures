import { useRef } from "react";
import { gsap } from "gsap/gsap-core";
import { useGSAP } from "@gsap/react";
import Logo from "../assets/Logo.svg";
import XIcon from "../assets/XIcon";

export default function Navbar({ currentPath }: { currentPath: string }) {
  const containerRef = useRef(null);
  const originalTextRef = useRef(null);
  const newTextRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ paused: true });

      tl.to(originalTextRef.current, {
        yPercent: -100,
        opacity: 0,
        duration: 0.5,
        ease: "power2.inOut",
      }).fromTo(
        newTextRef.current,
        {
          yPercent: 100,
          opacity: 0,
        },
        {
          yPercent: 0,
          opacity: 1,
          duration: 0.5,
          ease: "power2.inOut",
        },
        "<" // This makes the second animation start at the same time as the first
      );

      // Event listeners
      containerRef.current.addEventListener("mouseenter", () => tl.play());
      containerRef.current.addEventListener("mouseleave", () => tl.reverse());
    },
    { scope: containerRef }
  );
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
          ref={containerRef}
          className="relative inline-block overflow-hidden"
        >
          <span ref={originalTextRef} className="inline-block">
            MEDIA
          </span>
          <span ref={newTextRef} className="absolute left-0 inline-block">
            MEDIA
          </span>
        </a>
        
        <a
          href="/contact"
          ref={containerRef}
          className="relative inline-block overflow-hidden"
        >
          <span ref={originalTextRef} className="inline-block">
            CONTACT
          </span>
          <span ref={newTextRef} className="absolute left-0 inline-block">
            CONTACT
          </span>
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
