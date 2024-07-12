import { useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Balloon from "../assets/balloon.png";

gsap.registerPlugin(ScrollTrigger);

export default function ThesisSection({
  title,
  text,
  highlightedText,
}: {
  title: string;
  text: string;
  highlightedText: string;
}) {
  const ref = useRef(null);
  const triggerRef = useRef(null);
  useGSAP(
    () => {
      gsap.to(ref.current, {
        backgroundPosition: "-99.99% 0",
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top 60%",
          end: "bottom 60%",
          scrub: true,
        },
      });
    },
    { scope: ref }
  );

  useEffect(() => {
    // Refresh ScrollTrigger after a short delay to ensure all content is loaded
    const refreshTimer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    return () => clearTimeout(refreshTimer);
  }, []);

  return (
    <div className="flex flex-col items-center text-lg">
      <img src={Balloon.src} alt="balloon" className="w-1/2" />

      <h1 ref={triggerRef} className="text-5xl">
        {title}
      </h1>
      <p className="text-center w-1/2 mt-8">
        {text}
        <span
          ref={ref}
          className="font-bold bg-gradient-to-r from-transparent from-50% via-transparent via-50% to-turq to-50%
          bg-[-0%_0]
          bg-[length:200%_auto]
          transition-all
          duration-500
          ease-out"
        >
          {highlightedText}
        </span>
      </p>
    </div>
  );
}
