import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const TextTransition = () => {
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
    <a href="/contact" ref={containerRef} className="relative inline-block overflow-hidden">
      <span ref={originalTextRef} className="inline-block">
        contact
      </span>
      <span ref={newTextRef} className="absolute left-0 inline-block">
        contact
      </span>
    </a>
  );
};

export default TextTransition;
